#!/usr/bin/env python3
"""
build_schedule_csv.py — turn a short-form-hooks.md file into a scheduler-ready CSV
with a Mon/Wed/Fri omnipresence cadence.

Usage:
    python3 scripts/build_schedule_csv.py spokes/<slug>/short-form-hooks.md
    python3 scripts/build_schedule_csv.py <hooks.md> --start 2026-06-22 --time "08:00 CT" \
        --platform "LinkedIn (Personal)" --link "[HUB_URL]"

Writes distribution-schedule.csv next to the hooks file. Add the newsletter and
company-checklist rows by hand (they aren't hooks). The column schema is a generic
one that imports into most schedulers with light column mapping; remap headers to
your specific tool (Metricool, etc.) before upload.
"""

import sys
import os
import csv
import re
import argparse
from datetime import date, datetime, timedelta

COLUMNS = ["Date", "Time", "Platform", "Asset_Type", "Post_Text", "Link", "Notes"]


def next_monday(d=None):
    d = d or date.today()
    return d + timedelta(days=(7 - d.weekday()) % 7 or 7)


def parse_hooks(path):
    """Return a list of hook text strings, stripping a trailing bare [LINK] token."""
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    blocks = re.split(r"\*\*Hook\s*\d+\*\*", text)[1:]  # drop preamble
    hooks = []
    for b in blocks:
        # stop at the section divider
        b = b.split("---")[0]
        lines = [ln.strip() for ln in b.splitlines() if ln.strip()]
        # drop a trailing line that is only the link token
        lines = [ln for ln in lines if ln not in ("[LINK]", "[HUB_URL]", "[LINK TO WHITE PAPER]")]
        if lines:
            hooks.append(" ".join(lines))
    return hooks


def mwf_dates(start, count):
    """Yield Mon/Wed/Fri dates starting on `start`."""
    out, d = [], start
    # normalize to the cadence: Mon=0, Wed=2, Fri=4
    targets = {0, 2, 4}
    while len(out) < count:
        if d.weekday() in targets:
            out.append(d)
        d += timedelta(days=1)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("hooks_file")
    ap.add_argument("--start", default=None, help="YYYY-MM-DD; defaults to next Monday")
    ap.add_argument("--time", default="08:00 CT")
    ap.add_argument("--platform", default="LinkedIn (Personal)")
    ap.add_argument("--link", default="[HUB_URL]")
    args = ap.parse_args()

    start = datetime.strptime(args.start, "%Y-%m-%d").date() if args.start else next_monday()
    hooks = parse_hooks(args.hooks_file)
    if not hooks:
        print(f"No hooks found in {args.hooks_file}")
        sys.exit(1)

    dates = mwf_dates(start, len(hooks))
    out_path = os.path.join(os.path.dirname(args.hooks_file) or ".", "distribution-schedule.csv")

    with open(out_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(COLUMNS)
        for d, hook in zip(dates, hooks):
            note = "Link in first comment recommended" if "LinkedIn" in args.platform else ""
            w.writerow([d.isoformat(), args.time, args.platform, "Short hook", hook, args.link, note])

    print(f"Wrote {len(hooks)} hook rows to {out_path}")
    print("Add newsletter + company-checklist rows manually, then remap headers to your scheduler.")


if __name__ == "__main__":
    main()
