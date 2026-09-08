'use strict';
// Vercel API route — POST /api/doc-view
// Logs a document/insights page view to the "Doc Views" tab of the CRM sheet.
// No email notification — this is a passive view log, not a lead.

const { google } = require('googleapis');

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const TAB = 'Doc Views';

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

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  // sendBeacon posts a Blob; Vercel may leave body as string.
  let data = req.body || {};
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch (_) { data = {}; }
  }

  const doc = String(data.doc || '').slice(0, 100);
  if (!doc) return res.status(400).send('Missing doc');

  const row = [
    new Date().toISOString(),
    doc,
    String(data.c || '').slice(0, 100),    // campaign / recipient tag from ?c=
    String(data.ref || '').slice(0, 200),  // referrer
  ];

  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${TAB}!A:D`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });
  } catch (err) {
    console.error('doc-view append failed:', err.message);
    return res.status(500).send('Log failed');
  }
  return res.status(204).end();
};
