// Single source of truth for ALL human-visible text on why.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon` are
// layout-only and ignored by it):
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
    htmlFile: 'why.html',
    hero: {
      eyebrow: 'Why CharterSelect',
      title: 'Solutions built for your mission.',
      lead: 'Charter schools operate differently than districts and differently from one another. We bring the patience to listen and the depth to act.',
    },
    sections: [
      {
        id: 'reasons',
        items: [
          { icon: 'school', title: 'Specialists, not generalists.', body: 'We only serve charter schools. That focus shows up in the products we recommend, the carriers we work with, and the questions we know to ask.' },
          { icon: 'scale', title: 'Independent — we represent you.', body: 'CharterSelect is carrier-agnostic. We benchmark across carriers and tell you when to stay put. Your interest, not a quota, drives our advice.' },
          { icon: 'eye', title: 'Transparent benchmarking.', body: "You'll see what your current coverage actually says, what it costs, and what the market alternatives look like — in plain language." },
          { icon: 'calendar-clock', title: 'A year-round partner.', body: 'Renewals are a moment, not the relationship. We stay close between cycles — claims, vendor changes, growth, board questions.' },
          { icon: 'heart-handshake', title: 'Mission-aligned.', body: 'A portion of CharterSelect profits supports the nonprofits that build stronger communities alongside the schools we serve.' },
          { icon: 'phone', title: 'A named advisor.', body: "You'll know who answers the phone, and they'll know your campus, your staff, and your renewal cycle by heart." },
        ],
      },
      {
        id: 'built-for-this-work',
        h2: 'Charter School Insurance and Employee Benefits — Built for This Work',
        paras: [
          "Charter schools face a unique set of risks that standard commercial or district policies weren't designed to address. Authorizer compliance requirements, leased facilities, shared campuses, educators legal liability, and lean HR teams all create coverage gaps that generalist brokers routinely miss.",
          "The same is true on the employee benefits side. Health insurance and medical insurance decisions that work for a district don't translate to a charter school's budget, staffing model, or workforce demographics. We design benefits programs built around your people — with concierge benefits support, guided open enrollment, and technology tools that help employees actually use their coverage. The goal is low or no-cost care for staff, without the school absorbing rate increases that make switching plans every two years feel inevitable.",
          "Since 2011, CharterSelect has worked exclusively with charter schools across both property & liability and employee benefits — which means we've seen the claims, studied the contracts, and built relationships with the carriers and benefits partners who understand your mission. When we review a charter school's program, we find meaningful gaps in almost every one. Not because the prior broker was careless, but because this work requires specialization. That's what we bring.",
        ],
      },
      {
        id: 'testimonial-heading',
        eyebrow: 'In their words',
        h2: 'What charter leaders say about working with us.',
      },
      {
        id: 'featured-quote',
        badge: 'Comprehensive coverage · Responsive service · Best value',
        quotes: [
          {
            quote: 'I highly recommend Aaron Schwen to anyone seeking a knowledgeable and dependable insurance broker. Aaron takes the time to understand our unique needs, explains complex policy details clearly, and always finds the most comprehensive coverage at the best value. He is responsive, collaborative and dedicated to excellent client service.',
            name: 'Wendy Reneé',
            role: 'Executive Director · Montessori del Mundo',
            date: 'May 2026',
            image: 'wendy.jpeg',
          },
        ],
      },
      {
        id: 'testimonials',
        quotes: [
          {
            outcome: 'Saved nearly $100K annually · Better coverage',
            quote: 'Aaron boldly claimed he could save us $100,000 annually in premiums with the same or better coverage — and he did just that. Aaron makes the process tolerable and, more importantly, does the work so your staff does not have to.',
            name: 'Randal C. Shaffer',
            role: 'CEO / Superintendent · Trinity Basin Preparatory',
            date: 'February 2017',
          },
          {
            outcome: 'Added Workers Comp · Saved money · No premium increase',
            quote: 'He worked with us to add Workers Compensation without spending any more money than we were spending on our insurance package without it. His knowledge of the products and the needs of charter schools is deep.',
            name: 'HR Manager & Business Manager · September 2018',
            role: 'Newman International Academy',
          },
          {
            outcome: 'New school setup · Insurance + HR guidance from day one',
            quote: 'Aaron came in and supported us so much with our insurance, insurance selection, and guidance for these critical human resources elements. He also went above and beyond and completed work that I did not have the capacity to do.',
            name: 'Mia Coffing, M.Ed., BCBA',
            role: 'Executive Director · Prospect Academy',
          },
          {
            outcome: 'Trusted partner · Recommended without hesitation',
            quote: "Aaron is one of the hardest working partners I've had the good fortune to come across.",
            name: 'Stacey Lawrence',
            role: 'CEO & Founder · GrowthFit Partners LLC',
          },
        ],
      },
    ],
    cta: {
      h2: 'See the difference for yourself.',
      para: 'A complimentary benchmark review is the easiest way to find out whether your current coverage holds up.',
      button: 'Start a Review',
    },
  };
});
