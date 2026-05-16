// Triggered automatically by Netlify on every successful deploy.
// Named *-background so it gets a 15-minute timeout (pings are fast, but safe).

const { pingAll } = require('./ping-sitemap');

exports.handler = async () => {
  console.log('[deploy-succeeded] Pinging search engines after deploy…');
  const results = await pingAll();
  console.log('[deploy-succeeded] Done:', JSON.stringify(results));
};
