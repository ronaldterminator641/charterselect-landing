// CharterSelect Insights — content data file.
// Each article: { slug, hub, title, metaDescription, body }.
//   - title: keep under 60 chars, must contain "charter school" naturally.
//   - metaDescription: keep under 155 chars, unique per page.
//   - body: HTML string. Use <h2>/<h3> only (the page supplies the single <h1>).
// Paste real article content into the `body` fields. `board-side-a-coverage`
// is fully wired as the example; every other body is a marked placeholder.
//
// Consumed by scripts/generate-insights.js at build time to emit static HTML.

const HUBS = [
  {
    slug: 'charter-school-risk-governance',
    name: 'Governance & Legal Shield',
    title: 'Charter School Risk & Governance Insurance',
    metaDescription:
      'How charter school boards and leaders protect the school and themselves — D&O, management liability, abuse coverage, and legal-shield essentials.',
    intro: `
<p>[PLACEHOLDER — hub intro paragraph 1. What "Governance &amp; Legal Shield" means for a charter school board: the personal and institutional exposures that come with authorizer oversight, public funding, and volunteer governance.]</p>
<p>[PLACEHOLDER — hub intro paragraph 2. Why generalist brokers miss these exposures and what a charter-specific review looks at.]</p>
<p>[PLACEHOLDER — hub intro paragraph 3 (optional). How the articles below fit together.]</p>`,
  },
  {
    slug: 'charter-school-operations-coverage',
    name: 'Operational Continuity',
    title: 'Charter School Operations Coverage Guide',
    metaDescription:
      'Keeping a charter school running through the unexpected — disaster planning, active assailant coverage, extra expense, pollution, and facility risk.',
    intro: `
<p>[PLACEHOLDER — hub intro paragraph 1. Operational continuity for charter schools: what stops instruction, and what coverage keeps the doors open.]</p>
<p>[PLACEHOLDER — hub intro paragraph 2.]</p>`,
  },
  {
    slug: 'charter-school-liability-coverage',
    name: 'Daily Liability Blindspots',
    title: 'Charter School Liability Coverage Guide',
    metaDescription:
      'The everyday liability gaps charter schools miss — hired &amp; non-owned auto, student accident coverage, workers\' comp experience mods, and more.',
    intro: `
<p>[PLACEHOLDER — hub intro paragraph 1. The day-to-day exposures — field trips, volunteers, staff driving, playground injuries — that quietly fall outside standard policies.]</p>
<p>[PLACEHOLDER — hub intro paragraph 2.]</p>`,
  },
  {
    slug: 'charter-school-employee-benefits',
    name: 'Benefits Revolution',
    title: 'Charter School Employee Benefits Guide',
    metaDescription:
      'Rethinking charter school employee benefits — level funding, reference-based pricing, PBMs, stop-loss strategy, and better care at lower cost.',
    intro: `
<p>For most charter schools, health benefits are the second-largest line item after payroll — and the one leaders feel least equipped to challenge. Every renewal arrives as a rate increase with little explanation, and the fully-insured status quo quietly absorbs dollars that could be going to classrooms and staff pay.</p>
<p>It doesn't have to work that way. Level funding, captives, reference-based pricing, transparent pharmacy contracts, and real claims data give schools the same tools large employers use to control cost. The guides below break each one down in plain language, so you can walk into your next renewal asking better questions.</p>`,
  },
];

const PLACEHOLDER_BODY = (topic) => `
<p><strong>[PLACEHOLDER ARTICLE — paste the real "${topic}" content here.]</strong></p>
<p>[PLACEHOLDER — opening paragraphs: what this coverage/topic is and why it matters to a charter school.]</p>
<h2>[PLACEHOLDER — section heading]</h2>
<p>[PLACEHOLDER — section body.]</p>
<h2>[PLACEHOLDER — section heading]</h2>
<p>[PLACEHOLDER — section body.]</p>
<h2>What charter school leaders should do next</h2>
<p>[PLACEHOLDER — practical takeaways / checklist.]</p>`;

const ARTICLES = [
  /* ── Governance & Legal Shield ─────────────────────────────────────────── */
  {
    slug: 'board-side-a-coverage',
    hub: 'charter-school-risk-governance',
    title: 'Side A Coverage for Charter School Boards',
    metaDescription:
      'What Side A D&O coverage does for charter school board members, when it pays where the school cannot, and how to check your policy for it.',
    // Was the fully wired example article; taken offline 2026-09-11 so the
    // Governance hub stays unpublished until real content is ready.
    body: PLACEHOLDER_BODY('Side A Coverage'),
  },
  {
    slug: 'crime-vs-cyber-coverage',
    hub: 'charter-school-risk-governance',
    title: 'Crime vs. Cyber Coverage for Charter Schools',
    metaDescription:
      'Crime and cyber policies overlap less than charter schools assume. Where fraud, ransomware, and funds-transfer losses actually land — and the gaps between.',
    body: PLACEHOLDER_BODY('Crime vs. Cyber Coverage'),
  },
  {
    slug: 'employed-legal-counsel',
    hub: 'charter-school-risk-governance',
    title: 'Employed Legal Counsel at Charter Schools',
    metaDescription:
      'When a charter school hires in-house counsel, standard liability policies may not follow. The coverage questions to ask before your attorney starts.',
    body: PLACEHOLDER_BODY('Employed Legal Counsel'),
  },
  {
    slug: 'management-liability',
    hub: 'charter-school-risk-governance',
    title: 'Charter School Management Liability Explained',
    metaDescription:
      'D&O, EPL, and fiduciary coverage form a charter school\'s management liability shield. What each part does and how the pieces fit together.',
    body: PLACEHOLDER_BODY('Management Liability'),
  },
  {
    slug: 'retroactive-dates',
    hub: 'charter-school-risk-governance',
    title: 'Retroactive Dates in Charter School Policies',
    metaDescription:
      'A wrong retroactive date can erase years of charter school claims protection. How retro dates work on claims-made policies and how to protect yours.',
    body: PLACEHOLDER_BODY('Retroactive Dates'),
  },
  {
    slug: 'sexual-abuse-molestation-coverage',
    hub: 'charter-school-risk-governance',
    title: 'Abuse & Molestation Coverage for Charter Schools',
    metaDescription:
      'Sexual abuse and molestation coverage is the most consequential line a charter school buys. Limits, exclusions, and the underwriting questions that matter.',
    body: PLACEHOLDER_BODY('Sexual Abuse & Molestation Coverage'),
  },
  {
    slug: 'school-resource-officer-liability',
    hub: 'charter-school-risk-governance',
    title: 'Charter School Resource Officer Liability',
    metaDescription:
      'SROs and contracted security create liability questions most charter school policies never contemplated. Who covers what when an officer acts.',
    body: PLACEHOLDER_BODY('School Resource Officer Liability'),
  },

  /* ── Operational Continuity ────────────────────────────────────────────── */
  {
    slug: 'active-assailant-coverage',
    hub: 'charter-school-operations-coverage',
    title: 'Active Assailant Coverage for Charter Schools',
    metaDescription:
      'What standalone active assailant coverage adds beyond a charter school\'s property and liability policies — response costs, counseling, and more.',
    body: PLACEHOLDER_BODY('Active Assailant Coverage'),
  },
  {
    slug: 'disaster-planning',
    hub: 'charter-school-operations-coverage',
    title: 'Disaster Planning for Charter Schools',
    metaDescription:
      'A practical disaster planning framework for charter schools — continuity of instruction, insurance triggers, and the documents to have ready.',
    body: PLACEHOLDER_BODY('Disaster Planning'),
  },
  {
    slug: 'environmental-pollution-coverage',
    hub: 'charter-school-operations-coverage',
    title: 'Pollution Coverage for Charter Schools',
    metaDescription:
      'Mold, lead, asbestos, and fuel tanks: why pollution exclusions bite charter schools in older buildings and what environmental coverage restores.',
    body: PLACEHOLDER_BODY('Environmental / Pollution Coverage'),
  },
  {
    slug: 'extra-expense-coverage',
    hub: 'charter-school-operations-coverage',
    title: 'Extra Expense Coverage for Charter Schools',
    metaDescription:
      'When a campus goes offline, extra expense coverage funds the temporary space and equipment that keep a charter school teaching. How limits are set.',
    body: PLACEHOLDER_BODY('Extra Expense Coverage'),
  },
  {
    slug: 'risk-mitigation',
    hub: 'charter-school-operations-coverage',
    title: 'Charter School Risk Mitigation Basics',
    metaDescription:
      'The risk mitigation habits that lower charter school premiums and prevent claims — training, documentation, contracts, and facility walk-throughs.',
    body: PLACEHOLDER_BODY('Risk Mitigation'),
  },
  {
    slug: 'facility-use-agreements',
    hub: 'charter-school-operations-coverage',
    title: 'Facility Use Agreements for Charter Schools',
    metaDescription:
      'Letting outside groups use charter school facilities shifts risk fast. The insurance and indemnity language every facility use agreement needs.',
    body: PLACEHOLDER_BODY('Facility Use Agreements'),
  },

  /* ── Daily Liability Blindspots ────────────────────────────────────────── */
  {
    slug: 'hired-non-owned-auto',
    hub: 'charter-school-liability-coverage',
    title: 'Hired & Non-Owned Auto for Charter Schools',
    metaDescription:
      'Staff running errands and parents driving to field trips expose charter schools to auto claims they don\'t own. What hired & non-owned auto covers.',
    body: PLACEHOLDER_BODY('Hired & Non-Owned Auto'),
  },
  {
    slug: 'program-value-adds',
    hub: 'charter-school-liability-coverage',
    title: 'Charter School Insurance Program Value-Adds',
    metaDescription:
      'Beyond the policy: the risk services, training, and legal helplines bundled into charter school insurance programs — and how to actually use them.',
    body: PLACEHOLDER_BODY('Program Value-Adds'),
  },
  {
    slug: 'student-accident-insurance',
    hub: 'charter-school-liability-coverage',
    title: 'Student Accident Insurance for Charter Schools',
    metaDescription:
      'Student accident insurance pays medical bills before liability is ever argued. Why it protects charter schools as much as it protects students.',
    body: PLACEHOLDER_BODY('Student Accident Insurance'),
  },
  {
    slug: 'workers-comp-experience-mod',
    hub: 'charter-school-liability-coverage',
    title: "Charter School Workers' Comp Experience Mod",
    metaDescription:
      'Your experience mod quietly sets your charter school\'s workers\' comp price for years. How the mod is calculated and the levers that bring it down.',
    body: PLACEHOLDER_BODY("Workers' Comp Experience Mod"),
  },

  /* ── Benefits Revolution ───────────────────────────────────────────────── */
  {
    slug: 'benefits-transparency-audit',
    hub: 'charter-school-employee-benefits',
    title: 'The Charter School Benefits Transparency Audit',
    metaDescription:
      'Five questions every charter school leader should be able to answer about their health plan — a quick self-audit of what your broker is showing you.',
    body: `
<p>Health benefits are usually a charter school's second-largest expense after payroll — yet most leaders can't see inside the plan they're paying for. Not because the information doesn't exist, but because nobody has shown it to them. This five-question self-assessment is the fastest way to find out whether your broker is giving you the full picture. Answer honestly; each question signals something specific about how your plan is being managed.</p>
<p><a class="cs-btn cs-btn--primary" href="/downloads/benefits-transparency-audit.pdf" download style="text-decoration:none">Download the printable audit (PDF)</a></p>

<h2>1. Do you have access to detailed claims data, broken down by member and category?</h2>
<p>Without member- and category-level claims data, you can't see what's actually driving cost. Is it pharmacy? A handful of high-cost claimants? Emergency room utilization? A broker who doesn't have access to that data — or has it and never shares it — can't be helping you manage your spend. They can only react to whatever number the carrier hands down at renewal.</p>

<h2>2. Is your monthly carrier bill reconciled against your employee roster automatically — or does someone do it manually?</h2>
<p>Manual reconciliation means paying for people who've left and missing people who've joined. In a school with normal staff turnover, those errors compound every month. A good broker automates this so your bill matches reality — and finds the credits when it hasn't.</p>

<h2>3. Do you know whether your plan is fully insured, level funded, or self funded?</h2>
<p>Each structure carries different risk, cash flow, and savings potential. Fully insured means the carrier keeps every dollar of a good claims year. Level funded returns surplus to you. Self funded gives you the most control and the most responsibility. If you can't name which one your school has, no one has walked you through what your structure means — and that's a choice someone else made for you.</p>

<h2>4. Does your staff have access to a price transparency or care coordination tool?</h2>
<p>The same MRI can cost $400 or $4,000 depending on where it's performed. Without a transparency or care coordination tool, staff shop blind and default to the ER for routine care — and every one of those decisions flows straight into next year's renewal. A broker who never mentioned this kind of tool isn't helping your people spend their benefit wisely.</p>

<h2>5. Did your broker walk you through alternative funding structures at your last renewal?</h2>
<p>Captives, independent level-funded plans, reference-based pricing — if renewal was just a rate increase with no alternatives presented, you were quoted, not advised. A broker doing the work shows you every viable structure, every year, even when the answer is "stay put."</p>

<h2>How to score yourself</h2>
<p>If you answered "no" (or "manual") to two or more of these, your broker may be leaving money and options on the table. That's not an accusation — it's the predictable result of a generalist model applied to schools. The fix starts with a conversation, not a commitment: a complimentary review will show you exactly what you're not being shown today.</p>
<p><a class="cs-btn cs-btn--primary" href="/downloads/benefits-transparency-audit.pdf" download style="text-decoration:none">Download the printable audit (PDF)</a></p>
<script>
(function () {
  try {
    var p = new URLSearchParams(location.search);
    var payload = JSON.stringify({
      doc: 'benefits-transparency-audit',
      c: p.get('c') || '',
      ref: document.referrer || '',
      ts: new Date().toISOString(),
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/doc-view', new Blob([payload], { type: 'application/json' }));
    } else {
      fetch('/api/doc-view', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true });
    }
  } catch (_) {}
})();
</script>`,
  },
  {
    slug: 'employee-care',
    hub: 'charter-school-employee-benefits',
    title: 'Employee Care Programs for Charter Schools',
    metaDescription:
      'Concierge navigation, advocacy, and care programs that help charter school staff actually use their benefits — and cut plan spend while doing it.',
    body: PLACEHOLDER_BODY('Employee Care'),
  },
  {
    slug: 'alternative-funding',
    hub: 'charter-school-employee-benefits',
    title: 'Alternative Funding for Charter School Benefits',
    metaDescription:
      'Level funding, captives, and reference-based pricing: the alternative funding paths that free charter schools from annual fully-insured increases.',
    body: PLACEHOLDER_BODY('Alternative Funding'),
  },
  {
    slug: 'member-support',
    hub: 'charter-school-employee-benefits',
    title: 'Member Support in Charter School Health Plans',
    metaDescription:
      'What real member support looks like in a charter school health plan — bill negotiation, provider matching, and a human to call before care happens.',
    body: PLACEHOLDER_BODY('Member Support'),
  },
  {
    slug: 'fully-insured-problems',
    hub: 'charter-school-employee-benefits',
    title: 'Fully Insured Plan Problems for Charter Schools',
    metaDescription:
      'Opaque pricing, trapped surpluses, and compounding renewals: why fully insured health plans keep failing charter school budgets year after year.',
    body: PLACEHOLDER_BODY('Fully-Insured Problems'),
  },
  {
    slug: 'level-funded-plans',
    hub: 'charter-school-employee-benefits',
    title: 'Level-Funded Health Plans for Charter Schools',
    metaDescription:
      'How level-funded plans give charter schools fixed monthly costs plus money back in good claims years — and the fine print to check first.',
    body: PLACEHOLDER_BODY('Level-Funded Plans'),
  },
  {
    slug: 'open-enrollment',
    hub: 'charter-school-employee-benefits',
    title: 'Charter School Open Enrollment Done Right',
    metaDescription:
      'An open enrollment playbook for charter schools — timelines, communication, decision support, and the mistakes that depress participation.',
    body: PLACEHOLDER_BODY('Open Enrollment'),
  },
  {
    slug: 'pharmacy-benefit-managers',
    hub: 'charter-school-employee-benefits',
    title: 'PBMs and Charter School Pharmacy Costs',
    metaDescription:
      'Pharmacy benefit managers shape a quarter of charter school plan spend. How PBM contracts hide margin and what transparent alternatives change.',
    body: PLACEHOLDER_BODY('Pharmacy Benefit Managers'),
  },
  {
    slug: 'price-transparency',
    hub: 'charter-school-employee-benefits',
    title: 'Price Transparency in Charter School Benefits',
    metaDescription:
      'Hospital price transparency data lets charter schools see what care really costs — and negotiate benefits with facts instead of renewal letters.',
    body: PLACEHOLDER_BODY('Price Transparency'),
  },
  {
    slug: 'reference-based-pricing',
    hub: 'charter-school-employee-benefits',
    title: 'Reference-Based Pricing for Charter Schools',
    metaDescription:
      'Reference-based pricing pegs charter school health costs to Medicare rates instead of hidden network discounts. How it works and who it fits.',
    body: PLACEHOLDER_BODY('Reference-Based Pricing'),
  },
  {
    slug: 'stop-loss-captives',
    hub: 'charter-school-employee-benefits',
    title: 'Stop-Loss Captives for Charter Schools',
    metaDescription:
      'Stop-loss captives let charter schools pool catastrophic risk with peers and share underwriting profit. How captive membership actually works.',
    body: PLACEHOLDER_BODY('Stop-Loss Captives'),
  },
  {
    slug: 'stop-loss-lasering',
    hub: 'charter-school-employee-benefits',
    title: 'Stop-Loss Lasering and Charter School Plans',
    metaDescription:
      'Lasering carves high-cost members out of stop-loss protection and onto the charter school\'s budget. How to spot it and negotiate it away.',
    body: PLACEHOLDER_BODY('Stop-Loss Lasering'),
  },
];

module.exports = { HUBS, ARTICLES };
