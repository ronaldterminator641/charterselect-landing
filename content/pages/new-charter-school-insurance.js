// Single source of truth for ALL human-visible text on new-charter-school-insurance.html.
// Loaded in the browser via <script> (window.__PAGE_CONTENT) and require()d
// by scripts/generate-shells.js, which renders the static SEO shell from the
// exact same object the page's JSX renders — so shell and page cannot drift.
//
// Schema consumed by the shell generator (extra fields like `icon`, `image`,
// `badge`, `link` are layout-only and ignored by it):
//   hero:     { eyebrow?, title, lead? }         → <h1> + lead <p>
//   sections: [{ id, eyebrow?, h2?, paras?[], bullets?[],
//                items?[{ title, body, icon? }],  → <h3> + <p>
//                faqs?[{ q, a }],                 → <h3> + <p>
//                quotes?[{ quote, name, role?, date?, outcome? }] }]
//   cta:      { h2, para, button? }
(function (root, factory) {
  const content = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = content;
  else root.__PAGE_CONTENT = content;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    htmlFile: 'new-charter-school-insurance.html',
    hero: {
      eyebrow: 'New School Startup Insurance',
      title: 'Founding a Charter School? Here Is the Insurance You Need, and When.',
      lead: 'Your coverage needs start the moment your school starts moving, not when you open your doors. Here is the milestone-based timeline we walk founders through, from your first board meeting to opening day.',
    },
    sections: [
      {
        id: 'answer',
        eyebrow: 'The short answer',
        h2: 'What insurance does a new charter school need?',
        paras: [
          'A new charter school needs insurance tied to milestones, not a calendar date. Directors and officers (D&O) liability is required at your board’s first official meeting. Property and liability coverage is required when you sign a lease or take ownership of a building. Workers’ compensation is required when you hire your first employee. Commercial auto is required when you acquire a school vehicle. Your full program should be in place 90 to 120 days before you open.',
          'Most founders wait until 90 days before opening. By then, board decisions have already been made, contracts have been signed, and some of those decisions may not be covered.',
          'CharterSelect has worked exclusively with charter schools since 2011. This timeline comes from the coverage triggers we review with founders on every new school launch.',
        ],
      },
      {
        id: 'triggers',
        eyebrow: 'Trigger-based timeline',
        h2: 'Seven milestones that trigger coverage',
        paras: [
          'Your coverage should follow what your school is doing. Each milestone below carries its own requirement.',
        ],
        items: [
          { icon: 'scale', title: '1. Your board holds its first official meeting', body: 'D&O liability is required immediately. Board members carry personal liability exposure from the first vote. Set the retro date to match your first board meeting date or earlier, so decisions made today stay protected if a claim surfaces years from now.' },
          { icon: 'building', title: '2. You sign a lease or take property ownership', body: 'Property and liability coverage is required immediately. Confirm required limits with your landlord or facility owner early.' },
          { icon: 'user-plus', title: '3. You hire your first employee', body: 'Workers’ compensation is required by state law the moment you bring on any paid staff. Set class codes correctly from day one to avoid audit surprises at renewal.' },
          { icon: 'bus', title: '4. You acquire any vehicle', body: 'Commercial auto is required the moment you take ownership of any bus, van, or vehicle used for school purposes. Personal auto policies do not cover school use.' },
          { icon: 'file-check', title: '5. Your landlord or venue requires a certificate', body: 'General liability is required. It is often the first trigger that surprises founders. Fundraising events and community gatherings carry the same exposure.' },
          { icon: 'shield-check', title: '6. 90 to 120 days before you open', body: 'Place your full program: property, general liability, abuse and molestation, educators legal liability, employment practices liability, and umbrella. Coordinate them together before staff enters classrooms and students are on campus. This is the window to shop the market properly, not scramble at the last minute.' },
          { icon: 'users', title: '7. You start hiring staff at scale', body: 'Employee benefits become your primary teacher recruiting tool. Structure medical, dental, and vision coverage for a small charter school staff on a real budget.' },
        ],
        link: { text: 'Next: see the coverage gaps we find in property & liability policies →', href: '/property-liability' },
      },
      {
        id: 'd-and-o',
        eyebrow: 'D&O insurance',
        h2: 'Start with D&O. It protects decisions from the first vote.',
        paras: [
          'Directors and officers liability insurance protects your board and officers personally for decisions made in their governance role. D&O only covers decisions made after the policy starts, and your board is already making them: the lease, the hires, and the charter application itself.',
          'D&O is written on a claims-made basis, so the retro date is critical. If it is set after your board began acting, the earliest decisions may be unprotected. Bind D&O before your first board meeting and confirm the retro date predates any pre-opening work.',
          'To get your quote turned around quickly, send underwriters these seven documents. The more context they have, the better we can position you with carriers.',
        ],
        bullets: [
          'Forecasted enrollment and financial projections',
          'Current funding, or your most recent approved budget',
          'Board member bios: names, titles, and professional backgrounds',
          'Leadership and executive team bios, including your head of school and key staff',
          'School mission and overview',
          'Curriculum, programs, and specialty offerings such as dual enrollment, STEM, or arts',
          'Business plan or strategic plan, if available',
        ],
      },
      {
        id: 'featured-quote',
        badge: 'New school launch · Insurance, benefits & risk guidance',
        quotes: [
          {
            quote: 'I highly recommend Aaron Schwen to any school founder, charter leader, or organization trying to navigate insurance, benefits, and risk during a complex launch. As the founder of Arcadia High School, I was juggling a lot at once — facilities, staffing, benefits, compliance, budgeting, board decisions, and all the unknowns that come with opening a new school. Aaron was consistently thoughtful, responsive, and proactive. He helped me understand what coverage we needed and when, talked through real facility scenarios, supported our D&O and workers’ comp planning, and helped connect the dots between insurance, benefits, hiring, and long-term operations. What stood out most was that Aaron did not just “sell insurance.” He acted like a true partner. He anticipated questions, explained complicated topics clearly, connected me with helpful people, and followed up to make sure I had what I needed. In a startup environment where every decision matters and time is limited, that kind of support is incredibly valuable. Aaron is knowledgeable, generous with his time, and genuinely invested in the success of the schools and leaders he supports. I’m grateful to have worked with him and would recommend him without hesitation.',
            name: 'Mohamad Maarouf',
            role: 'Superintendent & Systems Architect · Arcadia Schools',
            date: 'July 2026',
            image: 'mohamad.jpeg',
          },
        ],
      },
      {
        id: 'faq',
        eyebrow: 'Frequently asked',
        h2: 'New school insurance questions, answered',
        faqs: [
          { q: 'When does a new charter school need insurance?', a: 'Coverage should start at each milestone, not on opening day. D&O is needed at your board’s first official meeting, property and liability when you sign a lease, workers’ compensation before your first paid hire, and your full program 90 to 120 days before students arrive.' },
          { q: 'What is a retro date, and why does it matter for a charter school?', a: 'A retro date is the earliest date for which wrongful acts are covered under a claims-made policy such as D&O. Set it to match your first board meeting or earlier. If it falls after your board has started making decisions, those early decisions may be unprotected when a claim surfaces years later.' },
          { q: 'Do charter schools need workers’ compensation before opening?', a: 'Yes, once you hire any paid staff. Workers’ compensation is required by state law from the first employee. Set class codes correctly from the start to avoid audit surprises at renewal.' },
          { q: 'Will our landlord or authorizer require specific insurance?', a: 'Often. Landlords and venues commonly require a general liability certificate before you can use a space, and many leases and charter school bonds specify minimum property limits. Authorizers and state charter laws also set minimums that vary by state, so confirm yours in your charter contract early.' },
          { q: 'What does a D&O quote require?', a: 'Seven documents: forecasted enrollment and financial projections, current funding or budget, board member bios, leadership bios, school mission and overview, curriculum and programs, and your business or strategic plan. The more context underwriters have, the better the carrier options.' },
          { q: 'Who should review our new school insurance?', a: 'A broker who works only with charter schools. Generalist brokers often place charter schools on templates built for other organizations, which can leave gaps around educators legal liability, abuse and molestation, and retro dates. CharterSelect has worked exclusively with charter schools since 2011.' },
        ],
      },
    ],
    cta: {
      h2: 'Map your milestones before your board meets.',
      para: 'A complimentary review shows which coverage you need now, which can wait, and what to confirm with your landlord and authorizer. Aaron Schwen, Founder, will walk through it with you.',
      button: 'Start a Free Review',
    },
  };
});
