#!/usr/bin/env python3
"""Compare two site directories and output a markdown table of changed pages."""

import filecmp
import re
import sys
from pathlib import Path

# Lines matching these patterns are ignored when comparing files
IGNORE_PATTERNS = [
    re.compile(r'googletagmanager\.com/gtag/js'),
    re.compile(r"gtag\('config'"),
    re.compile(r'gcds-date-modified'),
    re.compile(r'^\s*\d{4}-\d{2}-\d{2}\s*$'),
]


def extract_body(html: str) -> str:
    """Extract content between <main> and </main> tags."""
    match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL)
    return match.group(1) if match else html


def normalize_lines(filepath: Path) -> list[str]:
    """Extract body content and return lines with ignored patterns filtered out."""
    content = filepath.read_text(encoding="utf-8")
    body = extract_body(content)
    lines = body.splitlines()
    return [
        line for line in lines
        if line.strip() and not any(p.search(line) for p in IGNORE_PATTERNS)
    ]


def files_differ(file_a: Path, file_b: Path) -> bool:
    """Compare two files, ignoring lines that match IGNORE_PATTERNS."""
    return normalize_lines(file_a) != normalize_lines(file_b)


def to_url(rel_path: str) -> str:
    """Convert a relative file path to a URL-style path."""
    url = rel_path.removesuffix("index.html")
    return url or "/"


def find_html_files(directory: Path) -> set[str]:
    """Return a set of relative paths for all HTML files in a directory."""
    return {
        str(f.relative_to(directory))
        for f in directory.rglob("*.html")
    }


def compare_sites(prod_dir: Path, dev_dir: Path) -> list[tuple[str, str]]:
    """Compare prod and dev directories, returning a sorted list of (url, status) tuples."""
    prod_files = find_html_files(prod_dir)
    dev_files = find_html_files(dev_dir)

    changes = []

    # New pages (in dev but not in prod)
    for rel in sorted(dev_files - prod_files):
        changes.append((to_url(rel), "Added"))

    # Removed pages (in prod but not in dev)
    for rel in sorted(prod_files - dev_files):
        changes.append((to_url(rel), "Removed"))

    # Modified pages (in both but different)
    for rel in sorted(dev_files & prod_files):
        if files_differ(prod_dir / rel, dev_dir / rel):
            changes.append((to_url(rel), "Modified"))

    return sorted(changes, key=lambda x: x[0])


def main():
    if len(sys.argv) < 3:
        print(f"Usage: {sys.argv[0]} <prod-dir> <dev-dir>", file=sys.stderr)
        sys.exit(1)

    prod_dir = Path(sys.argv[1])
    dev_dir = Path(sys.argv[2])

    changes = compare_sites(prod_dir, dev_dir)

    print("## Changed Pages")
    print()

    if not changes:
        print("No pages changed.")
    else:
        print(f"**{len(changes)} page(s) changed:**")
        print()
        print("| Page | Status |")
        print("|------|--------|")
        for url, status in changes:
            print(f"| {url} | {status} |")


if __name__ == "__main__":
    main()
