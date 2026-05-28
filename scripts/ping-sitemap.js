#!/usr/bin/env node
// Called at the end of the Vercel build command to notify search engines.
// Equivalent of the old deploy-succeeded-background Netlify function.

const SITEMAP_URL = 'https://www.charterselect.com/sitemap.xml';

const ENGINES = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Bing',   url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`   },
];

async function main() {
  console.log('Pinging search engines with updated sitemap…');
  const results = await Promise.allSettled(
    ENGINES.map(async ({ name, url }) => {
      try {
        const res = await fetch(url);
        console.log(`  ${name}: ${res.status} ${res.statusText}`);
      } catch (err) {
        // Non-fatal — don't fail the build if a ping fails
        console.warn(`  ${name}: failed — ${err.message}`);
      }
    })
  );
  console.log('Done.');
}

main().catch(err => {
  // Never fail the build over a sitemap ping
  console.warn('ping-sitemap error (non-fatal):', err.message);
  process.exit(0);
});
