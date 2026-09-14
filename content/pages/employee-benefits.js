// Single source of truth for ALL human-visible text on employee-benefits.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `num`,
// `flag`, `emoji`, `head`, `image`, `badge`, `form` are layout-only and
// ignored by it):
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
    htmlFile: 'employee-benefits.html',
    hero: {
      eyebrow: 'Employee Benefits',
      title: '7 Reasons Your Charter School Health Insurance Plan Is Costing More Than It Should',
      lead: "These are the cost drivers most brokers don't surface — because fixing them requires more work than renewing the same carrier contract.",
    },
    sections: [
      {
        id: 'reasons',
        items: [
          {
            icon: 'trending-up',
            num: 'Reason 01',
            title: 'Fully-Insured Carrier Markups',
            body: "Fully-insured plans bundle carrier profit margins, administrative overhead, and risk reserves directly into your premium — none of which improve your staff's benefits. Schools with stable, predictable claims experience are often subsidizing higher-risk groups in the carrier's broader pool. We benchmark your actual claims utilization against your premium and show you whether self-funded or level-funded alternatives put that margin back in your budget.",
            flag: "We commonly find schools overpaying by 15–30% for coverage their claims history doesn't justify.",
          },
          {
            icon: 'pill',
            num: 'Reason 02',
            title: 'Pharmacy Rebate Leakage',
            body: 'Drug manufacturers pay rebates to pharmacy benefit managers (PBMs) based on formulary placement. In most fully-insured arrangements, those rebates flow to the carrier — not to your school. For a school with 80 employees, this can represent tens of thousands of dollars annually that never reaches you. Transparent PBM contracts and pass-through rebate structures redirect that value where it belongs.',
            flag: 'Pharmacy rebates are one of the least visible cost levers in employer health plans — and one of the most impactful.',
          },
          {
            icon: 'file-warning',
            num: 'Reason 03',
            title: 'Plan Document',
            body: "Plan documents that lack clearly defined rules can quietly drive up your claim costs, leaving you prone to excessive charges. Leveraging the plan document as a cost containment tool is the best way to gain control of your health spend. We redesign plan structures to improve benefits, and then craft the plan documents to protect your plan's integrity, directly impacting your claim costs and renewals.",
            flag: 'A well-crafted plan document is your first line of defense against excessive claims and unexpected costs.',
          },
          {
            icon: 'receipt',
            num: 'Reason 04',
            title: 'Inflated Provider Billing',
            body: "Hospitals and large provider networks negotiate aggressively with carriers, and the resulting contracts often contain billing irregularities, duplicate charges, and code-bundling errors that your insurer's automated systems won't catch. Reference-based pricing, independent bill review, and direct employer contracts are tools that bring actual reimbursement in line with fair market rates rather than chargemaster fiction.",
            flag: 'Independent bill review catches overcharges on a meaningful percentage of inpatient and outpatient claims.',
          },
          {
            icon: 'percent',
            num: 'Reason 05',
            title: 'Network Discounts',
            body: "A 40% network discount on a $40,000 charge sounds like a win — but if the underlying charge is 4x a fair rate, you're still overpaying by a wide margin. We guide our school partners & explore networks that have the lowest cost of care, not the greatest discount off an extremely high price. Would you rather reimburse at $280 for an MRI, or 80% off a $10,000 MRI?",
            flag: 'The size of the discount means nothing if the starting price is inflated. We focus on actual cost, not discount percentage.',
          },
          {
            icon: 'map-pin-off',
            num: 'Reason 06',
            title: 'Anti-Consumerism',
            body: "When employees can't easily find in-network providers, get second opinions, or understand their benefits, they make costly decisions. It's an overwhelming system, especially when you're going through something needing care. When a Dr. writes an order for a procedure, you may not even know you have options to explore elsewhere, and the ability to price out of pocket cost out in advance. Often, the lowest cost facilities and operations are the highest quality. It's important to incentivize good behavior via plan design, and then assist with the heavy lifting of pricing, scheduling, and ensuring the billed charges are accurate and as expected. That's what we are here for, to simplify the process.",
            flag: 'Empowering employees to shop for care is one of the highest-ROI moves an employer can make.',
          },
          {
            icon: 'users',
            num: 'Reason 07',
            title: 'One-Size-Fits-All Plans',
            body: "Charter school staff skew younger, often include a significant share of educators on income-driven student loan repayment plans, and frequently value supplemental mental health and wellness benefits more than legacy carrier designs account for. A plan benchmarked against the general employer market doesn't reflect those demographics. We build benefit strategies around who your people actually are — and use that to improve participation, retention, and perceived value of the benefit dollar you're already spending.",
            flag: 'A plan designed for your actual workforce outperforms a generic plan on participation, retention, and value every time.',
          },
        ],
      },
      {
        id: 'built-to-last',
        h2: 'Charter School Health Insurance Built to Last',
        paras: [
          'Most charter schools switch health plans every two years. New networks, new provider lists, new ID cards — and staff who have no idea how to use their benefits until someone files a claim and finds out the hard way.',
          'We build benefits programs designed to stay. Plans where employees can access low or no-cost care without the school absorbing double-digit rate increases every renewal. Plans that let your staff find their doctor, use their benefits, and actually feel taken care of — without retraining them every other year on a new network.',
          'The result: better talent retention, fewer HR headaches, and a benefits package that competes with districts that have twice your budget.',
        ],
      },
      {
        id: 'what-we-do',
        eyebrow: 'What We Do Differently',
        h2: "Benefits support your HR team didn't know they could have.",
        items: [
          { icon: 'users', title: 'One-on-One Enrollment', body: 'Every employee gets a dedicated enrollment conversation — not a group meeting. We answer questions, explain trade-offs, and make sure no one defaults into the wrong plan.' },
          { icon: 'badge-check', title: 'Concierge Advocacy', body: "When a staff member gets a surprise bill or a claim is denied, we fight it. Our concierge team handles appeals, billing disputes, and care navigation so your HR team doesn't have to." },
          { icon: 'landmark', title: 'Funding Strategy', body: "Fully-insured, level-funded, or self-funded — we benchmark your actual claims data against each structure and recommend the one that serves your school's financial position." },
          { icon: 'bar-chart-2', title: 'Renewal Benchmarking', body: "We pull peer data from comparable charter schools to show you whether your renewal offer is fair — and use that to negotiate terms your carrier didn't volunteer." },
        ],
      },
      {
        id: 'featured-quote',
        badge: 'Built from scratch · Insurance + HR structured for a charter from day one',
        quotes: [
          {
            quote: 'Aaron came in and supported us so much with our insurance, insurance selection, and guidance for these critical human resources elements. He also went above and beyond and completed work that I did not have the capacity to do.',
            name: 'Mia Coffing, M.Ed., BCBA',
            role: 'Executive Director · Prospect Academy',
            image: 'coffing-mia-13.avif',
          },
        ],
      },
      {
        id: 'challenge',
        eyebrow: 'Benefits Challenge Check',
        h2: 'What is your biggest health insurance challenge right now?',
        paras: [
          "Select the one that matters most — we'll share what we typically find in that area.",
        ],
        items: [
          {
            title: 'Controlling rising costs',
            emoji: '📈',
            head: 'The most common challenge we hear.',
            body: "Rising premiums affect nearly every school we work with. The fix usually starts with understanding what's actually driving your claims — carrier markup, pharmacy costs, or utilization patterns. A benefits review puts numbers on it.",
          },
          {
            title: 'Improving staff benefits without increasing budget',
            emoji: '🎯',
            head: 'More value from the same dollar.',
            body: 'Restructuring plan design, adding voluntary benefits, or shifting to a level-funded model can meaningfully improve what employees receive without increasing your premium contribution. We see this regularly when schools move off fully-insured carrier contracts.',
          },
          {
            title: 'Low employee participation and engagement',
            emoji: '🤝',
            head: 'A benefits problem and a communication problem.',
            body: "Low participation often signals that employees don't understand the plan, don't trust it, or feel it's too expensive for what it delivers. One-on-one enrollment support for every employee — not a group meeting — consistently moves the needle.",
          },
          {
            title: 'Benefits administration time drain',
            emoji: '⏱️',
            head: 'Your HR coordinator deserves backup.',
            body: "Billing reconciliation, onboarding enrollments, and answering staff benefits questions can consume hours your team doesn't have. We handle those functions — your team stays focused on the school, not the carrier.",
          },
          {
            title: "Not knowing if our current plan is competitive",
            emoji: '🔍',
            head: 'Benchmarking answers that question.',
            body: "Most schools don't know how their benefits compare until they're already losing staff to better offers. A benchmarking review shows you exactly where you stand against comparable charter schools and what it would take to close the gap.",
          },
        ],
        // Form / follow-up microcopy — layout-only, rendered by the interactive
        // widget in the page JSX; ignored by the shell generator.
        form: {
          intro: 'Enter your info and CharterSelect will follow up with specifics for your school.',
          nameLabel: 'Your Name *',
          namePlaceholder: 'Jane Smith',
          schoolLabel: 'School Name *',
          schoolPlaceholder: 'Lincoln Charter Academy',
          emailLabel: 'Your Email *',
          emailPlaceholder: 'jane@yourschool.org',
          submitting: 'Submitting…',
          submit: 'Get Insights for My School',
          lock: 'Your info stays private · No sales call required · No obligation',
          thanksPrefix: 'Thanks, ',
          thanksSuffix: '.',
          doneBody1: 'CharterSelect will follow up with specifics for ',
          doneBody2: ' and what we typically find at schools like ',
          doneBody3: '. In the meantime, book a quick call to go deeper.',
          bookCall: 'Book a 20-min Call',
        },
      },
    ],
  };
});
