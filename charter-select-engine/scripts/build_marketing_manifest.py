#!/usr/bin/env python3
"""Build exports/marketing-content.json for the charterselect-crm marketing tab.

The CRM reads this single file from GitHub and has everything it needs to
render every white paper, its spokes, and its distribution timeline. Re-run
this after any content edit:  python3 scripts/build_marketing_manifest.py
"""
import os, glob, csv, json, re, subprocess, datetime

ENGINE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ENGINE_DIR)

REPO = "ronaldterminator641/charterselect-landing"
PILLARS = {
    "pillar-1-governance-legal-shield": "Governance & Legal Shield",
    "pillar-2-operational-continuity": "Operational Continuity",
    "pillar-3-daily-liability-blindspots": "Daily Liability Blindspots",
    "pillar-4-benefits-revolution": "Benefits Revolution",
}

def git(*args, default=""):
    try:
        return subprocess.check_output(["git", *args], text=True).strip()
    except Exception:
        return default

def first_h1(md):
    for line in md.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return ""

def subtitle(md):
    m = re.search(r'^\*(.+?)\*\s*$', md, re.M)
    return m.group(1).strip() if m else ""

# backlog status keyed by slug
status = {}
for line in open("topics-backlog.md"):
    cells = [c.strip() for c in line.split("|")]
    if len(cells) >= 5 and cells[2] and cells[2] not in ("Slug", "---"):
        status[cells[2]] = cells[3]

# discover hubs
hubs = {}
for p in sorted(glob.glob("hub-whitepapers/*/*.md")):
    pillar_dir = p.split("/")[1]
    slug = os.path.basename(p)[:-3]
    hubs[slug] = {"slug": slug, "pillar_dir": pillar_dir, "path": p}

SPOKE_FILES = [
    ("linkedin-newsletter", "newsletter", "LinkedIn personal newsletter"),
    ("company-page-checklist", "checklist", "Company-page checklist / matrix"),
    ("short-form-hooks", "hooks", "Short-form hook posts"),
]

topics = []
for slug, h in sorted(hubs.items(), key=lambda x: (x[1]["pillar_dir"], x[0])):
    hub_md = open(h["path"]).read()
    sdir = f"spokes/{slug}"

    spokes = {}
    for fname, key, label in SPOKE_FILES:
        fp = f"{sdir}/{fname}.md"
        if os.path.exists(fp):
            body = open(fp).read()
            spokes[key] = {
                "label": label, "path": fp,
                "word_count": len(body.split()),
                "content_markdown": body,
            }

    timeline = []
    csvp = f"{sdir}/distribution-schedule.csv"
    if os.path.exists(csvp):
        with open(csvp) as f:
            for row in csv.DictReader(f):
                timeline.append(dict(row))

    topics.append({
        "slug": slug,
        "title": first_h1(hub_md),
        "subtitle": subtitle(hub_md),
        "pillar": PILLARS.get(h["pillar_dir"], h["pillar_dir"]),
        "status": status.get(slug, "unknown"),
        "hub": {
            "path": h["path"],
            "word_count": len(hub_md.split()),
            "content_markdown": hub_md,
        },
        "spokes": spokes,
        "timeline": timeline,
        "campaign_window": (timeline[0]["Date"] + " to " + timeline[-1]["Date"]) if timeline else "",
        "suggested_use": (
            "3-week LinkedIn campaign. Personal newsletter in week 1, company-page "
            "checklist/matrix in week 2, seven short-form hooks filling Mon/Wed/Fri, "
            "closing on the NEPQ question. Put the white-paper link in the first "
            "comment of each post, not the post body."
        ),
    })

manifest = {
    "brand": "Charter Select",
    "purpose": "Source data for the charterselect-crm marketing tab (review, edit, schedule).",
    "model": "hub-and-spoke (GaryVee waterfall)",
    "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
    "source": {
        "repo": REPO,
        "branch": git("rev-parse", "--abbrev-ref", "HEAD", default="main"),
        "commit": git("rev-parse", "--short", "HEAD"),
        "manifest_path": "charter-select-engine/exports/marketing-content.json",
        "note": "Private repo. The CRM must authenticate to GitHub to fetch this file.",
    },
    "topic_count": len(topics),
    "topics": topics,
}

os.makedirs("exports", exist_ok=True)
out = "exports/marketing-content.json"
json.dump(manifest, open(out, "w"), indent=2)
print(f"Wrote {out}: {len(topics)} topics, {os.path.getsize(out)} bytes")
