#!/usr/bin/env node
// Generates the static /insights section from content/insights-data.js.
// Run: node scripts/generate-insights.js
// Also called by the Netlify build command (before generate-sitemap.js, so the
// sitemap picks up the emitted files). Every page is fully static HTML — no
// client-side rendering is required for any insights content.

const fs = require('fs');
const path = require('path');
const { HUBS, ARTICLES } = require('../content/insights-data.js');

const DOMAIN = 'https://www.charterselect.com';
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'insights');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const hubBySlug = Object.fromEntries(HUBS.map(h => [h.slug, h]));

// Incremental publishing: an article is live only once its body has real
// content (no [PLACEHOLDER marker left). Non-live articles are not emitted,
// not carded on hub pages, and never reach the sitemap (which walks emitted
// files). A hub with zero live articles is skipped entirely, and the index
// only shows hubs that exist.
const isLive = (a) => !a.body.includes('[PLACEHOLDER');
const LIVE_ARTICLES = ARTICLES.filter(isLive);
const articlesFor = (hubSlug) => LIVE_ARTICLES.filter(a => a.hub === hubSlug);
const LIVE_HUBS = HUBS.filter(h => articlesFor(h.slug).length > 0);

/* ── Shared chrome ─────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: '/property-liability', label: 'Property &amp; Liability' },
  { href: '/employee-benefits', label: 'Employee Benefits' },
  { href: '/why', label: 'Why CharterSelect' },
  { href: '/commitment', label: 'Our Commitment' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/renewal-report-card', label: 'Renewal Report Card' },
];

function head({ title, metaDescription, canonicalPath, jsonLd }) {
  const url = DOMAIN + canonicalPath;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(metaDescription)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(metaDescription)}" />
  <meta property="og:image" content="${DOMAIN}/assets/logo-horizontal.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
  <link rel="preload" href="/fonts/BODY_Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/fonts/SUBHEAD_Montserrat-SemiBold.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/fonts/HEADLINES_DMSerifDisplay-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="stylesheet" href="/colors_and_type.css" />
  <link rel="stylesheet" href="/site.css?v=2" />
  <link rel="icon" href="/assets/logo-icon.png" />
  <link rel="apple-touch-icon" href="/assets/logo-icon.png" />
  <style>
    .cs-breadcrumbs { font-size: 13px; color: var(--fg-3); margin: 0 0 18px; }
    .cs-breadcrumbs ol { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
    .cs-breadcrumbs li + li::before { content: '›'; margin-right: 6px; color: var(--fg-muted); }
    .cs-breadcrumbs a { color: var(--cs-teal); text-decoration: none; font-weight: 600; }
    .cs-breadcrumbs a:hover { text-decoration: underline; }
    .cs-insight-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 24px; }
    a.cs-insight-card { text-decoration: none; }
    .cs-insight-card .cs-card__title { font-size: 19px; }
    .cs-insight-card .cs-card__eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cs-teal); }
    .cs-insight-card .cs-card__more { font-size: 13px; font-weight: 600; color: var(--cs-teal); margin-top: auto; }
    @media (max-width: 720px) { .cs-insight-grid { grid-template-columns: 1fr; } }
    .cs-article-body h2 { font-family: var(--font-display); font-weight: 400; font-size: 30px; line-height: 1.2; margin: 40px 0 14px; color: var(--fg-1); }
    .cs-article-body h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; margin: 28px 0 10px; color: var(--fg-1); }
  </style>
</head>`;
}

function navHtml() {
  return `
<a class="cs-skip-link" href="#main-content">Skip to main content</a>
<header class="cs-nav" style="z-index:300; position:sticky;">
  <div class="cs-nav__inner">
    <a class="cs-nav__brand" href="/"><img src="/assets/logo-no-slogan.svg" alt="CharterSelect — Charter School Insurance" /></a>
    <nav class="cs-nav__links" aria-label="Main navigation">
      ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n      ')}
    </nav>
    <div class="cs-nav__cta">
      <a class="cs-btn cs-btn--primary cs-btn--sm" href="/contact" style="text-decoration:none">Get a Free Review</a>
    </div>
    <button class="cs-hamburger" id="cs-ham" aria-label="Open navigation menu" aria-expanded="false" aria-controls="cs-mobile-menu">
      <span class="cs-hamburger__bar" aria-hidden="true"></span>
      <span class="cs-hamburger__bar" aria-hidden="true"></span>
      <span class="cs-hamburger__bar" aria-hidden="true"></span>
    </button>
  </div>
  <nav id="cs-mobile-menu" class="cs-mobile-menu" aria-label="Mobile navigation" style="display:none">
    ${NAV_LINKS.map(l => `<a href="${l.href}" class="cs-mobile-menu__link">${l.label}</a>`).join('\n    ')}
    <a href="/contact" class="cs-mobile-menu__cta">Get a Free Review</a>
  </nav>
</header>
<script>
  (function () {
    var btn = document.getElementById('cs-ham');
    var menu = document.getElementById('cs-mobile-menu');
    btn.addEventListener('click', function () {
      var open = menu.style.display === 'none';
      menu.style.display = open ? 'flex' : 'none';
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      btn.querySelectorAll('.cs-hamburger__bar').forEach(function (b) { b.classList.toggle('open', open); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.style.display !== 'none') btn.click();
    });
  })();
</script>`;
}

function footerHtml() {
  return `
<footer class="cs-footer">
  <div class="cs-footer__inner">
    <div class="cs-footer__brand">
      <img src="/assets/logo-no-slogan.svg" alt="CharterSelect — Charter School Insurance" class="cs-footer__logo" />
      <p>Any insurance you need - built for charter schools, not adapted to them. The only agency built exclusively for charter schools.</p>
    </div>
    <div class="cs-footer__cols">
      <div>
        <h5>Coverage</h5>
        <a href="/property-liability">Property &amp; Liability</a>
        <a href="/employee-benefits">Employee Benefits</a>
      </div>
      <div>
        <h5>Insights</h5>
        ${LIVE_HUBS.map(h => `<a href="/insights/${h.slug}">${esc(h.name)}</a>`).join('\n        ')}
      </div>
      <div>
        <h5>Company</h5>
        <a href="/why">Why CharterSelect</a>
        <a href="/commitment">Our Commitment</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/accessibility">Accessibility</a>
      </div>
    </div>
  </div>
  <div class="cs-footer__bar">
    <span>© 2026 CharterSelect Insurance Solutions</span>
    <span class="cs-footer__nationwide"><span>Nationwide</span></span>
  </div>
</footer>`;
}

function breadcrumbsHtml(crumbs) {
  // crumbs: [{name, href?}] — last item is the current page (no link).
  return `
<nav class="cs-breadcrumbs" aria-label="Breadcrumb">
  <ol>
    ${crumbs.map((c, i) =>
      c.href && i < crumbs.length - 1
        ? `<li><a href="${c.href}">${esc(c.name)}</a></li>`
        : `<li aria-current="page">${esc(c.name)}</li>`
    ).join('\n    ')}
  </ol>
</nav>`;
}

function breadcrumbLd(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name.replace(/&amp;/g, '&'),
      ...(c.href ? { item: DOMAIN + c.href } : {}),
    })),
  };
}

function ctaStrip() {
  return `
<section class="cs-cta-strip">
  <div class="cs-cta-strip__inner">
    <div>
      <h2>Not sure how your coverage compares?</h2>
      <p>A complimentary benchmark review shows how your charter school's coverage and pricing stack up against similar schools — no obligation.</p>
    </div>
    <a class="cs-btn cs-btn--gold" href="/contact" style="text-decoration:none">Get a Free Review</a>
  </div>
</section>`;
}

function articleCard(a, { showHub = false } = {}) {
  const hub = hubBySlug[a.hub];
  return `
<a class="cs-card cs-insight-card" href="/insights/${a.hub}/${a.slug}">
  ${showHub ? `<span class="cs-card__eyebrow">${esc(hub.name)}</span>` : ''}
  <h3 class="cs-card__title">${esc(a.title)}</h3>
  <p class="cs-card__body">${esc(a.metaDescription).slice(0, 200)}</p>
  <span class="cs-card__more">Read article →</span>
</a>`;
}

function page({ title, metaDescription, canonicalPath, jsonLd, heroEyebrow, heroTitle, heroLead, crumbs, mainHtml }) {
  return `${head({ title, metaDescription, canonicalPath, jsonLd })}
<body>
${navHtml()}
<main>
  <section class="cs-page-hero" id="main-content">
    <div class="cs-page-hero__inner">
      ${breadcrumbsHtml(crumbs)}
      ${heroEyebrow ? `<div class="cs-eyebrow">${esc(heroEyebrow)}</div>` : ''}
      <h1 class="cs-page-hero__title">${esc(heroTitle)}</h1>
      ${heroLead ? `<p class="cs-lead">${heroLead}</p>` : ''}
    </div>
  </section>
${mainHtml}
${ctaStrip()}
</main>
${footerHtml()}
</body>
</html>
`;
}

/* ── Index page: /insights ─────────────────────────────────────────────── */

function buildIndex() {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Charter School Insurance Insights',
        url: DOMAIN + '/insights',
        description: 'Guides on charter school insurance, risk, and employee benefits.',
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      },
      breadcrumbLd(crumbs),
    ],
  };
  const mainHtml = `
  <section class="cs-section">
    <div class="cs-prose">
      ${LIVE_HUBS.length === 0 ? `<p style="color:var(--fg-2); max-width:70ch">New guides on charter school insurance, risk, and employee benefits are on the way. In the meantime, a complimentary benchmark review is the fastest way to get answers specific to your school.</p>` : ''}
      ${LIVE_HUBS.map(h => `
      <div style="margin-bottom:56px">
        <div class="cs-eyebrow">${esc(h.name)}</div>
        <h2 style="font-family:var(--font-display); font-weight:400; font-size:32px; margin:8px 0 4px"><a href="/insights/${h.slug}" style="color:var(--fg-1); text-decoration:none">${esc(h.title)}</a></h2>
        <p style="color:var(--fg-2); max-width:70ch">${esc(h.metaDescription).replace(/&amp;amp;/g, '&amp;')}</p>
        <div class="cs-insight-grid">
          ${articlesFor(h.slug).slice(0, 4).map(a => articleCard(a)).join('\n          ')}
        </div>
        <p style="margin-top:16px"><a class="cs-link" href="/insights/${h.slug}">All ${esc(h.name)} articles →</a></p>
      </div>`).join('\n')}
    </div>
  </section>`;

  return page({
    title: 'Charter School Insurance Insights | CharterSelect',
    metaDescription: 'Plain-language guides on charter school insurance, risk management, and employee benefits — written by specialists who serve only charter schools.',
    canonicalPath: '/insights',
    jsonLd,
    heroEyebrow: 'Insights',
    heroTitle: 'Charter School Insurance Insights',
    heroLead: 'Plain-language guidance on the coverage, risk, and benefits decisions charter school leaders actually face.',
    crumbs,
    mainHtml,
  });
}

/* ── Hub pages: /insights/<hub> ────────────────────────────────────────── */

function buildHub(hub) {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: hub.name, href: `/insights/${hub.slug}` },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: hub.title,
        url: `${DOMAIN}/insights/${hub.slug}`,
        description: hub.metaDescription.replace(/&amp;/g, '&'),
        isPartOf: { '@type': 'WebSite', url: DOMAIN },
      },
      breadcrumbLd(crumbs),
    ],
  };
  const mainHtml = `
  <section class="cs-section">
    <div class="cs-prose">
      <div class="cs-article-body">${hub.intro}</div>
      <h2 style="font-family:var(--font-display); font-weight:400; font-size:30px; margin:48px 0 4px">Articles in this guide</h2>
      <div class="cs-insight-grid">
        ${articlesFor(hub.slug).map(a => articleCard(a)).join('\n        ')}
      </div>
    </div>
  </section>`;

  return page({
    title: hub.title,
    metaDescription: hub.metaDescription.replace(/&amp;/g, '&'),
    canonicalPath: `/insights/${hub.slug}`,
    jsonLd,
    heroEyebrow: hub.name,
    heroTitle: hub.title,
    crumbs,
    mainHtml,
  });
}

/* ── Article pages: /insights/<hub>/<article> ──────────────────────────── */

function buildArticle(article) {
  const hub = hubBySlug[article.hub];
  const urlPath = `/insights/${article.hub}/${article.slug}`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: hub.name, href: `/insights/${hub.slug}` },
    { name: article.title },
  ];
  const siblings = articlesFor(hub.slug).filter(a => a.slug !== article.slug);
  const idx = articlesFor(hub.slug).findIndex(a => a.slug === article.slug);
  const related = [0, 1, 2].map(k => siblings[(idx + k) % siblings.length])
    .filter((v, i, arr) => v && arr.indexOf(v) === i)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription.replace(/&amp;/g, '&'),
        url: DOMAIN + urlPath,
        mainEntityOfPage: { '@type': 'WebPage', '@id': DOMAIN + urlPath },
        author: { '@type': 'Organization', name: 'CharterSelect', url: DOMAIN },
        publisher: {
          '@type': 'Organization',
          name: 'CharterSelect',
          logo: { '@type': 'ImageObject', url: `${DOMAIN}/assets/logo-primary.png` },
        },
        image: `${DOMAIN}/assets/logo-horizontal.png`,
        articleSection: hub.name,
      },
      breadcrumbLd(crumbs),
    ],
  };

  const mainHtml = `
  <section class="cs-section">
    <div class="cs-prose">
      <article class="cs-article-body">${article.body}</article>
      <p style="margin-top:40px"><a class="cs-link" href="/insights/${hub.slug}">← Back to ${esc(hub.name)}</a></p>
      ${related.length ? `<h2 style="font-family:var(--font-display); font-weight:400; font-size:28px; margin:48px 0 4px">Related reading</h2>
      <div class="cs-insight-grid">
        ${related.map(a => articleCard(a)).join('\n        ')}
      </div>` : ''}
    </div>
  </section>`;

  return page({
    title: article.title,
    metaDescription: article.metaDescription.replace(/&amp;/g, '&'),
    canonicalPath: urlPath,
    jsonLd,
    heroEyebrow: hub.name,
    heroTitle: article.title,
    crumbs,
    mainHtml,
  });
}

/* ── Emit ──────────────────────────────────────────────────────────────── */

// Rebuild from scratch so previously emitted pages that are no longer live
// (or were renamed) don't linger on disk or leak into the sitemap.
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), buildIndex(), 'utf8');

let count = 1;
for (const hub of LIVE_HUBS) {
  const dir = path.join(OUT, hub.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildHub(hub), 'utf8');
  count++;
  for (const a of articlesFor(hub.slug)) {
    fs.writeFileSync(path.join(dir, `${a.slug}.html`), buildArticle(a), 'utf8');
    count++;
  }
}

// Sanity checks the SEO requirements depend on.
const problems = [];
for (const p of [...HUBS, ...ARTICLES]) {
  const t = p.title.replace(/&amp;/g, '&');
  const d = p.metaDescription.replace(/&amp;/g, '&');
  if (t.length > 60) problems.push(`title >60 chars: ${t}`);
  if (d.length > 155) problems.push(`meta description >155 chars: ${p.slug}`);
  if (!/charter school/i.test(t)) problems.push(`title missing "charter school": ${t}`);
}
if (problems.length) {
  console.warn('SEO warnings:');
  problems.forEach(p => console.warn('  - ' + p));
}
const skippedArticles = ARTICLES.filter(a => !isLive(a));
const skippedHubs = HUBS.filter(h => !LIVE_HUBS.includes(h));
console.log(`insights: ${count} pages written (1 index, ${LIVE_HUBS.length} hubs, ${LIVE_ARTICLES.length} articles)`);
if (skippedArticles.length) console.log(`skipped ${skippedArticles.length} placeholder articles: ${skippedArticles.map(a => a.slug).join(', ')}`);
if (skippedHubs.length) console.log(`skipped ${skippedHubs.length} hubs with no live articles: ${skippedHubs.map(h => h.slug).join(', ')}`);
