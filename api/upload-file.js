'use strict';
// POST /api/upload-file
// Receives a raw binary file body (Content-Type = file mime type).
// Metadata arrives in custom X-* headers.
// Uploads directly to Google Drive impersonating aschwen@charterselect.com via DWD.
// Returns { fileId, driveLink }. Email notification is handled by /api/upload-complete.

const { google } = require('googleapis');
const { Readable } = require('stream');

// Tell Vercel to allow up to 4.5 MB request bodies (default is 1 MB).
module.exports.config = {
  api: { bodyParser: { sizeLimit: '4.5mb' } },
};

const NOTIFY_TO   = 'aschwen@charterselect.com';
const FOLDER_NAME = 'CharterSelect — Policy Uploads';
const EMAIL_RE    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BYTES   = 4 * 1024 * 1024; // 4 MB — Vercel Pro payload limit

const RATE_LIMIT_MAX    = 10;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const hits = new Map();

function isRateLimited(ip) {
  const now    = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT_MAX;
}

function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON not set');
  const credentials = JSON.parse(raw);
  return new google.auth.JWT({
    email:   credentials.client_email,
    key:     credentials.private_key,
    scopes:  ['https://www.googleapis.com/auth/drive'],
    subject: NOTIFY_TO,
  });
}

let _folderId = null;

async function getOrCreateFolder(drive) {
  if (_folderId) return _folderId;
  if (process.env.GOOGLE_DRIVE_UPLOAD_FOLDER_ID) {
    return (_folderId = process.env.GOOGLE_DRIVE_UPLOAD_FOLDER_ID);
  }
  const search = await drive.files.list({
    q:      `name='${FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: 'files(id)',
    spaces: 'drive',
  });
  if (search.data.files.length > 0) {
    return (_folderId = search.data.files[0].id);
  }
  const folder = await drive.files.create({
    requestBody: { name: FOLDER_NAME, mimeType: 'application/vnd.google-apps.folder' },
    fields: 'id',
  });
  _folderId = folder.data.id;
  console.log(`[upload-file] Created Drive folder "${FOLDER_NAME}" id=${_folderId}`);
  return _folderId;
}

async function readBody(req) {
  // If Vercel already buffered the body (binary content type), use it directly
  if (req.body && Buffer.isBuffer(req.body)) return req.body;
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', chunk => {
      total += chunk.length;
      if (total > MAX_BYTES) { req.destroy(); reject(new Error('FILE_TOO_LARGE')); }
      else chunks.push(chunk);
    });
    req.on('end',   () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests.' });

  const school_name  = decodeURIComponent(req.headers['x-school-name']  || '').trim();
  const contact_name = decodeURIComponent(req.headers['x-contact-name'] || '').trim();
  const email        = decodeURIComponent(req.headers['x-email']        || '').trim();
  const file_name    = decodeURIComponent(req.headers['x-file-name']    || 'upload').trim();
  const file_type    = req.headers['content-type'] || 'application/octet-stream';

  if (!school_name || !email) {
    return res.status(422).json({ error: 'School name and email are required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(422).json({ error: 'Invalid email address.' });
  }

  let fileBuffer;
  try {
    fileBuffer = await readBody(req);
  } catch (err) {
    if (err.message === 'FILE_TOO_LARGE') {
      return res.status(413).json({ error: 'File too large. Maximum 4 MB per file.' });
    }
    console.error('[upload-file] Read error:', err.message);
    return res.status(500).json({ error: 'Failed to read uploaded file.' });
  }

  if (!fileBuffer || fileBuffer.length === 0) {
    return res.status(422).json({ error: 'No file data received.' });
  }
  if (fileBuffer.length > MAX_BYTES) {
    return res.status(413).json({ error: 'File too large. Maximum 4 MB per file.' });
  }

  try {
    const auth     = getAuth();
    const drive    = google.drive({ version: 'v3', auth });
    const folderId = await getOrCreateFolder(drive);

    const driveFile = await drive.files.create({
      requestBody: {
        name:    `${school_name} — ${file_name}`,
        parents: [folderId],
      },
      media: {
        mimeType: file_type,
        body:     Readable.from(fileBuffer),
      },
      fields: 'id,webViewLink',
    });

    const fileId    = driveFile.data.id;
    const driveLink = driveFile.data.webViewLink || `https://drive.google.com/file/d/${fileId}/view`;

    console.log(`[upload-file] Uploaded "${file_name}" → Drive id=${fileId}`);
    return res.status(200).json({ success: true, fileId, driveLink });

  } catch (err) {
    console.error('[upload-file] Drive error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};
