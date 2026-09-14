// Single source of truth for ALL human-visible text on property-liability.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `image`,
// `badge`, `widget`, `link` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                items?[{ title, body, icon? }],  → <h3> + <p>
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'property-liability.html',
    hero: {
      eyebrow: 'Property & Liability Insurance',
      title: '8 Coverage Gaps We Find in Almost Every Policy Review',
      lead: "These are the issues most brokers miss — because they don't specialize in charter schools.",
    },
    sections: [
      {
        id: 'gaps',
        items: [
          {
            icon: 'layers',
            title: 'Directors and Officers',
            body: 'When D&O liability is written as a standalone policy, the umbrella often doesn\'t extend over it — missing millions in coverage that could otherwise be protecting your Board for the very claims that tend to be most expensive.',
          },
          {
            icon: 'shield-alert',
            title: 'Violent Event',
            body: 'If your policy doesn\'t include Law Enforcement Legal Liability, your Board and staff may have zero coverage for claims arising from their response to an on-campus violent incident.',
          },
          {
            icon: 'calendar-x',
            title: 'Retro Dates on Critical Coverage',
            body: 'Sexual abuse, Employment practices Liability, and Failure to Educate can all be claims-made coverages — which means retro dates are everything. When a broker switches carriers without confirming the retro date carries over, years of prior-acts protection quietly disappear. We audit every retro date on every renewal.',
          },
          {
            icon: 'droplets',
            title: 'Water & Sewage Backup Sublimits',
            body: 'Property policies typically include water and sewage backup coverage — but with sublimits that are far too low to cover a serious loss. A single event can generate hundreds of thousands in damage. We benchmark sublimits against realistic claim scenarios for your specific facilities.',
          },
          {
            icon: 'lock-open',
            title: 'Funds Transfer Risk',
            body: 'A crime policy and a cyber policy each cover different pieces of the fraud puzzle — and schools relying on only one are exposed through the gap between them. Social engineering, fraudulent wire transfer, and ransomware all require carefully coordinated coverage to ensure there\'s no uncovered territory.',
          },
          {
            icon: 'file-warning',
            title: 'Misclassification',
            body: 'Charter schools don\'t fit neatly into standard underwriting boxes, and generalist brokers sometimes force them into the closest approximation. A misclassified policy may appear complete — until a major claim is denied because the insured business type doesn\'t match the loss. We know exactly how to classify charter schools correctly from day one.',
          },
          {
            icon: 'file-text',
            title: 'Satisfying Bond / Landlord Requirements',
            body: 'Many charter school bonds and landlord agreements specify minimum property insurance requirements — replacement cost valuation, maximum deductibles, or specific coverage triggers. A policy that doesn\'t satisfy those requirements can put your facility agreement or financing at risk. We cross-reference your property coverage against every relevant covenant.',
          },
          {
            icon: 'trending-up',
            title: 'Buying Too Much Insurance?',
            body: 'Workers Compensation rates are heavily influenced by experience modifiers and underwriter debits that don\'t always reflect actual risk. Beyond pricing, many schools are simply placed with the wrong carrier — one that doesn\'t specialize in education. You might even be buying policies for coverage you already have.',
          },
        ],
      },
      {
        id: 'risk-tools',
        h2: 'Free Risk Management Tools for Charter Schools',
        paras: [
          'Most brokers write your policy and disappear until renewal. We work differently.',
          'Schools we work with get access to free legal consultations, contract reviews, and reports formatted for bond holders and authorizers. Discounted background checks. A school safety resource library built for charter operations. Staff abuse prevention training. Water leak detection. Bus safety monitoring systems.',
          "These aren't services brokers typically charge extra for. Most brokers just don't know they exist.",
        ],
        // Layout-only: rendered as a link to /contact in the JSX.
        link: { text: "See what's included →", href: 'contact' },
      },
      {
        id: 'why-us',
        eyebrow: 'Why we can say this',
        h2: "We only work with charter schools. That's the entire list.",
        paras: [
          "The largest insurance brokers in the country are generalist agencies. Charter schools are one account type among thousands they serve. When they place a charter school policy, they're applying a template built for a different kind of organization.",
          "We've reviewed thousands of charter school policies since 2011 — exclusively. Every carrier relationship we have was built around charter-specific exposures. Every benchmark we deliver is measured against what other charter schools are actually carrying.",
          "The gaps above aren't obscure. They appear regularly in policies placed by competent generalist brokers — not because they're careless, but because they've never seen enough charter policies to recognize the pattern.",
          'We have.',
        ],
      },
      {
        id: 'featured-quote',
        badge: 'Saved nearly $100K annually · Same or better coverage',
        quotes: [
          {
            quote: 'Aaron boldly claimed he could save us $100,000 annually in premiums with the same or better coverage — and he did just that. Aaron makes the process tolerable and, more importantly, does the work so your staff does not have to.',
            name: 'Randal C. Shaffer',
            role: 'CEO / Superintendent · Trinity Basin Preparatory',
            date: 'February 2017',
            image: 'randal.jpeg',
          },
        ],
      },
      {
        id: 'coverage-check',
        eyebrow: 'Charter School Coverage Check',
        h2: 'Rank these coverage areas by how much they concern you.',
        paras: [
          "Tap and drag to reorder — most concerning at the top. We'll start your benchmark review there.",
        ],
        bullets: [
          'Your umbrella policy sits over Educators Legal Liability, adding million(s) in coverage to D&O, EPLI, & Failure to Educate limits.',
          'Coverage to repair/replace damaged property due to water damage.',
          'If there was a total loss at campus, you\'d have enough coverage to rebuild your campus, and money to provide temporary space to continue educating.',
          'A fraudulent invoice your school paid as a result of a phishing scam would be covered.',
          'A student seriously injured with no health insurance has their medical bills covered.',
        ],
        // Layout-only: interactive widget copy — ignored by the shell generator.
        widget: {
          topConcernLabel: 'Your #1 concern:',
          enterInfo: 'Enter your name and email to submit your ranking and see how you compare to other charter school leaders.',
          fields: {
            name: { label: 'Your Name *', placeholder: 'Jane Smith' },
            school: { label: 'School Name *', placeholder: 'Lincoln Charter Academy' },
            email: { label: 'Your Email *', placeholder: 'jane@yourschool.org' },
          },
          submitting: 'Submitting…',
          submitButton: 'Submit My Rankings',
          lockLine: 'Your info stays private · No sales call required · No obligation',
          thanks: {
            prefix: 'Thanks, ',
            mid: '. CharterSelect will follow up with specifics for ',
            suffix: '. Want to go deeper now?',
          },
          bookCall: 'Book a 20-min Call',
          // Peer comparison data — % of charter school leaders who rank each concern #1.
          peerStats: { 0: 38, 1: 11, 2: 27, 3: 15, 4: 9 },
          peerLabels: {
            0: 'umbrella / educators legal liability',
            1: 'water & sewage damage limits',
            2: 'building valuation accuracy',
            3: 'cyber & phishing coverage',
            4: 'student injury medical coverage',
          },
          peerTiers: {
            majority: {
              emoji: '🤝',
              headline: "You're in the majority.",
              body: (pct, label) => `${pct}% of charter school leaders we've surveyed also rank ${label} as their #1 concern — and it's the gap we find most often in policy reviews.`,
            },
            tracking: {
              emoji: '🔍',
              headline: "You're tracking something real.",
              body: (pct, label) => `${pct}% of leaders share your top concern about ${label}. It's not the most common answer, but it's one of the gaps that surprises schools the most when we dig in.`,
            },
            ahead: {
              emoji: '⚡',
              headline: "You're ahead of the curve.",
              body: (pct, label) => `Only ${pct}% of charter school leaders flag ${label} first — most don't catch it until a claim. That instinct is exactly what a benchmark review is built to validate.`,
            },
          },
        },
      },
    ],
  };
});
