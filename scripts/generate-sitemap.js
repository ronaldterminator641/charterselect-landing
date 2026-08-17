#!/usr/bin/env node
// Run: node scripts/generate-sitemap.js
// Also called by the Netlify build command automatically.

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.charterselect.com';
const ROOT = path.join(__dirname, '..');
const OUTPUT = path.join(ROOT, 'sitemap.xml');

// Pages not worth indexing
const EXCLUDE = new Set([
  'charterselect-marketing-site-lastnight.html', // scratch file
  'contact-success.html',                        // thank-you page, no SEO value
  'renewal-checklist.html',                      // replaced by renewal-report-card
  '404.html',                                    // noindex error page — must not be in sitemap
  'upload.html',                                 // noindex utility page — must not be in sitemap
  'what-we-find.html',                           // 301-redirected to /property-liability
]);

// Slug for a given filename (index.html → /)
function slug(filename) {
  if (filename === 'index.html') return '/';
  return '/' + filename.replace(/\.html$/, '');
}

// Priority hints — tweak as needed
const PRIORITY = {
  '/': '1.0',
  '/contact': '0.9',
  '/property-liability': '0.8',
  '/employee-benefits': '0.8',
  '/renewal-report-card': '0.8',
  '/solutions': '0.8',
};
function priority(s) {
  return PRIORITY[s] || '0.7';
}

const files = fs.readdirSync(ROOT)
  .filter(f => f.endsWith('.html') && !EXCLUDE.has(f))
  .sort();

// Last real content change per file: git commit date, not filesystem mtime.
// (CI checkouts reset mtime to deploy time, which made every lastmod identical.)
const { execSync } = require('child_process');
function gitLastmod(file) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, {
      cwd: ROOT, encoding: 'utf8',
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch (e) { /* fall through to mtime */ }
  return null;
}

const entries = files.map(f => {
  const stat = fs.statSync(path.join(ROOT, f));
  const lastmod = gitLastmod(f) || stat.mtime.toISOString().slice(0, 10);
  const loc = DOMAIN + slug(f);
  const pri = priority(slug(f));
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    `    <priority>${pri}</priority>`,
    '  </url>',
  ].join('\n');
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '',
  entries.join('\n\n'),
  '',
  '</urlset>',
].join('\n');

fs.writeFileSync(OUTPUT, xml, 'utf8');
console.log(`sitemap.xml written — ${files.length} URLs`);
files.forEach(f => console.log(`  ${DOMAIN}${slug(f)}`));
