'use strict';
// Vercel API route — replaces netlify/functions/lead-capture.js
// POST /api/lead-capture
// Writes to Google Sheets and sends a Gmail notification.

const { google } = require('googleapis');

const SHEET_ID    = process.env.GOOGLE_SHEETS_ID;
const INBOUND_TAB = 'Inbound Leads';

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

async function sendEmailNotification(data) {
  const clientId     = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
  if (!clientId || clientId === 'FILL_IN') return;

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret, 'urn:ietf:wg:oauth:2.0:oob');
  oauth2.setCredentials({ refresh_token: refreshToken });

  const gmail       = google.gmail({ version: 'v1', auth: oauth2 });
  const sourceLabel = data.source === 'renewal-report-card' ? '[Renewal Report Card] ' : '';
  const subject     = `${sourceLabel}New lead: ${data.school_name || 'Unknown School'}${data.state ? ` (${data.state})` : ''}`;
  const body = [
    `New inbound lead from charterselect.com`,
    `Source:     ${data.source || 'contact-form'}`,
    ``,
    `School:     ${data.school_name}`,
    `Contact:    ${data.contact_name} — ${data.title}`,
    `Email:      ${data.email}`,
    ...(data.phone               ? [`Phone:      ${data.phone}`]                        : []),
    ...(data.state               ? [`State:      ${data.state}`]                        : []),
    ...(data.campuses            ? [`Campuses:   ${data.campuses}`]                     : []),
    ...(data.insurance_situation ? [`Situation:  ${data.insurance_situation}`]          : []),
    ...(data.how_heard           ? [`Heard via:  ${data.how_heard}`]                   : []),
    ``,
    `Submitted:  ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT`,
  ].join('\n');

  const message = [
    `To: aschwen@charterselect.com`,
    `From: CharterSelect Website <aschwen@charterselect.com>`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ].join('\r\n');

  const encoded = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encoded } });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const data = req.body;

  if (!data || !data.school_name || !data.email) {
    return res.status(422).json({ error: 'Missing required fields: school_name, email' });
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
