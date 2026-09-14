// Single source of truth for ALL human-visible text on solutions.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `n`,
// section `eyebrow` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                steps?[{ title, body }],        → <ol><li><strong>…
//                items?[{ title, body, icon?, bullets?[] }],  → <h3> + <p> + <ul>
//                faqs?[{ q, a }],
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'solutions.html',
    hero: {
      eyebrow: 'Solutions',
      title: 'Insurance built for charter schools — not adapted to them.',
      lead: 'Property, liability, employee benefits, and year-round risk guidance from advisors who only serve charter schools.',
    },
    sections: [
      {
        id: 'solutions-grid',
        h2: 'Our Solutions',
        items: [
          {
            icon: 'shield-check',
            title: 'Property & Liability',
            body: "Authorizer-compliant coverage built around leased or owned facilities, shared campuses, and educators legal liability. The errors we find most often are big, and could mean the end of your mission if that claim hits. These aren't edge cases - they show up in the majority of policies we review.",
            bullets: [
              'Building, contents, and equipment coverage',
              'General and professional liability',
              'Educators legal liability (EPLI)',
              'Cyber liability and data breach response',
              'Auto and abuse / molestation coverage',
            ],
          },
          {
            icon: 'graduation-cap',
            title: 'Employee Benefits',
            body: 'Health, dental, vision, and retirement plans designed for school staff, school budgets, and school calendars.',
            bullets: [
              'Major medical and HSA-compatible plans',
              'Dental, vision, life, and disability',
              '403(b) retirement and pension alternatives',
              'Voluntary benefits and worksite products',
              'Open-enrollment and onboarding support',
            ],
          },
          {
            icon: 'compass',
            title: 'Risk Guidance',
            body: 'Year-round advisory, contract review, claims advocacy, renewal benchmarking, and board level risk briefings. Not just a quote at renewal.',
            bullets: [
              'Annual coverage and exposure review',
              'Claims advocacy when something goes wrong',
              'Renewal strategy and market benchmarking',
              'Vendor and contract review',
              'Board and board-meeting risk briefings',
            ],
          },
          {
            icon: 'handshake',
            title: 'Partnership Model',
            body: 'Independent and carrier agnostic. We represent you, not the insurer who pays the biggest bonus. Responsiveness, Follow Through, Innovation and Expertise are core to how we operate.',
            bullets: [
              'Multi-carrier benchmarking',
              'Transparent commission disclosure',
              'No high-pressure annual switches',
              'Direct line to a named advisor',
              'Long-term renewal stewardship',
            ],
          },
        ],
      },
      {
        id: 'how-it-works',
        eyebrow: 'How it works',
        h2: 'From first call to long-term steward.',
        paras: [
          'Most schools come to us mid-renewal, frustrated by a process that feels rushed and opaque. We slow it down.',
        ],
        steps: [
          { n: '01', title: 'Send what you have', body: "Upload current policies, plan summaries, or last year's renewal — whatever you can find." },
          { n: '02', title: 'Benchmark review', body: 'Within three business days we send back a written summary of where you stand against the market.' },
          { n: '03', title: 'Decide', body: 'Stay where you are with confidence, or let us shop the market on your behalf. No pressure.' },
          { n: '04', title: 'Steward', body: 'If you partner with us, we stay close all year — claims, renewals, board questions, vendor changes.' },
        ],
      },
    ],
    cta: {
      h2: 'Get a complimentary benchmark review.',
      para: "Send us your current policies and we'll show you where you stand — no obligation.",
      button: 'Start a Review',
    },
  };
});
