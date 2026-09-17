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
<p>Charter school boards are volunteers — parents, local professionals, community members — and the claims that reach them are about decisions, not accidents. Governance disputes, employment claims, student-rights cases, and the fine print of claims-made coverage all put personal assets and the school itself on the line in ways general liability was never built to handle.</p>
<p>Most of these exposures hide in policy structure: which form the board's protection is written on, what the umbrella actually schedules, and where a retroactive date sits. The guides below walk through each one in plain English, so you can ask the questions a generalist broker never raises.</p>`,
  },
  {
    slug: 'charter-school-operations-coverage',
    name: 'Operational Continuity',
    title: 'Charter School Operations Coverage Guide',
    metaDescription:
      'Keeping a charter school running through the unexpected — disaster planning, active assailant coverage, extra expense, pollution, and facility risk.',
    intro: `
<p>When something stops instruction — a disaster, a violent incident, a facility failure — a charter school's problem isn't just repairing the damage. It's keeping two hundred families enrolled and funded while the campus is offline. Property insurance rebuilds buildings; it takes deliberate planning and the right specialty coverage to keep a school operating.</p>
<p>These guides cover the coverage lines and planning habits that keep the doors open through the worst days: what standard policies actually trigger on, where they quietly stop, and what to have in place before you need it.</p>`,
  },
  {
    slug: 'charter-school-liability-coverage',
    name: 'Daily Liability Blindspots',
    title: 'Charter School Liability Coverage Guide',
    metaDescription:
      'The everyday liability gaps charter schools miss — hired &amp; non-owned auto, student accident coverage, workers\' comp experience mods, and more.',
    intro: `
<p>The liability claims that actually happen at charter schools are ordinary: a parent volunteer driving to a field trip, a playground injury, a staff member running an errand in their own car. Ordinary is exactly why they get missed — standard policies weren't written around how schools really operate day to day, and generalist brokers rarely ask.</p>
<p>These guides cover the everyday blindspots: the inexpensive endorsements, the coverage lines schools skip without realizing it, and the numbers quietly driving what you pay.</p>`,
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
    body: `
<p><strong>The $80,000 Email That Neither Your Cyber Policy Nor Your Crime Policy Will Pay For.</strong> Why the most common way money walks out of a school falls into the exact gap between your two financial-crime policies, and the one endorsement that closes it.</p>
<p>A vendor you’ve paid for years sends an email. New banking details, please update the file. Your business manager updates it and sends the next payment, same as always.</p>
<p>The vendor never sent that email. The money is gone the same afternoon.</p>
<p>You file a claim on your cyber policy. Denied. You file on your crime policy. Denied. Both, in writing, within a week of each other.</p>
<p>Two policies. One loss. Zero coverage. Here’s how that happens, and how it doesn’t have to.</p>
<h2>These two policies do completely different jobs</h2>
<p>People say “we have cyber and crime, we’re covered” the way they say “we have insurance.” It’s a category, not an answer. Crime and cyber protect against different things, and the most common loss a school actually suffers lives in the space between them.</p>
<p>A <strong>crime policy</strong> protects your assets from theft. Employee dishonesty, an embezzling bookkeeper, stolen money or securities, forgery, robbery, certain computer fraud where a thief breaks in and moves your funds. The core idea is that someone took something from you.</p>
<p>A <strong>cyber policy</strong> protects against the consequences of a network or data event. Ransomware, a breach of student or staff records, the cost to notify families, regulatory exposure, the business interruption when your systems are down. The core idea is that your data or your network got hit.</p>
<p>Read those two descriptions again and look for the wire fraud from the opening. It isn’t in either one.</p>
<h2>The seam where the money disappears</h2>
<p>The technical name for the opening scenario is social engineering fraud. Sometimes it shows up as “deception fraud” or “fraudulent instruction.” A human being at your school was tricked into voluntarily sending money to a criminal.</p>
<p>Now watch both carriers walk away from it.</p>
<p>The cyber carrier looks at it and says: nobody breached your network. No system was hacked. Your own employee read an email and chose to send a payment. That’s not a cyber event, that’s a payment your staff authorized.</p>
<p>The crime carrier looks at the same loss and says: nobody broke in and took your money. Your employee had full authority to send wires and used it. You voluntarily parted with the funds. That isn’t theft under this policy.</p>
<p>Both denials are, frustratingly, defensible under standard policy language. The loss is real, the money is gone, and each policy points at the other one. This is not a rare edge case. Tricking an employee into a wire is now one of the most common and most expensive financial losses any organization suffers, schools included.</p>
<h2>Why schools are easy targets for this</h2>
<p>Criminals running these schemes do homework, and a charter school hands them most of it for free.</p>
<p>Your budget is public. Your board meeting minutes are public. Your vendors, your leadership names, your fiscal calendar, often all findable in an afternoon. The attacker knows who your CFO is, knows you pay a facilities vendor, and knows roughly when. They send a clean, well-timed email from a lookalike address.</p>
<p>On the other side of that email is a back office run lean. Accounts payable is one or two people, both of them stretched, both of them trained to be responsive and helpful. A request to update vendor banking details doesn’t look like an attack. It looks like a Tuesday.</p>
<p>That combination, public information plus a small trusting back office, is exactly the profile these schemes hunt for.</p>
<h2>The fix is one endorsement and one habit</h2>
<p>This gap is well known in the industry, which is the uncomfortable part. It gets closed with a specific add-on, and a generalist broker who never raised it with you simply didn’t do the work.</p>
<p><strong>Add the social engineering fraud endorsement.</strong> It goes by a few names, fraudulent instruction or deception fraud coverage among them, and it’s usually added onto the crime policy. It is the piece that actually responds when an employee is tricked into sending money. Without it, you are exposed no matter how much cyber and crime coverage you carry.</p>
<p><strong>Check the sublimit, because it’s almost always smaller than you think.</strong> Social engineering coverage is frequently capped well below your main crime limit, sometimes at a small fraction of it. A policy that technically includes it but caps it at $25,000 against an $80,000 loss is a partial answer dressed up as a full one. The limit needs to match the size of a payment your school could realistically send.</p>
<p><strong>Put a verification habit in place.</strong> Any change to vendor banking details gets confirmed by a phone call to a known number, never the number in the email. Some carriers require this kind of control before they’ll pay. It also stops most of these losses before they start.</p>
<p>That’s the whole fix. An endorsement, an adequate sublimit, and a callback rule.</p>
<h2>What a real review would have caught</h2>
<p>A broker doing the job hands you more than a cyber quote and a crime quote stapled together. They map the seam between them out loud. They tell you that the single most likely financial crime against your school is the one neither base policy covers, they confirm the social engineering endorsement is on the crime policy, and they pressure-test the sublimit against the actual size of your wires.</p>
<p>A generalist who treats your school as a small account quotes the two policies, says “you’re covered for crime and cyber,” and moves on. Technically true. Practically, they left the most common door wide open.</p>
<h2>Before your next payment goes out</h2>
<p>You don’t need an audit to find out where you stand on this. You need to know one thing.</p>
<p>So here’s the question worth asking:</p>
<p>If someone emailed your business office tomorrow posing as a known vendor and asked to update banking details, and that payment went out before anyone caught it, which policy pays, and what’s the limit on it? If the answer is “I assume one of them does,” that assumption is exactly what these schemes are built to exploit.</p>`,
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
      'Is your charter school board actually under the umbrella? How management liability really works — and the one policy schedule that decides it.',
    body: `
<p><strong>Your board was told the umbrella has them covered. Has anyone actually checked?</strong> A plain-English look at where board protection really comes from — and the one schedule on your umbrella policy that decides whether it's true.</p>
<p>A lawsuit names one of your board members by name. Personally.</p>
<p>Not the school. Her.</p>
<p>The board chair calls the broker, calm at first, because everyone remembers being told the school carries a big umbrella and the board is covered.</p>
<p>Whether that sentence was true depends on one page of your umbrella policy that almost nobody reads. Here's how to read it.</p>
<h2>What you were probably told</h2>
<p>Somewhere along the way, a broker pointed at your program and said a sentence that sounded final. "You've got a sizable umbrella sitting on top of everything, so the board is protected."</p>
<p>Sometimes that sentence is true. Often it isn't. The frustrating part is that the difference has nothing to do with the size of the umbrella — it comes down to how the program underneath it was built, and whether anyone confirmed it. So let me walk through what protects your board, how an umbrella really works, and the one thing to check before you trust that sentence again.</p>
<h2>What "management liability" actually is</h2>
<p>The protection your board is reaching for in that moment has a name. It's <strong>management liability</strong>. It isn't one policy — it's a category, the coverages that respond when the claim is about decisions and conduct rather than a slip-and-fall or a fender bender:</p>
<ul>
<li><strong>Directors &amp; Officers (D&amp;O)</strong>, which protects the personal assets of your directors, trustees, and officers, along with the entity, against claims alleging wrongful acts in how they governed or managed. It pays defense costs, settlements, and judgments.</li>
<li><strong>Employment Practices Liability (EPLI)</strong>, for staff claims like wrongful termination, discrimination, harassment, and retaliation.</li>
<li><strong>Fiduciary liability</strong>, for breaches in how employee benefit plans get managed.</li>
<li><strong>Crime / fidelity coverage</strong>, often attached, covering employee theft and fraud.</li>
</ul>
<p>That's the world your board lives in legally. None of it is bodily injury or property damage, which is the world general liability covers. Different exposure, different policies.</p>
<p>One more detail matters before we get to the umbrella. These lines are almost always <strong>claims-made</strong> coverage. They respond to claims made during the policy period, and they carry a retroactive date. Hold onto that — it comes back at the end.</p>
<h2>How an umbrella really works — and the page that decides everything</h2>
<p>A commercial umbrella does a real job. It adds excess limit on top of a specific, scheduled set of underlying policies. The key word is "scheduled": every umbrella lists, by name, the policies it sits over. That list is called the schedule of underlying insurance, and it is the single page that decides whether your board is under the umbrella or standing out in the rain.</p>
<p>Here's where programs split.</p>
<p>A generalist broker typically builds a school like a small business: general liability, auto, and employers liability under a standard commercial umbrella. On that build, the schedule of underlying insurance lists GL, Auto, and Employers Liability — and nothing else. No D&amp;O. No employment practices. No board coverage of any kind underneath. The umbrella can't stretch a limit on a coverage that was never placed in its tower, and many standard umbrella forms exclude employment-related practices and professional exposures outright. The word "umbrella" made it sound like a blanket over the whole organization. On that program, it isn't.</p>
<p>A program built for schools looks different. The carriers who actually specialize in schools write the board's protection as <strong>Educators Legal Liability</strong> — a hybrid of D&amp;O and E&amp;O built for education, which covers governance claims <em>and</em> the exposures that are purely a school's: failure to educate, special-education disputes, student rights and discipline claims. Written with the same package carrier as the rest of the program, that ELL policy can be listed on the umbrella's schedule of underlying insurance — and when it is, the umbrella's limit genuinely sits over your board.</p>
<p>Same word, "umbrella." Two completely different realities. The only way to know which one you have is to read the schedule.</p>
<h2>The shared-limit problem the schedule doesn't fix</h2>
<p>Even on a well-built program, one structural detail deserves attention. A D&amp;O or ELL policy has three insuring agreements, called sides. Side A pays individuals directly when the school can't or won't indemnify them. Side B reimburses the school when it does. Side C covers the entity itself. And Sides A, B, and C usually share one aggregate limit.</p>
<p>Picture a lawsuit that names the school and several board members together. The entity's own defense starts drawing down that shared limit, and in a hard-fought case it can be eaten before the individual trustees are ever protected. For schools with larger boards, bond financing, or elevated governance risk, dedicated Side-A coverage exists precisely to close that gap — a protected limit reserved for the individuals that can't be burned by the entity's side of the fight. It's worth asking whether your program needs it.</p>
<h2>Why this lands harder on a charter</h2>
<p>Your board is volunteers. Parents, local professionals, community members serving unpaid. Management liability claims name those people personally, which means a trustee's own net worth is on the line for serving your school. The "you have an umbrella" reassurance — delivered without anyone checking the schedule — is the cruelest version of this trap, because it tells volunteers they're safe when nobody has confirmed it.</p>
<p>Charters are people-heavy employers, too, which means real EPLI exposure. Budget-driven staffing decisions are a documented driver of rising employment claims at charter schools, and harassment, discrimination, and wrongful-termination suits are common across the sector.</p>
<p>Then there's the exposure that's purely yours: student claims. A generic nonprofit D&amp;O policy may not contemplate failure-to-educate or special-education disputes at all. This is exactly why the ELL form — not a repurposed nonprofit D&amp;O — is the right chassis for a school's board protection.</p>
<p>And funding pressure makes all of it worse. Charter money follows enrollment. Authorizer renewals, financial distress, closure decisions — these are exactly the kinds of board actions that generate claims in the first place. The risk and the thin coverage tend to peak at the same time.</p>
<h2>What handling this properly looks like</h2>
<p>This is fixable, and none of it is exotic. It's a placement done with care instead of on autopilot. Here's what to ask for and confirm:</p>
<ul>
<li><strong>The school-appropriate form.</strong> Board protection written as Educators Legal Liability — covering governance, employment, and student claims — with an insured definition that actually reaches your trustees, officers, employees, volunteers, and committee members. Confirm it in writing.</li>
<li><strong>The umbrella's schedule of underlying insurance, in hand.</strong> If the ELL policy is listed, the umbrella's limit sits over your board. If the schedule reads GL/Auto/Employers Liability only, your board's protection stops at the primary limit — and someone should be able to explain why.</li>
<li><strong>A right-sized primary limit</strong>, set with the knowledge that defense costs typically erode the limit rather than sitting on top of it.</li>
<li><strong>Claims-made details reconciled</strong>: the retroactive date preserved at every renewal and every carrier move, and consistent terms between the primary and anything sitting above it.</li>
<li><strong>Dedicated Side-A considered deliberately</strong> where board size, bond covenants, or governance risk warrant a limit reserved for the individuals.</li>
<li><strong>Fiduciary coverage carried deliberately</strong>, with the ERISA bond requirement for any benefit plan confirmed as satisfied.</li>
</ul>
<h2>What a broker actually doing the job would do</h2>
<p>A generalist gives the board a sentence that sounds like protection. "You've got a five-million umbrella, you're covered." It's easy to say, it ends the conversation, and nobody checks whether it's true.</p>
<p>A broker doing the job doesn't stop at the sentence. They put the schedule of underlying insurance in front of you and show you, line by line, which policies the umbrella actually sits over. They confirm the board's protection is on an educators form, not a repurposed nonprofit D&amp;O. They check the retroactive date at every renewal. And when the program is built right — the board's coverage placed with the package carrier and scheduled under the umbrella — they can point to the exact page that proves it.</p>
<p>That's the difference between a broker who treats your board like real people with real assets on the line, and one who treats your account like a file to clear before the deadline.</p>
<h2>The question worth sitting with</h2>
<p>If a board member were named personally in a lawsuit next month, which policy would defend them — and is that policy listed on your umbrella's schedule of underlying insurance, or did someone just point at the umbrella and hope?</p>
<p>If nobody can produce the schedule, you don't have an answer — you have a guess. The good news is that it's a placement question, and placement questions get answered before the claim, never during it.</p>`,
  },
  {
    slug: 'retroactive-dates',
    hub: 'charter-school-risk-governance',
    title: 'Retroactive Dates in Charter School Policies',
    metaDescription:
      'A wrong retroactive date can erase years of charter school claims protection. How retro dates work on claims-made policies and how to protect yours.',
    body: `
<p><strong>The One Date On Your Insurance Policy That Can Quietly Erase Five Years of Coverage.</strong> A plain-English look at the claims-made retroactive date: the most expensive line of fine print most school leaders were never told to check.</p>
<p>A claim lands in 2026 for something that happened in 2021.</p>
<p>You were insured the whole time. You renewed every year, paid every premium, never lapsed, never got a warning.</p>
<p>You’re still not covered.</p>
<p>Here’s the date that did it.</p>
<h2>The thing nobody walks you through</h2>
<p>You run a school. You’re balancing a board, a budget, a building, two hundred families, and a staff who need their benefits to actually work. When the insurance renewal shows up once a year, you do the rational thing. You skim the premium, check that it didn’t jump too hard, and sign.</p>
<p>That’s the exact behavior this whole problem is built on.</p>
<p>The number that matters most on some of your most important policies isn’t the premium. It’s a single date sitting in the declarations page, called the retroactive date. The moment it moves the wrong way, you can lose coverage for years you already paid for, and you won’t find out until a claim shows up.</p>
<p>So let me walk you through it. What it means, then what it looks like when it goes wrong, then how to stop it.</p>
<h2>What “claims-made” actually means</h2>
<p>Some of your insurance is occurrence coverage. Occurrence is simple and forgiving. If the bad thing happened while the policy was in force, you’re covered, even if the claim doesn’t get filed until years later. The year the event happened is the year that pays, and once you’ve bought it, that year is locked in for good.</p>
<p>A lot of the policies that protect you where you’re most exposed don’t work that way. They’re claims-made. That usually includes:</p>
<ul>
<li><strong>Directors &amp; Officers (D&amp;O)</strong>, which protects your board and leadership</li>
<li><strong>Employment Practices Liability (EPLI)</strong>, for wrongful termination, discrimination, and harassment claims from staff</li>
<li>Educators’ professional liability</li>
<li>Abuse and molestation coverage, when it’s written claims-made</li>
</ul>
<p>Claims-made runs on a different logic. It covers a claim based on the year the claim gets reported, not the year the event happened. The claim has to be filed while the policy is active.</p>
<p>So far that sounds reasonable. The part that rarely gets explained is this: a claims-made policy only covers events that happened on or after one specific date. Anything before that date is excluded, no matter how many years you’ve been a paying customer.</p>
<p>That date is the retroactive date.</p>
<h2>The retroactive date, plainly</h2>
<p>Your retroactive date is the earliest date a covered event can have happened and still get paid. Move that date forward, and everything before it drops out of your coverage.</p>
<p>When you first buy claims-made coverage, the retro date usually gets set to that day. Fair enough. But if you keep claims-made coverage running year after year, the entire point is to keep that original retro date frozen where it is. Every year you renew, your covered window stretches further back. Five straight years of coverage should mean five years of protected history behind you.</p>
<p>It should, anyway.</p>
<h2>How it goes wrong</h2>
<p>The renewal cycle comes around, and a generalist broker, the kind who treats charter schools as too small to fuss over, goes shopping to knock a few thousand dollars off your premium. They find a cheaper carrier. They move your policy. They tell you they saved you money.</p>
<p>What they often skip, because checking it is tedious and they’re in a hurry, is what the new carrier set as your retroactive date.</p>
<p>When a new claims-made carrier writes your policy, the default is to set the retro date to the day the new policy starts. Not your original date. The new one.</p>
<p>In a single renewal, your protected history can collapse from five years down to nothing. Every act before the switch, every decision your board made, every personnel call, every incident that hasn’t surfaced yet, now sits outside the policy. You’re paying about the same premium for a fraction of the protection, and the paperwork looks completely normal on its face.</p>
<p>The premium dropped four thousand dollars. The coverage you actually bought dropped by years. And nobody mentioned it to the board.</p>
<h2>Why this hits schools harder than anyone</h2>
<p>For most businesses, an advanced retro date is a rough day. For a school, it can take the whole institution down.</p>
<p>It comes down to the kind of claims you face. The most catastrophic exposures a school carries, like abuse and molestation, civil rights, and certain employment matters, are also the ones with the longest gap between when the event happened and when the claim gets reported. Abuse claims especially tend to surface years, sometimes decades, after the fact, because of how and when victims come forward.</p>
<p>Now stack those two facts on top of each other:</p>
<ol>
<li>Your worst claims are the ones most likely to be reported years late.</li>
<li>A claims-made policy with an advanced retro date specifically refuses to cover events from the years before the switch.</li>
</ol>
<p>So the retroactive date trap doesn’t put your small claims at risk. It puts the exact category of claim that bankrupts schools and pulls board members’ personal assets into a courtroom. It lands on your single biggest vulnerability, and it gets set off by an ordinary money-saving carrier switch that reads like good news on the invoice.</p>
<h2>The fix isn’t complicated. It just has to get done.</h2>
<p>This is a solvable problem. It gets ignored because solving it means somebody has to actually read the policy, line by line, every renewal. Here’s what protecting your retro date takes:</p>
<p><strong>Keep the original retroactive date.</strong> When you switch carriers, the new policy’s retro date should match your original date, not the new start date. You ask for that, and you get it confirmed in writing. It does not happen on its own.</p>
<p><strong>Get prior acts coverage, sometimes called “nose.”</strong> A new carrier can agree to cover events going back to your old retro date. That’s the bridge that keeps your history intact through a switch.</p>
<p><strong>Or buy tail coverage from the carrier you’re leaving.</strong> An Extended Reporting Period, the “tail,” lets you keep reporting old-event claims to the old carrier after that policy ends. A preserved retro date, nose, or tail: you need at least one of them working every time a claims-made policy changes hands.</p>
<p><strong>Read the declarations page at every renewal.</strong> The retro date lives there. It takes two minutes to find, and it’s the highest-stakes line on the page.</p>
<p>That’s the whole fix. The reason it doesn’t happen isn’t that it’s hard. It’s that the broker on your account decided your school wasn’t worth the two minutes.</p>
<h2>What it looks like when someone’s actually doing the job</h2>
<p>A broker who takes this seriously does three things you’ve probably never gotten from a generalist.</p>
<p>They renew early, with weeks of runway, so there’s actual time to look at the structure of a carrier switch instead of rubber-stamping it the night before the policy expires.</p>
<p>They pull the claims-made policies and check the retro date at every renewal, and they show you, in plain language, what it is and whether it moved.</p>
<p>They treat your board’s personal protection like it matters, because the people sitting on a charter school board are putting their own assets on the line to serve a community, and an advanced retro date can leave them hanging personally.</p>
<p>None of that is exotic. It’s the difference between a broker who treats your school like a real client and one who treats it like a file to clear off the desk.</p>
<h2>Before you renew anything</h2>
<p>You don’t have to take anyone’s word for this, including this page. You just have to look at one thing.</p>
<p>So here’s the question worth sitting with:</p>
<p>When was the last time anyone actually pulled your claims-made policies and confirmed, in writing, whether the retroactive date moved at your last carrier switch? Or did the renewal just process itself while everyone was busy running a school?</p>
<p>If you can’t answer that with confidence, you don’t have a coverage problem yet. You have a question nobody’s checked. The check takes two minutes. What it costs to skip it doesn’t show up until the worst possible day.</p>`,
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
    body: `
<p><strong>Your Property Insurance Needs a Broken Window to Pay. The Worst Day at a School Doesn’t Come With One.</strong> Why a violent event on campus can cost a school everything and still trigger no property claim, and the coverage built specifically to respond when there’s no physical damage to point at.</p>
<p>The unthinkable happens on your campus. There’s no fire. No flood. No broken glass, no caved roof, nothing a camera would call damage.</p>
<p>In the weeks after, the costs come anyway. Counselors and trauma care. Round-the-clock security nobody planned for. Families who need support. A crisis communications team. And the quiet one that breaks the budget: students who don’t come back, in a school funded by the students who show up.</p>
<p>You file a claim on your property policy. The adjuster asks where the physical damage is. There isn’t any. Claim closed.</p>
<p>Here’s why the policy you’d reach for can’t help, and what actually does.</p>
<h2>Property coverage runs on physical damage. That’s the whole catch.</h2>
<p>A standard commercial property policy, and the business interruption coverage attached to it, is built around one trigger: direct physical loss or damage to the property. A fire, a burst pipe, a storm that tears off part of the roof. Something physically happened to the building, so the policy responds, and the business interruption piece replaces the income you lost while you repaired it.</p>
<p>That structure works fine for a flood. It falls apart for an act of violence.</p>
<p>A violent event on a campus can be the most devastating thing that ever happens to a school and cause almost no qualifying physical damage to the building. The harm is human, operational, and reputational. The policy that’s supposed to keep you running after a disaster is looking for a kind of damage that this disaster didn’t produce, so it stays shut.</p>
<h2>The bill that arrives after a violent event</h2>
<p>Set aside, for a moment, the human weight of it, which no policy can address. Look only at the costs that land on the school as an organization, because those are the ones insurance is supposed to catch.</p>
<p>After a violent incident, a school typically faces some mix of:</p>
<ul>
<li>Crisis management and communications. Press, community, families, public officials, all at once, all immediately.</li>
<li>Psychiatric and medical care for students, staff, and families, often for a long time.</li>
<li>Security upgrades and on-site presence that didn’t exist in the budget the week before.</li>
<li>Counseling and family support at a scale a school has never staffed for.</li>
<li>Relocation or remediation of the space, because sometimes people cannot walk back into the room.</li>
<li>Lost enrollment, which for a charter school isn’t a soft metric. It’s the funding.</li>
</ul>
<p>That last one deserves its own paragraph.</p>
<h2>Why this lands harder on a school than almost any other organization</h2>
<p>Charter schools live and die on enrollment. Funding follows the student. When attendance drops, when families transfer out, when next year’s enrollment softens because of what happened, that is a direct hit to the dollars that keep the doors open and the staff paid.</p>
<p>A normal business takes a violent event as a tragedy and a disruption. A charter school takes it as a tragedy, a disruption, and a funding cliff at the same time, with no corporate risk department and no cash cushion to ride it out. The very thing that makes the model work, money that follows students, becomes the thing that bleeds when students stop coming.</p>
<p>So the school carrying only standard property and liability is exposed exactly where it’s weakest, and the coverage it assumed would respond is asking about broken windows.</p>
<h2>What actually responds: coverage built for the event itself</h2>
<p>There’s a category of coverage written specifically for this. It goes by names like <strong>active assailant</strong>, <strong>deadly weapon protection</strong>, or <strong>active shooter coverage</strong>, and specialty carriers now write it as a standalone policy.</p>
<p>The thing that makes it different is the trigger. It does not wait for physical damage to the building. It responds to the violent event itself. That single design choice is the whole point, because it’s the reason it pays where your property policy can’t.</p>
<p>A well-built policy in this category typically funds the costs that actually show up: crisis management and PR, medical and psychiatric care for victims, extra security, counseling, business interruption from the drop in attendance and enrollment, and remediation or relocation of the space. It puts money in motion in the days after, when a school has the least capacity to figure out funding and the most need for it.</p>
<h2>Reading one of these correctly matters</h2>
<p>This is coverage where the fine print decides whether it’s real, so a few things are worth confirming rather than assuming:</p>
<p><strong>The trigger definition.</strong> Does it respond only to an actual event, or also to a credible threat that forces a closure and a response? The broader trigger covers more of what schools actually live through.</p>
<p><strong>What’s inside.</strong> Confirm it includes business interruption tied to enrollment and attendance, not just immediate crisis costs. For a charter school, the enrollment piece is the part that matters most and the part most likely to be thin.</p>
<p><strong>The limits, against the real cost.</strong> Crisis response, long-term care, and a multi-month enrollment dip add up fast. A small limit is a gesture, not a safety net.</p>
<h2>Before you assume you’re covered for this</h2>
<p>You don’t need to dwell on the scenario to answer the question that matters. You just need to know what your current policies actually do.</p>
<p>So here’s the one to sit with:</p>
<p>If a violent event happened on your campus tomorrow and caused no physical damage to the building, which of your current policies pays for the counselors, the security, the crisis team, and the enrollment you’d lose over the following year? If the honest answer is “I’m not sure any of them do,” then the gap isn’t theoretical. It’s the one your current broker never brought up.</p>`,
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
    body: `
<p><strong>A Parent Volunteer Drives Three Kids to a Field Trip and Causes a Wreck. Your Auto Policy Doesn’t Cover It. Now What?</strong> The everyday liability almost every charter school carries without knowing it, hiding in every field trip, supply run, and bank deposit made in a personal car.</p>
<p>A parent volunteer loads three of your students into her minivan and drives them to the science museum for a field trip. On the way back, she’s distracted for a second and rear-ends the car in front of her. Someone in that car is hurt.</p>
<p>The injured driver’s attorney looks around for who to sue. They don’t go after the parent. Her policy is small and she’s not worth the fight. They go after the school, because the school has the deeper pockets and the parent was doing the school’s business when it happened.</p>
<p>Now the question that decides everything: which of your insurance policies pays? For a lot of schools, the honest answer is none of the ones they think.</p>
<h2>The coverage with the confusing name</h2>
<p>The protection this scenario calls for is <strong>Hired and Non-Owned Auto liability</strong>, usually shortened to HNOA. The name is doing a bad job of describing something simple, so let’s translate it.</p>
<p>“Non-owned auto” means a vehicle your school does not own but that gets used for your school’s business. A staff member’s personal car. A parent volunteer’s minivan. A coach’s truck hauling equipment to a game. The school doesn’t own any of them, but the moment someone drives one on the school’s behalf, the school can be pulled into the liability when something goes wrong.</p>
<p>“Hired auto” means vehicles your school rents or borrows, like a van rented for a trip.</p>
<p>Here’s the gap most schools fall into. Your commercial auto policy, if you even have one, covers vehicles the school owns. It frequently does not respond to a personal car driven on school business. So when a volunteer or staff member crashes their own vehicle while doing something for the school, the policy you’d reach for sits this one out, and the school’s liability is exposed with nothing standing behind it.</p>
<h2>“But the driver has their own insurance”</h2>
<p>True, and it isn’t enough. Here’s why that reassurance falls apart.</p>
<p>The driver’s personal auto policy is primary, so it pays first. But personal auto limits are often modest, and a serious injury claim blows through them quickly. The moment that personal policy is exhausted, the plaintiff’s attorney turns to the next available pocket, and the school is standing right there, named as a defendant because the driver was running the school’s errand.</p>
<p>There’s a second problem. Some personal auto policies limit or exclude coverage when the car is being used for business. A volunteer who didn’t realize that can find their own insurer narrowing or denying the claim, which puts the school in the crosshairs even faster.</p>
<p>The driver’s policy is a first layer, not a shield. The school’s exposure begins exactly where that policy ends.</p>
<h2>Why schools are exposed by this constantly</h2>
<p>This isn’t a rare event you can plan around. It’s woven into how a school runs every week.</p>
<p>Staff drive their own cars to make the bank deposit, grab supplies, pick something up for an event. Teachers and volunteers drive on field trips. Coaches transport athletes. Someone runs a forgotten item across town before a performance. None of it feels like “the school driving,” which is exactly why nobody insures it. The exposure is invisible precisely because it’s so ordinary.</p>
<p>For a school with a tight budget and a deep-pocket target painted on it the moment a lawyer gets involved, an uninsured non-owned auto claim is the kind of surprise that can dwarf a year’s worth of premiums.</p>
<h2>The fix is cheap and almost always overlooked</h2>
<p>This is one of the least expensive gaps to close in all of your insurance, which makes it all the more frustrating when it’s missing.</p>
<p><strong>Add HNOA coverage.</strong> It’s frequently an inexpensive endorsement on your existing liability or commercial auto coverage. Confirm in writing that it’s there and that the limits are adequate, because adequate liability limits are what stand between the school and a serious-injury verdict.</p>
<p><strong>Understand what it does and doesn’t do.</strong> HNOA protects the school’s liability when a non-owned vehicle is driven on school business. It does not repair the volunteer’s own car. Make sure everyone driving for the school understands that their personal coverage handles their own vehicle.</p>
<p><strong>Put basic driver guidelines in place.</strong> A valid license, a minimum level of personal auto coverage, and a simple driving-record check for anyone regularly transporting students. It costs almost nothing and it screens out the worst risks before they’re behind the wheel with your kids.</p>
<p>That’s the whole fix. An endorsement, the right limits, and a one-page volunteer driver policy.</p>
<h2>What a broker who’s paying attention would ask</h2>
<p>A broker doing the job asks a question a generalist almost never does: who drives for your school in vehicles the school doesn’t own? Field trips, errands, athletics, volunteers. Then they make sure HNOA is on the policy with limits that match the real exposure.</p>
<p>A generalist quotes your property and your general liability, never asks the question, and leaves one of the most common and most ordinary exposures a school has completely uncovered, because it never occurred to them to look.</p>
<h2>Before your next field trip leaves the parking lot</h2>
<p>You don’t need an audit to check this one. You need to look at two lines on your policy.</p>
<p>So here’s the question worth sitting with:</p>
<p>If a staff member or a parent volunteer caused a serious-injury accident tomorrow while driving their own car for your school, and their personal policy maxed out, who pays the rest? And have you ever actually seen Hired and Non-Owned Auto coverage, with real limits, on your policy? If you’re not sure, that uncertainty is riding along on every trip your school takes.</p>`,
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
    body: `
<p><strong>The Health Plan Where a Healthy Year Pays You Back.</strong> A plain-English look at level-funded plans and group captives: the funding models that return surplus to the school instead of the insurer, what they actually require, and the honest risk nobody should hide from you.</p>
<p>There’s a version of your school’s health plan where a healthy year ends with money coming back to your budget instead of vanishing into the insurer’s profit.</p>
<p>It isn’t exotic. It isn’t only for big corporations. Schools your size run on it right now. And the reason most charter leaders have never seriously looked at it is that their generalist broker found it easier to renew the same fully insured plan every year and pass along the increase.</p>
<p>Here’s how the alternatives actually work, who each one fits, and the part of the pitch most people leave out: the real risk.</p>
<h2>The spectrum, in plain terms</h2>
<p>Health plan funding runs along a spectrum, and fully insured sits at one end of it.</p>
<p>At that end, you pay a fixed premium, the insurer takes all the risk, and the insurer keeps any surplus. Predictable, and built so you never share in a good year.</p>
<p>At the far other end is full self-funding, where the employer pays claims directly and keeps the savings when claims are low. It offers the most control and the most upside, but on its own it carries real volatility, and it doesn’t work well for a smaller employer, because a single catastrophic claim can blow a hole in the budget. Self-funding relies on having enough covered lives to make the averages stable, and most individual schools don’t have that on their own.</p>
<p>Between those two ends sit the two models worth a charter school’s attention: level-funded plans and group captives.</p>
<h2>Level-funded: the step off fully insured, with a safety net</h2>
<p>A <strong>level-funded plan</strong> is the practical first move away from fully insured, and it’s built for exactly the small-to-midsize employer a charter school usually is.</p>
<p>You pay a set monthly amount, which keeps the budget predictability you’re used to. That payment splits into three parts: a claims fund to pay your people’s medical claims, the administrative fee, and the premium for stop-loss insurance. Stop-loss is the safety net. It’s a policy that caps your exposure, so if claims run high, on a single large claim or across the whole group, stop-loss absorbs the overage and your downside is limited to what you already budgeted.</p>
<p>Now the upside that fully insured never gave you: if your group’s actual claims come in below the funded amount, you get the surplus back as a refund, typically within a few months of the plan year closing. A healthy year finally pays you instead of the carrier.</p>
<p>There’s a second benefit that’s easy to overlook and genuinely valuable. Level-funded plans give you real monthly claims data, things like emergency room usage, prescription patterns, and cost drivers. For the first time you can see what’s actually moving your costs and manage it, instead of being handed a renewal number with no explanation.</p>
<p>Two honest caveats. Level-funded plans carry more compliance and reporting responsibility than fully insured, and they aren’t available in every state because of how stop-loss is regulated. A competent broker handles the first and checks the second before recommending anything.</p>
<h2>Group captives: for bigger schools, or schools willing to band together</h2>
<p>A <strong>group captive</strong> is the next level of control, and it’s where the model gets interesting for the charter world specifically.</p>
<p>A captive is an insurance company owned by the employers in it. Instead of buying coverage from a carrier that keeps the profit, a group of like-sized employers pool together and effectively insure themselves, with structure around it so no single member carries the whole risk. It usually works in three layers. Each employer self-funds its own routine, predictable claims up to a set point. Above that, a shared middle layer pools the mid-sized claims across all the member employers, so one member’s rough year is cushioned by the group. Above that, reinsurance catches the truly catastrophic claims.</p>
<p>The payoff: a large share of what used to be fixed premium becomes variable cost, and the dollars that aren’t spent on claims come back to the members as dividends rather than staying with an insurer. Members also get deep claims data, get underwritten on their own performance instead of being lumped into an opaque pool, and gain real negotiating leverage with administrators and pharmacy managers.</p>
<p>The charter-specific angle is the one worth sitting with. A single school may be too small to self-fund alone. But charter schools share a risk profile, and banding together into a captive is exactly the kind of pooling that lets smaller organizations reach a scale none of them could reach on their own. The model is built for groups of similar employers who want control without carrying the full risk solo.</p>
<h2>The honest risk, said out loud</h2>
<p>Any broker who pitches these as free money is lying to you, so here’s the straight version.</p>
<p>These models move some risk from the insurer onto the school. In a bad claims year, you will pay more than your best case, up to the point where stop-loss or the captive’s reinsurance takes over. That ceiling is defined and known in advance, which is the whole point of the structure, but it is higher than the flat premium of a fully insured plan in a bad year. The tradeoff you’re making is accepting a defined, capped downside in exchange for keeping the upside in a good year and getting data you can actually act on.</p>
<p>They also demand more from your broker. These plans live or die on the claims analysis, the stop-loss contract terms, and ongoing management. A broker who can’t or won’t do that work has no business putting you in one. That’s the real reason a generalist defaults to fully insured: it requires nothing of them.</p>
<h2>Before you renew the same plan one more time</h2>
<p>You don’t have to commit to anything to find out whether this math works for your school. You need someone to run your actual numbers, not hand you a generic pitch.</p>
<p>So here’s the question worth asking:</p>
<p>Has anyone ever run your school’s real claims history against a level-funded or captive model to show you, in dollars, what a healthy year would have returned to your budget instead of the insurer’s? If the honest answer is no, you’ve been renewing the most expensive version of this without ever seeing the alternative.</p>`,
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
    body: `
<p><strong>Your School Had a Healthy Year. Your Reward Was a 12% Premium Increase. Here’s Where the Money Went.</strong> Why the standard health plan most charter schools carry is built so the school loses in a good year and loses in a bad one, and what that costs a budget that can’t absorb it.</p>
<p>Your staff had a healthy year. No major surgeries, no catastrophic claims, a quiet twelve months. By any honest measure, your health plan made money.</p>
<p>Then renewal arrives, and the premium goes up double digits anyway.</p>
<p>So where did the money from your healthy year go? It went to the insurer, and you are never getting it back. That’s not a glitch. That’s how the plan was designed to work, and most school leaders have never had it explained to them.</p>
<h2>How a fully insured plan actually treats you</h2>
<p>The plan most charter schools carry is called <strong>fully insured</strong>. You pay a fixed premium every month. The insurance company takes on the risk of paying claims. Simple, predictable, and on the surface it sounds fair.</p>
<p>Here’s the part that isn’t fair, and it comes down to one question: who keeps the money in a good year?</p>
<p>In a fully insured plan, if your people stay healthy and claims come in well below what you paid in premium, the insurer keeps the difference. All of it. The surplus your healthy workforce generated becomes the insurer’s profit. You don’t get a refund. You don’t get a credit. You often don’t even get told it happened.</p>
<p>Now flip it. If you have a bad year and claims run high, the insurer covers it, then comes back at renewal and raises your premium to recover the cost and protect their margin.</p>
<p>Read those two outcomes together and you’ll see the trap. Good year, they keep the surplus. Bad year, they raise your rate. You carry the downside in both directions and capture the upside in neither. Heads they win, tails you lose.</p>
<h2>You’re also managing the cost completely blind</h2>
<p>There’s a quieter problem stacked on top of the financial one. A fully insured plan gives you almost no usable claims data.</p>
<p>You can’t see what’s driving your costs. You don’t know if it’s a handful of large claims, a pharmacy spend problem, overuse of the emergency room, or something you could actually address. You’re handed a renewal number and told to take it or leave it, with no window into how that number was built.</p>
<p>You can’t manage what you can’t see. Fully insured keeps you from seeing it, which conveniently keeps you dependent on the renewal the insurer hands you.</p>
<h2>Why this lands so hard on a school</h2>
<p>For a school, every premium dollar is a dollar with somewhere better to be. It’s a classroom aide, a counselor, a raise that keeps a good teacher from leaving for the district down the road. A double-digit increase isn’t a line item you shrug off. It’s a real cut somewhere else in the building.</p>
<p>And recruitment makes it worse. You’re competing for staff against public districts that often have deep benefits and pension systems behind them. When your health plan eats your budget and still raises rates every year, you lose ground on the exact tool you’d use to attract and keep good people. The fully insured model quietly works against the thing your school most needs to do.</p>
<h2>There is another way the math can run</h2>
<p>Here’s what your generalist broker probably never told you: the surplus from a healthy year does not have to disappear into the insurer’s pocket. There are funding models built so that a good claims year puts money back into your budget instead of theirs, and they are not reserved for giant corporations. Schools your size use them.</p>
<p>Those models come with their own structure and their own honest tradeoffs, which is its own conversation and its own paper. The point here is narrower and it’s this: if your school is fully insured, you are in the one arrangement where you are guaranteed to never benefit from your own people’s good health. You should at least know that’s the deal you’re in.</p>
<h2>What a broker who’s actually working would have shown you</h2>
<p>A broker doing the job walks you through where your premium dollars went, tells you plainly whether you had a good or bad claims year, and lays the alternative funding models on the table so you can decide with real numbers. They treat your health spend as something you can manage, not a fixed cost you’re stuck absorbing.</p>
<p>A generalist renews you fully insured every single year because it’s the easy button. No data to pull, no analysis to run, no alternatives to explain. They re-up the same plan, pass along the increase, and call it service.</p>
<h2>Before you accept your next renewal</h2>
<p>You don’t need a benefits degree to find out where you stand. You need to ask one question and watch how fast you get a straight answer.</p>
<p>So here’s the one to ask:</p>
<p>The last time your staff had a healthy claims year, what happened to the money? Did any of it come back to your school, or did the insurer keep all of it and raise your rate anyway? If your broker can’t answer that clearly, you’ve just learned something about both your plan and your broker.</p>`,
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
