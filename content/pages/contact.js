// Single source of truth for the SEO-visible text on contact.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Form field labels, placeholders, select options, and button microcopy are
// UI (not SEO content) and stay in the page's JSX by design.
//
// Schema consumed by the shell generator (extra fields are layout-only and
// ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                steps?[{ title, body }],
//                items?[{ title, body, icon?, bullets?[] }],
//                faqs?[{ q, a }],
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'contact.html',
    hero: {
      eyebrow: 'Free · No Obligation',
      title: 'Get Your Free Insurance Benchmark Review',
      lead: "We'll compare your current coverage against what charter schools your size are actually paying — and show you exactly where you stand. Takes 10 minutes. No pitch, no obligation.",
      // layout-only: back-link label rendered by the JSX
      back: 'Back to home',
    },
    sections: [
      {
        id: 'reassurance',
        paras: [
          "No spam. No hard sell. We'll reach out within 1 business day.",
        ],
      },
    ],
  };
});
