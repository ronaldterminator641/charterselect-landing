// Single source of truth for ALL human-visible text on bond-compliance-review.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// IMPORTANT: the FAQ answers below must stay word-identical to the FAQPage
// JSON-LD in bond-compliance-review.html's <head>. Edit both together.
//
// Schema consumed by the shell generator (extra fields like `num` are
// layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                steps?[{ title, body }],        → <ol><li><strong>
//                items?[{ title, body?, bullets?[] }],
//                faqs?[{ q, a }] }]              → <h3> + <p>
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'bond-compliance-review.html',
    hero: {
      eyebrow: 'Bond & Lender Compliance',
      title: 'Charter School Bond Insurance Compliance Review',
      lead: 'Every two years, typically, a letter arrives from your bond trustee or lender: submit a signed, independent insurance consultant report confirming your insurance program still satisfies the covenants in your bond agreement. CharterSelect delivers it within 48 hours.',
    },
    sections: [
      {
        id: 'steps',
        eyebrow: 'How it works',
        h2: 'Three steps, 48 hours.',
        steps: [
          { num: '01', title: 'Send policies + bond insurance section', body: 'Upload your current insurance policies along with your bond agreement — or just the section covering insurance requirements.' },
          { num: '02', title: 'We review against your covenants', body: 'We cross-reference every coverage line, limit, and endorsement against what your bond agreement actually requires.' },
          { num: '03', title: 'Signed report within 48 hours', body: 'You receive a signed independent insurance consultant report, ready to submit to your bond holder, trustee, or lender.' },
        ],
      },
      {
        id: 'covers',
        eyebrow: "What's included",
        h2: 'What the report covers.',
        items: [
          {
            icon: 'file-check-2',
            title: 'Bond Covenant Insurance Review',
            bullets: [
              'Coverage lines vs. covenant requirements — every line of coverage your bond requires, matched against what\'s actually in force',
              'Limits — confirming policy limits meet or exceed covenant minimums',
              'Additional insured / loss payee / mortgagee wording — verifying the trustee, bondholder, or lender is named correctly on every applicable policy',
              'Notice of cancellation — confirming your policies provide the notice period your bond agreement requires',
              'Evidence of insurance — a compliant certificate / evidence package ready to submit alongside the signed report',
            ],
          },
        ],
      },
      {
        id: 'faqs',
        eyebrow: 'FAQ',
        h2: 'Frequently asked questions.',
        faqs: [
          {
            q: 'What is an independent insurance consultant report for bond holders?',
            a: 'An independent insurance consultant report is a signed, third-party review confirming that a charter school\'s insurance program meets the specific coverage requirements written into its bond covenants. Bond trustees and lenders require it as independent confirmation that the covenants are being met.',
          },
          {
            q: 'Who can sign a bond covenant insurance review for a charter school?',
            a: 'A licensed insurance professional who understands charter school bond covenants. We review charter school insurance programs against bond covenants and sign the review — including for schools whose coverage is placed elsewhere.',
          },
          {
            q: 'How often do bond holders require an insurance compliance review?',
            a: 'Typically every 2 years, per the bond covenants. The exact interval is set by your specific bond agreement, so check the insurance section of your covenants to confirm your school\'s schedule.',
          },
          {
            q: 'What do I need to send?',
            a: 'Copies of your current insurance policies (or declarations pages) plus your bond agreement — or just the section covering insurance requirements. That\'s all that\'s needed to start the review.',
          },
          {
            q: 'How long does it take?',
            a: '48 hours. Once we have your policies and the bond agreement\'s insurance section, you\'ll have a signed independent insurance consultant report ready to submit to your bond holder or lender.',
          },
        ],
      },
    ],
    cta: {
      h2: 'Need your signed review before the deadline?',
      para: 'Send us your policies and bond insurance section — we\'ll get the signed report back to you within 48 hours.',
      button: 'Start Your Review',
    },
  };
});
