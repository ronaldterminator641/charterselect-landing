---
description: Slice a finished hub white paper into its full spoke set (newsletter, company checklist, hooks, scheduler CSV).
argument-hint: <path to the hub white paper .md>
---

Slice the hub white paper at: **$ARGUMENTS**

Use the canonical spoke examples in `spokes/retroactive-date-trap/` as the format reference. Derive the hub slug from the paper's filename and create `spokes/<hub-slug>/`.

Produce four files:

1. **`linkedin-newsletter.md`** — a personal-profile newsletter in Aaron's first-person founder voice. Lead with a human story or scenario, compress the paper's core insight, tie it to why Charter Select exists, and close on the paper's NEPQ question. ~700-800 words. Insert `[LINK TO WHITE PAPER]` as a placeholder for the live hub URL.

2. **`company-page-checklist.md`** — the authoritative, technical credibility asset. Lead with a matrix or comparison table, then a renewal/action checklist, then a short "why this is standard practice for us" close. Written in the more buttoned-up company voice.

3. **`short-form-hooks.md`** — 7 standalone pattern-interrupt posts, each driving to the hub via `[LINK]`. Number them.

4. **`distribution-schedule.csv`** — run `python3 scripts/build_schedule_csv.py spokes/<hub-slug>/short-form-hooks.md --start <next Monday>` to generate the 3-week omnipresence cadence, then add rows for the newsletter and the company checklist.

Apply the same de-AI rules as the hub (zero em-dashes, no banned phrases). Run `scripts/deai_check.py` on the newsletter and checklist before finishing. Update `topics-backlog.md` to mark the hub **Drafted + Sliced**.

Do not publish or post anything. Stop at publish-ready files and report the paths.
