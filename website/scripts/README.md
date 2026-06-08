# Scripts

## generate-new-pages

Use the `generate-new-pages` script to create new EN and FR pages that connect to a GC Articles (CMS) entry.

### Usage

Run from the `website/` directory:

```bash
node scripts/generate-new-pages.js \
  --en-title "Your page title" \
  --fr-title "Titre de votre page" \
  --en-parent "parentKeyEN" \
  --fr-parent "parentKeyFR" \
  --en-slug "your-page-slug" \
  --fr-slug "votre-slug-de-page" \
  --en-dir "src/en/users/your-folder" \
  --fr-dir "src/fr/utilisateurs/votre-dossier"
```

### Arguments

| Argument | Description |
|---|---|
| `--en-title` | English page title (also used as `eleventyNavigation.title`) |
| `--fr-title` | French page title (also used as `eleventyNavigation.title`) |
| `--en-parent` | `eleventyNavigation.parent` key for the EN page |
| `--fr-parent` | `eleventyNavigation.parent` key for the FR page |
| `--en-slug` | Filename and `articles_en` key for the EN page (kebab-case) |
| `--fr-slug` | Filename and `articles_fr` key for the FR page (kebab-case) |
| `--en-dir` | Output directory for the EN file (created if it doesn't exist) |
| `--fr-dir` | Output directory for the FR file (created if it doesn't exist) |

### Auto-generated values

| Field | Rule | Example |
|---|---|---|
| `translationKey` | EN slug stripped of `-` | `forgotyouremail` |
| EN `eleventyNavigation.key` | camelCase(EN slug) + `En` | `forgotYourEmailEn` |
| FR `eleventyNavigation.key` | camelCase(EN slug) + `FR` | `forgotYourEmailFR` |

The script will error and exit without creating any files if either output file already exists.

---

## gen-component-page

Use the `gen-component-page` script to scaffold a new design system component page (EN + FR).

### Usage

Run from the `website/` directory and follow the interactive prompts:

```bash
node scripts/gen-component-page.js
```

You will be prompted for:
- **English name** — the component's English display name
- **French name** — the component's French display name
- **Component name** — the tag name (e.g. `gcds-component-name`)
