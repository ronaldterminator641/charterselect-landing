#!/bin/bash
set -e
SITE_DIR="/Users/aaronschwen/claude-cowork/output/charterselect-landing"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

cd "$SITE_DIR"
echo "📦 Committing changes..."
git add -A
git diff --cached --quiet || git commit -m "Update site"
echo "⬆️  Pushing to GitHub (backup)..."
git push origin main
echo "🚀 Deploying to Netlify..."
netlify deploy --prod --dir=.
echo ""
echo "✅ Done! Your site is live at charterselect.com"
echo "Press any key to close..."
read -n 1
