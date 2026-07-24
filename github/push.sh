#!/usr/bin/env bash
#
# Publish the portfolio to GitHub.
# Prereq: gh CLI authenticated  ->  gh auth login
# Usage:  bash github/push.sh [repo-name]   (default: rishi-portfolio)
#
set -euo pipefail

REPO_NAME="${1:-rishi-portfolio}"

# Run from the project root (this script lives in ./github/).
cd "$(dirname "$0")/.."

echo "▸ Checking GitHub CLI auth…"
if ! command -v gh >/dev/null 2>&1; then
  echo "✗ GitHub CLI (gh) is not installed. Install it: https://cli.github.com" >&2
  exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
  echo "✗ You're not logged in. Run:  gh auth login" >&2
  exit 1
fi

echo "▸ Staging & committing…"
git add -A
git commit -m "feat: portfolio, case studies, Figma kit and CV" || echo "  (nothing new to commit)"

if git remote get-url origin >/dev/null 2>&1; then
  echo "▸ 'origin' already exists — pushing…"
  git push -u origin HEAD
else
  echo "▸ Creating public repo '$REPO_NAME' and pushing…"
  gh repo create "$REPO_NAME" \
    --public \
    --source=. \
    --remote=origin \
    --push \
    --description "UI/UX developer portfolio — Rishi Chauhan"
fi

URL="$(gh repo view --json url -q .url 2>/dev/null || true)"
echo ""
echo "✓ Done. ${URL:+Repo: $URL}"
echo "  Next: import it at https://vercel.com/new to go live."
