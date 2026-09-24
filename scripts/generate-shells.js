#!/usr/bin/env node
// Regenerates the static SEO shell (<div id="root">…</div>) of each page that
// has a content module in content/pages/. The shell is rendered from the SAME
// object the page's JSX renders (loaded in the browser as window.__PAGE_CONTENT),
// so the raw-HTML text Google crawls can never drift from what visitors see.
//
// Run: node scripts/generate-shells.js
// Runs in every build (vercel.json) before generate-sitemap.js.
//
// Each target page must contain the markers:
//   <div id="root"><!--SHELL:<name>--> … <!--/SHELL--></div>
// Missing markers are a hard error — never silently skipped — so a page can't
// quietly fall out of shell generation (the chokepoint must stay observable).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const NAV = [
  ['/', 'CharterSelect'],
  ['/property-liability', 'Property &amp; Liability'],
  ['/employee-benefits', 'Employee Benefits'],
  ['/why', 'Why CharterSelect'],
  ['/commitment', 'Our Commitment'],
  ['/about', 'About'],
  ['/insights', 'Insights'],
  ['/renewal-report-card', 'Renewal Report Card'],
  ['/bond-compliance-review', 'Bond Compliance Review'],
  ['/solutions', 'Solutions'],
  ['/contact', 'Get a Free Review'],
];

function renderQuote(q) {
  const attr = [q.name, q.role, q.date].filter(Boolean).map(esc).join(', ');
  return [
    '<blockquote>',
    q.outcome ? `<p><strong>${esc(q.outcome)}</strong></p>` : '',
    `<p>${esc(q.quote)}</p>`,
    attr ? `<footer>${attr}</footer>` : '',
    '</blockquote>',
  ].filter(Boolean).join('');
}

function renderSection(s) {
  const out = [];
  if (s.h2) out.push(`<h2>${esc(s.h2)}</h2>`);
  for (const p of s.paras || []) out.push(`<p>${esc(p)}</p>`);
  if (s.bullets && s.bullets.length) {
    out.push('<ul>' + s.bullets.map(b => `<li>${esc(b)}</li>`).join('') + '</ul>');
  }
  if (s.steps && s.steps.length) {
    out.push('<ol>' + s.steps.map(st =>
      `<li><strong>${esc(st.title)}</strong> ${esc(st.body || '')}</li>`).join('') + '</ol>');
  }
  for (const it of s.items || []) {
    out.push(`<h3>${esc(it.title)}</h3>`);
    if (it.body) out.push(`<p>${esc(it.body)}</p>`);
    if (it.bullets && it.bullets.length) {
      out.push('<ul>' + it.bullets.map(b => `<li>${esc(b)}</li>`).join('') + '</ul>');
    }
  }
  for (const f of s.faqs || []) {
    out.push(`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`);
  }
  for (const q of s.quotes || []) out.push(renderQuote(q));
  return out.join('');
}

function renderShell(content) {
  const parts = [];
  parts.push('<header><nav>' + NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join(' | ') + '</nav></header>');
  parts.push('<main>');
  parts.push(`<h1>${esc(content.hero.title)}</h1>`);
  if (content.hero.lead) parts.push(`<p>${esc(content.hero.lead)}</p>`);
  for (const s of content.sections || []) parts.push(renderSection(s));
  if (content.cta) {
    parts.push(`<h2>${esc(content.cta.h2)}</h2>`);
    if (content.cta.para) parts.push(`<p>${esc(content.cta.para)} <a href="/contact">${esc(content.cta.button || 'Get a Free Review')}</a></p>`);
  }
  parts.push('</main>');
  parts.push('<footer><a href="/accessibility">Accessibility Statement</a></footer>');
  return parts.join('');
}

const modules = fs.existsSync(PAGES_DIR)
  ? fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.js')).sort()
  : [];

if (modules.length === 0) {
  console.error('generate-shells: no content modules found in content/pages/ — nothing to do.');
  process.exit(1);
}

let failed = false;
for (const mod of modules) {
  const content = require(path.join(PAGES_DIR, mod));
  const target = path.join(ROOT, content.htmlFile);
  if (!fs.existsSync(target)) {
    console.error(`generate-shells: ${mod} → ${content.htmlFile} does not exist`);
    failed = true;
    continue;
  }
  const html = fs.readFileSync(target, 'utf8');
  const name = path.basename(mod, '.js');
  const re = new RegExp(`(<div id="root"><!--SHELL:${name}-->)[\\s\\S]*?(<!--/SHELL--></div>)`);
  if (!re.test(html)) {
    console.error(`generate-shells: ${content.htmlFile} is missing markers <div id="root"><!--SHELL:${name}--> … <!--/SHELL--></div>`);
    failed = true;
    continue;
  }
  const shell = renderShell(content);
  // Replacement via function — a literal `$1${shell}$2` template would let `$`
  // sequences inside the content (e.g. "$100,000") be parsed as capture refs.
  const next = html.replace(re, (_m, open, close) => open + shell + close);
  if (next !== html) {
    fs.writeFileSync(target, next, 'utf8');
    console.log(`shell updated: ${content.htmlFile} (${shell.length} chars)`);
  } else {
    console.log(`shell unchanged: ${content.htmlFile}`);
  }
}

if (failed) {
  console.error('generate-shells: FAILED — fix the errors above; shells must never silently skip a page.');
  process.exit(1);
}
