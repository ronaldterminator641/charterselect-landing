'use strict';
// POST /api/upload-complete
// Called by the browser after it finishes uploading a file directly to Drive.
// Shares the file with Aaron and sends a Gmail notification with a Drive link.

const { google } = require('googleapis');
const nodemailer  = require('nodemailer');

const NOTIFY_TO  = 'aschwen@charterselect.com';
const GMAIL_USER = 'aschwen@charterselect.com';

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set');
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(raw),
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
  return google.drive({ version: 'v3', auth });
}

async function sendNotification({ school_name, contact_name, email, file_name, driveLink }) {
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) { console.warn('[upload-complete] GMAIL_APP_PASSWORD not set — skipping email'); return; }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user: GMAIL_USER, pass: appPassword },
  });

  await transporter.sendMail({
    from:    `"CharterSelect Website" <${GMAIL_USER}>`,
    to:      NOTIFY_TO,
    subject: `Policy Upload: ${school_name || 'Unknown School'}`,
    text: [
      'New policy upload from charterselect.com/upload',
      '',
      `School:   ${school_name   || '—'}`,
      `Contact:  ${contact_name  || '—'}`,
      `Email:    ${email         || '—'}`,
      `File:     ${file_name     || '—'}`,
      '',
      `View in Drive: ${driveLink}`,
      '',
      `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT`,
    ].join('\n'),
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { file_id, school_name, contact_name, email, file_name } = req.body || {};
  if (!file_id) return res.status(422).json({ error: 'Missing file_id.' });

  let driveLink = `https://drive.google.com/file/d/${file_id}/view`;

  try {
    const drive = getDriveClient();

    await drive.permissions.create({
      fileId: file_id,
      requestBody: { type: 'user', role: 'writer', emailAddress: NOTIFY_TO },
      sendNotificationEmail: false,
    });

    const file = await drive.files.get({ fileId: file_id, fields: 'webViewLink' });
    driveLink = file.data.webViewLink || driveLink;
  } catch (err) {
    console.error('[upload-complete] Drive error:', err.message);
    // Non-fatal — still send email with fallback link
  }

  try {
    await sendNotification({ school_name, contact_name, email, file_name, driveLink });
  } catch (err) {
    console.error('[upload-complete] Email error:', err.message);
  }

  return res.status(200).json({ success: true, driveLink });
};
