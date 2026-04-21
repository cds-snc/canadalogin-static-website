#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <prod-dir> <dev-dir>" >&2
  exit 1
fi

PROD="${1%/}"
DEV="${2%/}"

# Convert a file path to a URL-style path
# e.g. "dev/en/about/index.html" → "/en/about/"
to_url() {
  local rel="${1%index.html}"

  if [ -z "$rel" ]; then
    echo "/"
    return
  fi

  case "$rel" in
    /*) echo "$rel" ;;
    *) echo "/$rel" ;;
  esac
}

# Collect all changes into a temp file for counting and sorting
changes=$(mktemp)
trap 'rm -f "$changes"' EXIT

# Find new and modified pages by comparing dev against prod
find "$DEV" -name "*.html" | sort | while read -r file; do
  rel="${file#"$DEV"}"
  prodfile="${PROD}${rel}"

  if [ ! -f "$prodfile" ]; then
    echo "| $(to_url "$rel") | Added |" >> "$changes"
  elif ! diff -q "$file" "$prodfile" >/dev/null 2>&1; then
    echo "| $(to_url "$rel") | Modified |" >> "$changes"
  fi
done

# Find removed pages (exist in prod but not in dev)
find "$PROD" -name "*.html" | sort | while read -r file; do
  rel="${file#"$PROD"}"
  devfile="${DEV}${rel}"

  if [ ! -f "$devfile" ]; then
    echo "| $(to_url "$rel") | Removed |" >> "$changes"
  fi
done

# Output the report
echo "## Changed Pages"
echo ""

if [ ! -s "$changes" ]; then
  echo "No pages changed."
else
  count=$(wc -l < "$changes")
  echo "**${count} page(s) changed:**"
  echo ""
  echo "| Page | Status |"
  echo "|------|--------|"
  sort "$changes"
fi