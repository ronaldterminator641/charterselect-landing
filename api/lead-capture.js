'use strict';
// Vercel API route — POST /api/lead-capture
// Writes lead to Google Sheets and sends a Gmail notification via App Password SMTP.

const { google }    = require('googleapis');
const nodemailer    = require('nodemailer');

const SHEET_ID    = process.env.GOOGLE_SHEETS_ID;
const INBOUND_TAB = 'Inbound Leads';
const NOTIFY_TO   = 'aschwen@charterselect.com';
const GMAIL_USER  = 'aschwen@charterselect.com';

// ── Google Sheets ─────────────────────────────────────────────────────────────

function getSheetsClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set');
  const creds = JSON.parse(raw);
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

async function appendToSheet(data) {
  const sheets = getSheetsClient();
  const row = [
    new Date().toISOString(),
    data.school_name || '',
    data.contact_name || '',
    data.title || '',
    data.email || '',
    data.phone || '',
    data.state || '',
    data.campuses || '',
    data.insurance_situation || '',
    data.how_heard || '',
    'New',
  ];
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${INBOUND_TAB}!A:K`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] },
  });
}

// ── Gmail via App Password (SMTP) ─────────────────────────────────────────────

async function sendEmailNotification(data) {
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) {
    console.warn('GMAIL_APP_PASSWORD not set — skipping email notification');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: appPassword },
  });

  const sourceLabel = data.source === 'renewal-report-card' ? '[Renewal Report Card] '
                    : data.source === 'coverage-check'      ? '[Coverage Check] '
                    : '';
  const subject     = `${sourceLabel}New lead: ${data.school_name || 'Unknown School'}${data.state ? ` (${data.state})` : ''}`;

  const lines = [
    `New inbound lead from charterselect.com`,
    `Source:     ${data.source || 'contact-form'}`,
    ``,
    `School:     ${data.school_name}`,
    `Contact:    ${data.contact_name}${data.title ? ` — ${data.title}` : ''}`,
    `Email:      ${data.email}`,
    ...(data.phone               ? [`Phone:      ${data.phone}`]               : []),
    ...(data.state               ? [`State:      ${data.state}`]               : []),
    ...(data.campuses            ? [`Campuses:   ${data.campuses}`]             : []),
    ...(data.insurance_situation ? [`Situation:  ${data.insurance_situation}`] : []),
    ...(data.how_heard           ? [`Heard via:  ${data.how_heard}`]           : []),
    ...(data.priority_ranking    ? [``, `Priority Ranking (1 = most concerning):`, ...data.priority_ranking.split('\n').map(l => `  ${l}`)] : []),
    ``,
    `Submitted:  ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT`,
  ];

  await transporter.sendMail({
    from:    `"CharterSelect Website" <${GMAIL_USER}>`,
    to:      NOTIFY_TO,
    subject,
    text:    lines.join('\n'),
  });
}

// ── Spam protection ─────────────────────────────────────────────────────────

// Hidden form fields a human never fills. If any arrives non-empty, it's a bot.
const HONEYPOT_FIELDS = ['website', 'company', 'fax'];

// Best-effort in-memory rate limit. Serverless instances are reused for short
// bursts, so this catches rapid bot floods from a single IP. Not a hard guarantee.
const RATE_LIMIT_MAX    = 5;                // requests…
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;   // …per 10 minutes per IP
const hits = new Map();                     // ip -> [timestamps]

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude memory guard
  return recent.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Handler ───────────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const data = req.body;

  if (!data || !data.school_name || !data.email) {
    return res.status(422).json({ error: 'Missing required fields: school_name, email' });
  }

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry,
  // but write nothing.
  if (HONEYPOT_FIELDS.some(f => data[f] && String(data[f]).trim())) {
    return res.status(200).json({ success: true });
  }

  // Reject malformed emails and oversized payloads (basic abuse guard).
  if (!EMAIL_RE.test(String(data.email))) {
    return res.status(422).json({ error: 'Invalid email address' });
  }
  if (Object.values(data).some(v => typeof v === 'string' && v.length > 5000)) {
    return res.status(413).json({ error: 'Field too large' });
  }

  // Rate limit per client IP.
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
           || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
  }

  const warnings = [];

  try {
    await appendToSheet(data);
  } catch (err) {
    console.error('Sheets error:', err.message);
    warnings.push('sheet_append_failed');
  }

  try {
    await sendEmailNotification(data);
  } catch (err) {
    console.error('Gmail error:', err.message);
    warnings.push('email_send_failed');
  }

  return res.status(200).json({ success: true, warnings });
};
