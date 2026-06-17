# Charter Select Content & Conversion Engine

A Claude Code project that produces long-form insurance white papers for charter schools and slices each one into a full distribution set. Built as a small team of subagents the main session orchestrates.

## How to run it

1. Install Claude Code and open this folder:
   ```
   npm install -g @anthropic-ai/claude-code
   cd charter-select-engine
   claude
   ```
   `CLAUDE.md` loads automatically and tells Claude how content gets made here.

2. Write a new paper:
   ```
   /new-paper 2 extra-expense-coverage
   ```
   This runs research (if the topic is flagged Verify in `topics-backlog.md`), then writing, then the de-AI edit, and updates the backlog.

3. Slice a finished paper into spokes:
   ```
   /slice-spokes hub-whitepapers/pillar-2-operational-continuity/extra-expense-coverage.md
   ```

## The team (subagents in `.claude/agents/`)
- **insurance-researcher** — verifies the mechanics, writes a fact sheet. Runs first on Verify topics. Read-only plus web access plus write.
- **whitepaper-writer** — drafts the paper to the quality bar and brand voice.
- **deai-editor** — runs the checker, fixes machine-phrasing, confirms the NEPQ close, updates the backlog.

Subagents are loaded at session start. If you edit one on disk, restart the session (or edit via `/agents`) to pick up the change.

## Scripts (`scripts/`)
- **deai_check.py** — lints a file or directory for em-dashes, banned phrases, and a missing NEPQ close. Exit 1 on hard violations. This is the editor's discipline as runnable code.
  ```
  python3 scripts/deai_check.py hub-whitepapers
  ```
- **build_schedule_csv.py** — turns a `short-form-hooks.md` into a Mon/Wed/Fri scheduler CSV.
  ```
  python3 scripts/build_schedule_csv.py spokes/<slug>/short-form-hooks.md --start 2026-06-22
  ```

## Layout
```
CLAUDE.md                  project brain (auto-loaded)
topics-backlog.md          the single tracker
templates/                 the white paper skeleton
.claude/agents/            the three subagents
.claude/commands/          /new-paper and /slice-spokes
scripts/                   deai_check.py, build_schedule_csv.py
hub-whitepapers/           the white paper bank, by pillar
spokes/                    sliced distribution assets, by hub
```

## Deliberately not built
- **No Notion API integration.** The markdown backlog is enough until 10+ assets are in flight. Automating tracking before there is anything to track is wasted work. When the day comes, the hook is the `topics-backlog.md` schema.
- **No publishing or posting.** The engine produces publish-ready files. A human posts them.

## Status
6 of 23 papers drafted. The Retro Date hub is sliced and publish-ready. Nothing is live until posted.
