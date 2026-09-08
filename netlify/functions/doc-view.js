'use strict';
// Netlify Function — /.netlify/functions/doc-view (aliased to /api/doc-view)
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

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  let data = {};
  try { data = JSON.parse(event.body || '{}'); } catch (_) {}

  const doc = String(data.doc || '').slice(0, 100);
  if (!doc) return { statusCode: 400, body: 'Missing doc' };

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
    return { statusCode: 500, body: 'Log failed' };
  }
  return { statusCode: 204, body: '' };
};
