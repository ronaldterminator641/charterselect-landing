'use strict';
// Vercel API route — replaces netlify/functions/ping-sitemap.js
// GET /api/ping-sitemap  — also called by scripts/ping-sitemap.js at build time

const SITEMAP_URL = 'https://www.charterselect.com/sitemap.xml';

const ENGINES = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Bing',   url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`   },
];

async function pingAll() {
  const results = await Promise.all(
    ENGINES.map(async ({ name, url }) => {
      try {
        const res = await fetch(url);
        console.log(`[ping-sitemap] ${name}: ${res.status} ${res.statusText}`);
        return { engine: name, status: res.status, ok: res.ok };
      } catch (err) {
        console.error(`[ping-sitemap] ${name} error:`, err.message);
        return { engine: name, error: err.message, ok: false };
      }
    })
  );
  return results;
}

module.exports = async function handler(req, res) {
  const results = await pingAll();
  return res.status(200).json({ sitemap: SITEMAP_URL, pinged: results });
};

module.exports.pingAll = pingAll;
