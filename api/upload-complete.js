'use strict';
// POST /api/upload-complete
// Called by the browser after all files finish uploading to Drive.
// Shares each file with Aaron and sends one Gmail notification with all links.

const { google } = require('googleapis');
const nodemailer  = require('nodemailer');

const NOTIFY_TO  = 'aschwen@charterselect.com';
const GMAIL_USER = 'aschwen@charterselect.com';

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set');
  const credentials = JSON.parse(raw);
  const auth = new google.auth.JWT({
    email:   credentials.client_email,
    key:     credentials.private_key,
    scopes:  ['https://www.googleapis.com/auth/drive'],
    subject: 'aschwen@charterselect.com',
  });
  return google.drive({ version: 'v3', auth });
}

async function sendNotification({ school_name, contact_name, email, file_names, driveLinks }) {
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) { console.warn('[upload-complete] GMAIL_APP_PASSWORD not set — skipping email'); return; }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user: GMAIL_USER, pass: appPassword },
  });

  const fileLines = file_names.map((name, i) => {
    const link = driveLinks[i] || 'link unavailable';
    return `  ${i + 1}. ${name || 'Unknown file'}\n     ${link}`;
  }).join('\n');

  const subject = file_names.length === 1
    ? `Policy Upload: ${school_name || 'Unknown School'}`
    : `Policy Upload (${file_names.length} files): ${school_name || 'Unknown School'}`;

  await transporter.sendMail({
    from:    `"CharterSelect Website" <${GMAIL_USER}>`,
    to:      NOTIFY_TO,
    subject,
    text: [
      'New policy upload from charterselect.com/upload',
      '',
      `School:   ${school_name   || '—'}`,
      `Contact:  ${contact_name  || '—'}`,
      `Email:    ${email         || '—'}`,
      '',
      `Files (${file_names.length}):`,
      fileLines,
      '',
      `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT`,
    ].join('\n'),
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { file_ids, file_names, file_id, file_name, school_name, contact_name, email } = req.body || {};

  // Support both multi-file (file_ids/file_names arrays) and legacy single-file
  const ids   = Array.isArray(file_ids)   ? file_ids   : (file_id   ? [file_id]   : []);
  const names = Array.isArray(file_names) ? file_names : (file_name ? [file_name] : []);

  if (!ids.length) return res.status(422).json({ error: 'Missing file_id(s).' });

  const driveLinks = [];

  try {
    const drive = getDriveClient();

    for (const id of ids) {
      let link = id ? `https://drive.google.com/file/d/${id}/view` : null;
      if (id) {
        try {
          await drive.permissions.create({
            fileId: id,
            requestBody: { type: 'user', role: 'writer', emailAddress: NOTIFY_TO },
            sendNotificationEmail: false,
          });
          const file = await drive.files.get({ fileId: id, fields: 'webViewLink' });
          link = file.data.webViewLink || link;
        } catch (err) {
          console.error(`[upload-complete] Drive error for file ${id}:`, err.message);
        }
      }
      driveLinks.push(link);
    }
  } catch (err) {
    console.error('[upload-complete] Drive client error:', err.message);
    while (driveLinks.length < ids.length) {
      const id = ids[driveLinks.length];
      driveLinks.push(id ? `https://drive.google.com/file/d/${id}/view` : null);
    }
  }

  try {
    await sendNotification({ school_name, contact_name, email, file_names: names, driveLinks });
  } catch (err) {
    console.error('[upload-complete] Email error:', err.message);
  }

  return res.status(200).json({ success: true, driveLinks });
};
