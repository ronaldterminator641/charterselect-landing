---
description: Produce a new Charter Select hub white paper end to end (research if needed, write, de-AI edit, update backlog).
argument-hint: <pillar-number> <topic slug or description>
---

Produce a new hub white paper for the topic: **$ARGUMENTS**

Run the pipeline in order:

1. **Check the backlog.** Read `topics-backlog.md`. Find this topic. Note its pillar and whether it is flagged **Verify**.

2. **Research (only if Verify, or if you are not fully confident in the mechanics).** Delegate to the `insurance-researcher` agent to produce a fact sheet at `research/<slug>-facts.md`. Wait for it to finish. If the topic is common knowledge and not flagged Verify, skip this step.

3. **Write.** Delegate to the `whitepaper-writer` agent. Point it at the fact sheet if one exists, the template, and the canonical example. It writes the paper to `hub-whitepapers/pillar-N-name/<slug>.md`.

4. **Edit.** Delegate to the `deai-editor` agent to run `scripts/deai_check.py`, fix every issue, confirm the NEPQ close and broker-flaw framing, and update `topics-backlog.md`.

5. **Report back** with the final file path, the checker result, and a one-line note on the angle taken.

Do not publish or post anything. Stop at a publish-ready file.
