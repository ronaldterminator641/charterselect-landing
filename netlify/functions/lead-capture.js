'use strict';
// Netlify Function — /.netlify/functions/lead-capture
// Writes lead to Google Sheets and sends a Gmail notification via App Password SMTP.

const { google } = require('googleapis');
const nodemailer  = require('nodemailer');

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

  const sourceLabel = data.source === 'renewal-report-card' ? '[Renewal Report Card] ' : '';
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
    ...(data.campuses            ? [`Situation:  ${data.insurance_situation}`] : []),
    ...(data.how_heard           ? [`Heard via:  ${data.how_heard}`]           : []),
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

// ── Handler ───────────────────────────────────────────────────────────────────

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  if (!data.school_name || !data.email) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: 'Missing required fields: school_name, email' }),
    };
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

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, warnings }),
  };
};
