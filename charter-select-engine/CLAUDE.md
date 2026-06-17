# CLAUDE.md — Charter Select Content & Conversion Engine

This file is auto-loaded into context at the start of every Claude Code session in this project. It is the source of truth for how content gets made here. Read it before doing anything.

## What this project is
A content engine for **Charter Select**, a bootstrapped solo insurance brokerage serving charter schools exclusively (P&C + Employee Benefits under one roof). Founder: Aaron Schwen. The engine produces long-form "Hub" white papers and slices each into "Spoke" assets for distribution.

## The model (GaryVee waterfall)
One deep **Hub** asset (long-form, un-gated white paper for SEO) → many **Spokes** (LinkedIn personal newsletter, company-page checklist/matrix, short-form hooks, scheduler CSV). Build the hub once, slice it many ways, distribute everywhere.

## Brand voice: "Business Mullet"
Professional and rock-solid where it counts (the insurance mechanics must be technically correct), personal and direct everywhere else. Trench-tested founder, not a corporate brochure. No jargon. Short sentences mixed with longer ones. Speak like someone who has seen brokers fail schools and is done watching it happen.

## Non-negotiable quality bar (every white paper)
1. **Pattern-interrupt hook** — open with something that stops a busy school leader cold. Lead with the cost, the failure, or the uncomfortable scenario.
2. **Plain-English mechanics that are correct** — explain the insurance accurately. Getting a mechanic wrong destroys the brand. If unsure, the researcher verifies first (see Verify discipline).
3. **Weaponize broker flaws** — frame the generalist broker's laziness (slow responses, late renewals, unread policies, easy-button renewals) as the reason the gap exists.
4. **NEPQ close** — end on a disarming, self-discovery question (Jeremy Miner style), not a hard pitch. The question should make the reader want to check their own coverage.
5. **De-AI prose** — run `scripts/deai_check.py` on every draft. It must pass.

## De-AI rules (enforced by scripts/deai_check.py)
- **Zero em-dashes.** Use commas, periods, or restructure. Em-dash overuse is the #1 machine fingerprint.
- **Banned phrases:** "almost nobody", "here's the catch", "here's the thing", "the uncomfortable truth", "it's not X, it's Y" constructions, "great question", "you're absolutely right", "that makes a lot of sense", "delve", "tapestry", "testament to", "navigate the complexities", "in today's fast-paced", "at the end of the day", "when it comes to". (See the script for the full live list.)
- **Vary rhythm.** Avoid uniform sentence length and repeated dramatic one-word sentences. Human writing is uneven.

## Verify discipline
Some topics carry mechanics that are easy to get subtly wrong. Those are marked **Verify** in `topics-backlog.md`. For any Verify topic, the **insurance-researcher** agent runs first and produces a fact sheet; the writer drafts only from verified facts. Do not draft a Verify topic from memory.

## The four content pillars
1. **Governance & Legal Shield** (executive risk): retro date trap, crime vs cyber, management liability placement, SRO legal liability, board Side-A protection, abuse/molestation coverage.
2. **Operational Continuity** (property): active assailant, extra expense, IoT risk mitigation, facility use agreements, disaster blueprint, environmental/pollution.
3. **Daily Liability Blindspots**: hired & non-owned auto, student accident, program value-adds, workers' comp experience-mod.
4. **Benefits Revolution**: failure of fully insured, alternative funding (level-funded/captives), reference-based pricing, advanced employee care, open enrollment modernization, stop-loss contract terms.

## File conventions
- White papers: `hub-whitepapers/pillar-N-name/<slug>.md`
- Spokes: `spokes/<hub-slug>/` containing `linkedin-newsletter.md`, `company-page-checklist.md`, `short-form-hooks.md`, `distribution-schedule.csv`
- Backlog + status: `topics-backlog.md` (the tracker; Notion is intentionally NOT wired up yet — the markdown backlog is enough until there are 10+ assets in flight)
- Canonical examples to match: `hub-whitepapers/pillar-1-governance-legal-shield/retroactive-date-trap.md` (hub) and `spokes/retroactive-date-trap/` (spokes).

## Workflow
- `/new-paper <pillar> <topic>` — runs research (if Verify) → write → de-AI edit → updates backlog.
- `/slice-spokes <path-to-paper>` — generates the full spoke set from a finished hub.
- Subagents: `insurance-researcher`, `whitepaper-writer`, `deai-editor`. The main session orchestrates; the subagents do the focused work.

## What NOT to build
- Do not wire up the Notion API until there are 10+ assets in flight and the markdown backlog genuinely stops being enough. Automating tracking before there's anything to track is wasted work.
- Do not publish or post anything. The engine produces publish-ready files. A human posts them.
