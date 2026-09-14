// Single source of truth for ALL human-visible text on commitment.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon` and
// section `eyebrow` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                steps?[{ title, body }],        → <ol><li><strong>…
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
    htmlFile: 'commitment.html',
    hero: {
      eyebrow: 'Stronger Together',
      title: 'Strong schools build strong communities.',
      lead: 'CharterSelect was founded on a simple idea: insurance done well puts more money back into classrooms and more support back into communities.',
    },
    sections: [
      {
        id: 'pillars',
        items: [
          { icon: 'sprout', title: 'Strong schools.', body: 'Every dollar saved on insurance is a dollar that can stay in the classroom — for teachers, students, and the operations that hold a campus together.' },
          { icon: 'users-round', title: 'Strong communities.', body: 'A portion of CharterSelect revenue is directed to nonprofits and community initiatives that work alongside the schools we serve.' },
          { icon: 'compass', title: 'Honest counsel.', body: "We tell schools when to switch and when to stay. The relationship matters more than any single renewal — and that's how we measure ourselves." },
        ],
      },
      {
        id: 'giving',
        eyebrow: 'Where the giving goes',
        h2: 'A portion of every policy supports the work around the school.',
        paras: [
          'Charter schools rarely operate in isolation. The strongest campuses sit inside neighborhoods full of nonprofits, mentors, and family-support organizations doing the quieter work — the work that lets a child show up ready to learn.',
          'CharterSelect commits a share of revenue each year to those organizations. We let school leaders nominate causes that matter in their communities, and we publish where the funds go.',
          "It's a small thing in any single year. Over a decade of partnership, it adds up.",
        ],
        // layout-only: badge image alt text
        sealAlt: 'CharterSelect badge',
      },
      {
        id: 'promise',
        eyebrow: 'Our promise',
        h2: 'What you can expect from us.',
        steps: [
          { title: 'Fellow Disrupters.', body: "We believe there's a better way to do things, and constantly evaluate and bring fresh strategies to the table." },
          { title: 'Independent advice.', body: 'We benchmark across carriers and tell you when to stay put.' },
          { title: 'Responsiveness.', body: 'Not having to follow up with us allows you to focus on running the school.' },
          { title: 'A named advisor.', body: "No need to remember a depth chart — you know who to call, text, or email and we'll take care of the rest." },
          { title: 'Year-round availability.', body: 'Renewals are a moment, not the relationship.' },
          { title: 'Mission alignment.', body: 'A portion of revenue supports the communities you serve.' },
        ],
      },
    ],
    cta: {
      h2: "Let's start a conversation.",
      para: "Whether you're due for a renewal or just curious how your coverage compares, we'd love to hear from you.",
      button: 'Book a Call',
      // layout-only: secondary button label rendered by the JSX
      button2: 'Send an Email',
    },
  };
});
