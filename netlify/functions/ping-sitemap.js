// HTTP-invokable function: GET /.netlify/functions/ping-sitemap
// Also called internally by deploy-succeeded-background.js

const SITEMAP_URL = 'https://www.charterselect.com/sitemap.xml';

const ENGINES = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Bing',   url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
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

exports.handler = async () => {
  const results = await pingAll();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sitemap: SITEMAP_URL, pinged: results }),
  };
};

exports.pingAll = pingAll;
