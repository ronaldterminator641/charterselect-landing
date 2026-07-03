'use strict';
// POST /api/upload-policy
// Validates form fields, gets-or-creates the Drive "Policy Uploads" folder,
// initiates a Drive resumable upload session, and returns the upload URL to
// the browser so the file is sent directly to Google Drive (no Vercel size limit).

const { google } = require('googleapis');

const NOTIFY_TO   = 'aschwen@charterselect.com';
const FOLDER_NAME = 'CharterSelect — Policy Uploads';
const EMAIL_RE    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    subject: 'aschwen@charterselect.com',
  });
}

// Module-level cache across warm invocations
let _folderId = null;

async function getOrCreateFolder(drive) {
  if (_folderId) return _folderId;
  if (process.env.GOOGLE_DRIVE_UPLOAD_FOLDER_ID) {
    _folderId = process.env.GOOGLE_DRIVE_UPLOAD_FOLDER_ID;
    return _folderId;
  }

  const search = await drive.files.list({
    q: `name='${FOLDER_NAME}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: 'files(id)',
    spaces: 'drive',
  });

  if (search.data.files.length > 0) {
    _folderId = search.data.files[0].id;
    return _folderId;
  }

  // First run: create the folder and share it with Aaron
  const folder = await drive.files.create({
    requestBody: { name: FOLDER_NAME, mimeType: 'application/vnd.google-apps.folder' },
    fields: 'id',
  });
  _folderId = folder.data.id;

  await drive.permissions.create({
    fileId: _folderId,
    requestBody: { type: 'user', role: 'writer', emailAddress: NOTIFY_TO },
    sendNotificationEmail: false,
  });

  console.log(`[upload-policy] Created Drive folder "${FOLDER_NAME}" id=${_folderId}`);
  return _folderId;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests. Please try again later.' });

  const { school_name, contact_name, email, file_name, file_type, file_size } = req.body || {};

  if (!school_name?.trim() || !email?.trim() || !file_name?.trim()) {
    return res.status(422).json({ error: 'School name, email, and file are required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(422).json({ error: 'Invalid email address.' });
  }
  if (file_size && file_size > 50 * 1024 * 1024) {
    return res.status(413).json({ error: 'File too large. Maximum 50 MB.' });
  }

  try {
    const auth  = getAuth();
    const drive = google.drive({ version: 'v3', auth });

    const folderId = await getOrCreateFolder(drive);

    // Get a short-lived access token for the resumable upload initiation
    const { token } = await auth.getAccessToken();

    // Start a Drive resumable upload session.
    // The Location URL returned here is sent to the browser, which PUTs the
    // file directly to Drive — bypassing Vercel's 4.5 MB body limit entirely.
    const initRes = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable',
      {
        method: 'POST',
        headers: {
          'Authorization':           `Bearer ${token}`,
          'Content-Type':            'application/json',
          'X-Upload-Content-Type':   file_type || 'application/pdf',
          ...(file_size ? { 'X-Upload-Content-Length': String(file_size) } : {}),
        },
        body: JSON.stringify({
          name:    `${school_name.trim()} — ${file_name}`,
          parents: [folderId],
        }),
      }
    );

    if (!initRes.ok) {
      const text = await initRes.text();
      console.error('[upload-policy] Drive init error', initRes.status, text);
      return res.status(502).json({ error: 'Could not initialize upload session.' });
    }

    const uploadUrl = initRes.headers.get('location');
    if (!uploadUrl) return res.status(502).json({ error: 'Drive did not return an upload URL.' });

    return res.status(200).json({ uploadUrl });
  } catch (err) {
    console.error('[upload-policy] Error:', err.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};
