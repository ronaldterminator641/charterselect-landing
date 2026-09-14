// Single source of truth for ALL human-visible text on index.html (home).
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `href`,
// `image`, `num`, `titleLines`, `trust`, `button`, `label`, `form`, `badge`,
// `photo`, `school`, `found`, `kind` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                items?[{ title, body?, bullets?[] }],
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'index.html',
    hero: {
      eyebrow: 'Property & Liability Insurance',
      title: 'Protection with purpose.',
      titleLines: ['Protection', 'with purpose.'],
      lead: 'Any insurance you need — built for charter schools, not adapted to them. We protect what matters so you can focus on students, growth, and your mission.',
      bookCall: 'Book a 20-min Call',
      trust: 'Complimentary benchmark review · No obligation',
    },
    sections: [
      {
        id: 'need-selector',
        label: 'What are you looking for?',
        paras: ['What are you looking for?'],
        items: [
          { icon: 'shield', title: 'Property & Liability Insurance', href: '/property-liability' },
          { icon: 'heart-pulse', title: 'Employee Benefits', href: '/employee-benefits' },
          { icon: 'file-check-2', title: 'Bond holder or lender asking for an insurance review?', href: '/bond-compliance-review' },
          { icon: 'star', title: 'Both — I want a full coverage review', gold: true },
        ],
      },
      {
        id: 'stats',
        items: [
          { title: '90+', body: 'Schools Helped' },
          { title: '250+', body: 'Campuses' },
          { title: '2011', body: 'Serving Since' },
          { kind: 'usa', title: 'Nationwide' },
        ],
      },
      {
        id: 'solutions',
        eyebrow: 'Solutions',
        h2: 'Insurance built for charter schools — not adapted to them.',
        button: 'Get a Free Coverage Review',
        items: [
          { icon: 'shield-check', title: 'Property & Liability', body: 'Authorizer-compliant coverage built around leased or owned facilities, shared campuses, and educators legal liability. The errors we find most often are big, and could mean the end of your mission if that claim hits.' },
          { icon: 'graduation-cap', title: 'Employee Benefits', body: 'We take enrollment, billing, and claims questions off your HR coordinator\'s plate. One-on-one support for every employee, a concierge that fights surprise bills, and funding structures that put pharmacy rebates back in your budget.' },
          { icon: 'compass', title: 'Risk Guidance', body: 'Year-round advisory, contract review, claims advocacy, renewal benchmarking, and board level risk briefings. Not just a quote at renewal.' },
          { icon: 'handshake', title: 'Partnership Model', body: 'Independent and carrier agnostic. We represent you, not the insurer who pays the biggest bonus. Responsiveness, Follow Through, Innovation and Expertise are core to how we operate.' },
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
        id: 'why-us',
        eyebrow: 'Why CharterSelect',
        h2: 'Solutions built for your mission.',
        paras: [
          'Charter schools operate differently than districts and differently from one another. We bring the patience to listen and the depth to act.',
        ],
        bullets: [
          'Specialists who only serve charter schools — not one of 500 client types.',
          'Independent and carrier-agnostic. We tell you when to stay put.',
          'We name what your current broker hasn\'t flagged — umbrella gaps on educators legal liability, retroactive date errors, and D&O coverage that is leaving millions of coverage on the table.',
          'A portion of every policy we write supports the communities your school serves.',
        ],
        quotes: [
          {
            outcome: 'Trusted partner · Recommended without hesitation',
            quote: 'Aaron is one of the hardest working partners I\'ve had the good fortune to come across.',
            name: 'Stacey Lawrence',
            role: 'CEO & Founder',
            school: 'GrowthFit Partners LLC',
            photo: 'stacey.jpeg',
          },
          {
            found: 'Gap found: Workers Comp missing entirely — school carrying exposure without knowing it',
            outcome: 'Workers Comp added · No premium increase · Coverage gap closed',
            quote: 'He worked with us to add Workers Compensation without spending any more money than we were spending on our insurance package without it. His knowledge of the products and the needs of charter schools is deep.',
            name: 'HR Manager & Business Manager · September 2018',
            role: 'Newman International Academy',
            school: '',
          },
        ],
      },
      {
        id: 'coverage-check',
        eyebrow: 'Charter School Coverage Check',
        h2: 'Rank these coverage areas by how much they concern you.',
        paras: [
          'Tap and drag to reorder — most concerning at the top. We\'ll start your benchmark review there.',
        ],
        bullets: [
          'Your umbrella policy isn\'t sitting over your Educators Legal Liability coverage — leaving you exposed and missing out on millions in potential coverage.',
          'A clog in a second-floor bathroom causes a six-figure water damage claim — but your sublimit for this type of loss is only $25,000.',
          'Your campus suffers a total loss and faces a year-long construction project to rebuild. You have no coverage to rent temporary school space in the meantime.',
          'A fraudulent invoice is paid via ACH — there\'s no coverage and no way to recover the funds.',
          'A student is seriously injured during a school-sponsored activity — the parents have no health insurance, and there\'s no coverage to help with medical bills.',
        ],
        // Interactive form microcopy (layout-only for the shell generator).
        form: {
          srInstructions: 'Use arrow keys to reorder items. Drag and drop also supported with a mouse or touch.',
          topConcernPrefix: 'Your #1 concern:',
          prompt: 'Enter your name and email to submit your ranking and see how you compare to other charter school leaders.',
          nameLabel: 'Your Name',
          namePlaceholder: 'Jane Smith',
          schoolLabel: 'School Name',
          schoolPlaceholder: 'Lincoln Charter Academy',
          emailLabel: 'Your Email',
          emailPlaceholder: 'jane@yourschool.org',
          submit: 'Submit My Rankings',
          submitting: 'Submitting…',
          privacy: 'Your info stays private · No sales call required · No obligation',
          bookCall: 'Book a 20-min Call',
        },
      },
      {
        id: 'community',
        eyebrow: 'Stronger Together',
        h2: 'Strong schools build strong communities.',
        paras: [
          'A portion of CharterSelect revenue supports the nonprofits and community initiatives that make a lasting impact alongside the schools we serve.',
        ],
        button: 'Our Commitment',
      },
    ],
  };
});
