#!/usr/bin/env python3
"""Compare two site directories and output a markdown table of changed pages."""

import filecmp
import sys
from pathlib import Path


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
        if not filecmp.cmp(prod_dir / rel, dev_dir / rel, shallow=False):
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
