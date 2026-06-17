#!/usr/bin/env python3
"""
deai_check.py — lints a draft for machine-writing tells.

Usage:
    python3 scripts/deai_check.py path/to/file.md
    python3 scripts/deai_check.py path/to/dir   # checks every .md in the tree

Exit code 0 = clean. Exit code 1 = hard violations found (em-dashes or banned phrases).
A missing NEPQ-style close is reported as a warning and does not by itself fail the check.
"""

import sys
import os
import re

# Hard fails: the em-dash is the #1 machine fingerprint.
EM_DASH = "\u2014"

# Hard fails: phrases that read as machine-written or are explicitly banned for this brand.
BANNED_PHRASES = [
    "almost nobody",
    "here's the catch",
    "here's the thing",
    "the uncomfortable truth",
    "great question",
    "you're absolutely right",
    "that makes a lot of sense",
    "delve",
    "tapestry",
    "testament to",
    "navigate the complexities",
    "in today's fast-paced",
    "at the end of the day",
    "when it comes to",
    "needless to say",
    "it goes without saying",
    "in conclusion",
]

# "it's not X, it's Y" construction (banned). Matches across a short span on one line.
NOT_X_ITS_Y = re.compile(r"\bit'?s not\b.{1,45}?\bit'?s\b", re.IGNORECASE)


def check_file(path):
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    hard = []   # (line_no, message)
    warn = []

    for i, line in enumerate(lines, 1):
        low = line.lower()
        if EM_DASH in line:
            hard.append((i, f"em-dash found: {line.strip()[:80]}"))
        for phrase in BANNED_PHRASES:
            if phrase in low:
                hard.append((i, f"banned phrase '{phrase}': {line.strip()[:80]}"))
        if NOT_X_ITS_Y.search(line):
            hard.append((i, f"'it's not X, it's Y' construction: {line.strip()[:80]}"))

    # NEPQ close check: look for a question mark in the last 25 non-empty content lines,
    # ignoring an italic *posting notes* / footer block.
    content = [ln.strip() for ln in lines if ln.strip()]
    tail = content[-25:]
    tail = [ln for ln in tail if not ln.startswith("*")]
    if not any("?" in ln for ln in tail):
        warn.append((0, "no question mark near the end — NEPQ close may be missing"))

    return hard, warn


def gather(target):
    if os.path.isfile(target):
        return [target]
    out = []
    for root, _, files in os.walk(target):
        for fn in files:
            if fn.endswith(".md"):
                out.append(os.path.join(root, fn))
    return sorted(out)


def main():
    if len(sys.argv) < 2:
        print("usage: python3 deai_check.py <file-or-dir>")
        sys.exit(2)

    files = gather(sys.argv[1])
    any_hard = False

    for path in files:
        hard, warn = check_file(path)
        if not hard and not warn:
            print(f"PASS  {path}")
            continue
        status = "FAIL" if hard else "WARN"
        if hard:
            any_hard = True
        print(f"{status}  {path}")
        for ln, msg in hard:
            print(f"   line {ln}: {msg}")
        for ln, msg in warn:
            print(f"   warn: {msg}")

    sys.exit(1 if any_hard else 0)


if __name__ == "__main__":
    main()
