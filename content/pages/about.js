// Single source of truth for ALL human-visible text on about.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `eyebrow`
// on sections, `badge`, `buttons`, `alts` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                steps?[{ title, body }],
//                items?[{ title, body, icon?, bullets?[] }],  → <h3> + <p>
//                faqs?[{ q, a }],
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'about.html',
    hero: {
      eyebrow: 'Message from the Founder',
      title: 'Why I Built CharterSelect',
      // layout-only: back-link label rendered by the JSX page hero
      back: 'Back to home',
    },
    sections: [
      {
        id: 'sidebar',
        // layout-only fields consumed by the JSX sidebar
        hint: 'hover for the origin story',
        name: 'Aaron Schwen',
        title: 'Founder, CharterSelect',
        alts: {
          front: 'Aaron Schwen, Founder of CharterSelect',
          back: 'Young Aaron on the farm',
        },
        buttons: {
          calendar: 'Book a Benchmark Review',
          linkedin: 'Connect on LinkedIn',
        },
      },
      {
        id: 'letter',
        paras: [
          'I started my career in insurance the same way most brokers do — working inside large firms with big client lists and corporate mandates. Early on I identified charter schools as an underserved niche and made a deliberate choice to go deep. What I found was a community I never expected to fall in love with.',
          'One of my first calls from a charter school CFO came while she was driving a school bus, asking me about a workers compensation audit. That moment told me everything I needed to know about this community. Entrepreneurial, mission-driven, wearing ten hats at once, and almost always underserved by brokers who saw them as too small to matter.',
          "I spent 15 years fighting that from the inside — pushing for better coverage, earlier renewals, and creative solutions for schools that couldn't afford to get it wrong. Too small to matter to the firm. Too important to me to accept that. So I stopped fighting from the inside and built something from scratch.",
          "CharterSelect exists for one reason. To be the broker I always wanted to be for the schools that deserve it most. Independent, carrier-agnostic, and built entirely around your mission — not a corporation's bottom line. A portion of every policy we write goes back to the communities our schools serve, because that's what this work is actually for.",
        ],
      },
      {
        id: 'closing',
        paras: [
          "If you've ever felt like your broker doesn't really understand your world, you're probably right. Let's fix that.",
        ],
      },
      {
        id: 'podcast',
        eyebrow: 'Recently Featured',
        paras: [
          'The Burnt Out Educator Podcast',
        ],
        items: [
          {
            title: "When Success Isn't Enough: Aaron Schwen on Leaving Corporate to Build with Purpose",
            body: 'Coach Joe sits down with Aaron to discuss why he walked away from a successful corporate insurance career to build a company centered around service instead of sales quotas.',
          },
        ],
        // layout-only: podcast link button labels rendered by the JSX
        buttons: {
          apple: 'Listen on Apple Podcasts',
          spotify: 'Listen on Spotify',
        },
      },
    ],
  };
});
