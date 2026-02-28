# Africa Waste Observatory - Contribution Guidelines

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Repository Structure](#repository-structure)
4. [Getting Started](#getting-started)
5. [Git Workflow and Version Control](#git-workflow-and-version-control)
6. [Coding Standards](#coding-standards)
7. [Content Development Standards](#content-development-standards)
8. [Internationalization (i18n)](#internationalization-i18n)
9. [Component Architecture](#component-architecture)
10. [Styling Guidelines](#styling-guidelines)
11. [Adding a New Page](#adding-a-new-page)
12. [Adding or Updating Country Profiles](#adding-or-updating-country-profiles)
13. [Image and Asset Guidelines](#image-and-asset-guidelines)
14. [Review and Approval Process](#review-and-approval-process)
15. [Communication and Coordination](#communication-and-coordination)

---

## Project Overview

The **Africa Waste Observatory** is a web-based platform that provides structured, credible, and accessible information on solid waste management systems, technologies, policies, and practices across selected African countries (Nigeria, Egypt, Kenya, Rwanda, and South Africa).

The project emphasizes **technical communication, information organization, collaborative documentation, and professional presentation** using practical web development skills.

---

## Technology Stack

| Tool | Purpose |
|------|---------|
| **HTML** | Page structure and content |
| **CSS** | Global styling (single shared `style.css`) |
| **JavaScript** | Interactivity, components, translations |
| **Google Fonts (Inter)** | Typography |
| **Lucide Icons** | Iconography (`js/lucide.min.js`) |
| **Google Analytics** | Site analytics (gtag `G-QVHZ3Q6F0J`) |
| **Git / GitHub** | Version control and collaboration |
| **VS Code** | Recommended IDE |
| **Google Docs** | Content drafting before implementation |
| **APA / Harvard** | Referencing style for all citations |

---

## Repository Structure

```
Africa-Waste-Observatory/
├── index.html                  # Homepage (hero, waste challenge, objectives)
├── style.css                   # Global stylesheet (single file for all pages)
├── privacy.html                # Privacy policy page
├── robots.txt                  # Search engine crawling rules
├── sitemap.xml                 # Site map for SEO
│
├── about/
│   ├── index.html              # About page
│   └── translations.js         # About page translations (en/fr)
│
├── country-profiles/
│   ├── index.html              # Country profiles page (Nigeria, Egypt, Kenya, Rwanda, South Africa)
│   └── translations.js         # Country profiles translations (en/fr)
│
├── waste-streams/
│   ├── index.html              # Waste streams page
│   └── translations.js         # Waste streams translations (en/fr)
│
├── innovations/
│   ├── index.html              # Technologies & innovations page
│   └── translations.js         # Innovations translations (en/fr)
│
├── policies/
│   ├── index.html              # Policies & regulations page
│   └── translations.js         # Policies translations (en/fr)
│
├── references/
│   ├── index.html              # References and data sources page
│   └── translations.js         # References translations (en/fr)
│
├── js/
│   ├── components.js           # Shared header & footer templates + initialization
│   ├── translations.js         # Global translations (nav, hero, footer, etc.)
│   ├── main.js                 # Page-specific JS (e.g., homepage carousel)
│   └── lucide.min.js           # Lucide icon library
│
├── assets/
│   ├── images/
│   │   ├── carousel/           # Homepage carousel background images (.webp)
│   │   ├── flags/              # Country flag images
│   │   └── logo.png            # Site logo
│   └── *.md                    # Internal documentation (design system, outlines, etc.)
│
├── CONTRIBUTION.md             # This file
├── README.md                   # Project documentation
└── LICENSE                     # License file
```

---

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/) installed on your machine
- A code editor (VS Code recommended)
- A modern web browser (Chrome, Firefox, Edge)
- Basic familiarity with HTML, CSS, and JavaScript

### Clone the Repository

```bash
git clone https://github.com/<org>/Africa-Waste-Observatory.git
cd Africa-Waste-Observatory
```

### Run Locally

The project is a static site with no build step. You can open `index.html` directly in a browser, or use a local server:

```bash
# Using npx serve (Node.js required)
npx serve

# Or using Python
python -m http.server 8000

# Or using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## Git Workflow and Version Control

### Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready code. **Never commit directly to `main`.** |
| `feature/<name>` | New features or sections (e.g., `feature/homepage`, `feature/country-nigeria`) |
| `fix/<name>` | Bug fixes (e.g., `fix/navbar-mobile`) |
| `content/<name>` | Content-only changes (e.g., `content/egypt-waste-data`) |

### Workflow Steps

1. **Create a branch** from `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** in your branch. Commit frequently with clear, descriptive messages:

   ```bash
   git add .
   git commit -m "Add Nigeria country profile page"
   git commit -m "Update CSS styling for header section"
   git commit -m "Add French translations for policies page"
   ```

3. **Push your branch** to the remote repository:

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request (PR)** on GitHub targeting the `main` branch.

5. **Request a review** — at least one peer must review your PR before it can be merged.

6. **Merge** — the Team Lead gives final approval for major merges.

### Commit Message Guidelines

Write commit messages in the **imperative mood** and keep them concise:

```
✅ Good:
  Add waste streams section for Kenya
  Fix mobile navigation toggle bug
  Update French translations for about page

❌ Bad:
  Updated stuff
  changes
  fixed bug
```

### Version Tagging

Milestone releases are tagged for clarity:

| Tag | Description |
|-----|-------------|
| `v1.0` | Initial pages completed |
| `v2.0` | Country Profiles and Waste Streams completed |
| `v3.0` | Full website ready for deployment |

---

## Coding Standards

### General

- Use **2-space indentation** for HTML, CSS, and JavaScript
- Use **UTF-8** encoding for all files
- Keep lines under **120 characters** where reasonable
- Remove trailing whitespace
- End files with a single newline

### HTML

- Use semantic HTML5 elements (`<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`, etc.)
- Include `lang="en"` on the `<html>` element
- Always include `<meta charset="UTF-8">` and `<meta name="viewport" ...>`
- Use placeholder `<div>` elements for shared components:
  ```html
  <div id="header-placeholder"></div>
  <!-- page content -->
  <div id="footer-placeholder"></div>
  ```
- Add `data-i18n` attributes to all user-facing text for translation support:
  ```html
  <h2 data-i18n="section.title">Default English Text</h2>
  ```
- Use `data-country` attributes for country-specific dynamic content
- Comment complex or non-obvious sections:
  ```html
  <!-- Country Snapshot: populated dynamically via translations.js -->
  ```

### CSS

- All styles go in the single global `style.css` file — **do not create page-specific CSS files**
- Use the established CSS custom properties (variables) defined in `:root`:
  ```css
  var(--primary-green)      /* #047E37 */
  var(--secondary-blue)     /* #1D4ED8 */
  var(--accent-yellow)      /* #FDC047 */
  var(--text-dark)          /* #1E293B */
  var(--background-light)   /* #F3FAF7 */
  var(--neutral-light)      /* #E2E8F0 */
  var(--white)              /* #FFFFFF */
  var(--font-family)        /* 'Inter', sans-serif */
  var(--text-muted)         /* #64748B */
  var(--text-muted-light)   /* #94A3B8 */
  ```
- Use descriptive class names (e.g., `.country-profile-header`, `.waste-challenge-container`)
- Group related styles and add section comments:
  ```css
  /* === Country Profiles Page === */
  ```
- Ensure responsive design — test on mobile, tablet, and desktop breakpoints

### JavaScript

- Use `const` and `let` — **never** use `var`
- Use ES6+ features: template literals, arrow functions, destructuring, etc.
- Use strict equality (`===` / `!==`)
- Comment complex logic and non-obvious behavior
- Do **not** add inline `<script>` blocks in HTML files (except for the Google Analytics snippet)
- Page-specific scripts go in the page's own `translations.js` or a dedicated file in `js/`
- Shared logic goes in `js/components.js` or `js/translations.js`

---

## Content Development Standards

### Writing Quality

- Use **clear, concise, and professional** engineering language
- All information must be **accurate** and sourced from **credible references** (academic journals, government reports, UN/World Bank data, etc.)
- Include proper **citations** using APA or Harvard referencing style
- **Plagiarism is strictly prohibited** — all content must be original or properly attributed

### Data and Statistics

- Always cite the source and year for any statistics
- Prefer recent data (within the last 5 years where possible)
- Use consistent units (metric system: tonnes, kg/capita/day, etc.)

### Formatting

- Use consistent heading hierarchy (`h1` → `h2` → `h3` → `h4`)
- Label all tables, figures, diagrams, and images clearly
- Keep paragraphs focused — one key idea per paragraph
- Use bullet points or numbered lists for series of items

---

## Internationalization (i18n)

The site supports **English** and **French** through a translation system.

### How It Works

1. **Global translations** are in `js/translations.js` — covering navigation, hero section, footer, and shared UI text.
2. **Page-specific translations** are in each page's own `translations.js` file (e.g., `about/translations.js`).
3. HTML elements use `data-i18n` attributes that map to translation keys:
   ```html
   <h2 data-i18n="mission.title">Our Mission</h2>
   ```
4. A language selector in the navigation allows users to switch between `en` and `fr`.

### Adding Translations

When adding or updating content:

1. Add the English text as the **default HTML content** (serves as fallback).
2. Add the corresponding key-value pair in the relevant `translations.js` under both `en` and `fr`:
   ```js
   const translations = {
       en: {
           section: {
               title: "Our Mission",
               description: "..."
           }
       },
       fr: {
           section: {
               title: "Notre Mission",
               description: "..."
           }
       }
   };
   ```
3. Use **nested keys** with dot notation in `data-i18n` attributes (e.g., `"section.title"`).

---

## Component Architecture

The site uses a **modular component system** via JavaScript template literals. Shared UI elements (header, footer) are defined once and injected into all pages.

### Shared Components (`js/components.js`)

- **Header**: Navigation bar with links and language selector
- **Footer**: Contact info, references links, copyright

Each page includes placeholder `<div>` elements:

```html
<div id="header-placeholder"></div>
<!-- Page content here -->
<div id="footer-placeholder"></div>
```

Components are rendered automatically by `components.js`, which is loaded on every page.

### Path Handling

`components.js` auto-detects whether the current page is in a subdirectory and adjusts link paths accordingly:

```js
const pathPrefix = isSubdirectory ? "../" : "./";
```

When adding a **new subdirectory page**, add it to the subdirectory detection list in `components.js`:

```js
const isSubdirectory =
  window.location.pathname.includes("/about/") ||
  window.location.pathname.includes("/country-profiles/") ||
  // ... add your new path here
  window.location.pathname.includes("/your-new-section/");
```

### Script Loading Order

Every HTML page should load scripts in this order at the bottom of `<body>`:

```html
<!-- For pages in the root directory -->
<script src="js/components.js"></script>
<script src="js/translations.js"></script>
<script src="js/lucide.min.js"></script>
<script src="js/main.js"></script>

<!-- For pages in subdirectories -->
<script src="../js/components.js"></script>
<script src="../js/translations.js"></script>
<script src="translations.js"></script>       <!-- Page-specific translations -->
<script src="../js/lucide.min.js"></script>
<script src="../js/main.js"></script>
```

---

## Styling Guidelines

Follow the design system documented in `assets/Design System.md`:

### Typography

| Role | Element | Weight |
|------|---------|--------|
| Main Headline | `h1` | Extrabold (800) |
| Section Title | `h2` | Bold (700) |
| Sub-Section | `h3` | Semibold (600) |
| Card Title | `h4` | Medium (500) |
| Body Text | `p` | Normal (400) |
| Caption/Footer | `.caption` | Normal (400) / Light (300) |

### Colors

| Purpose | Variable | Value |
|---------|----------|-------|
| Primary | `--primary-green` | `#047E37` |
| Secondary | `--secondary-blue` | `#1D4ED8` |
| Accent | `--accent-yellow` | `#FDC047` |
| Text | `--text-dark` | `#1E293B` |
| Background | `--background-light` | `#F3FAF7` |
| Neutral | `--neutral-light` | `#E2E8F0` |
| Muted Text | `--text-muted` | `#64748B` |

Always use CSS variables rather than hard-coded color values.

---

## Adding a New Page

To add a new section/page to the site:

1. **Create a subdirectory** with the section name (e.g., `new-section/`).

2. **Create `index.html`** inside it following this template:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Page Title - Africa Waste Observatory</title>
       <meta name="description" content="Brief description for SEO.">
       <link rel="icon" href="../favicon.ico" type="image/x-icon">
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="../style.css">
   </head>
   <body>
       <div id="header-placeholder"></div>

       <main>
           <!-- Your page content here -->
       </main>

       <div id="footer-placeholder"></div>

       <script src="../js/components.js"></script>
       <script src="../js/translations.js"></script>
       <script src="translations.js"></script>
       <script src="../js/lucide.min.js"></script>
       <script src="../js/main.js"></script>
   </body>
   </html>
   ```

3. **Create `translations.js`** in the same directory with English and French keys for all page text.

4. **Update `js/components.js`**:
   - Add the new path to the `isSubdirectory` detection
   - Add a navigation link to `headerTemplate` if the page should appear in the main nav

5. **Update global translations** in `js/translations.js` if you add new nav items or footer links.

6. **Add styles** in `style.css` — group them under a section comment:
   ```css
   /* === New Section Page === */
   ```

7. **Update `sitemap.xml`** and **`robots.txt`** if applicable.

---

## Adding or Updating Country Profiles

Country data is managed through the translation system. Each country profile page dynamically loads content based on the selected country.

### Steps

1. **Add/update country data** in `country-profiles/translations.js` under the appropriate language key.
2. **Add a country flag** image to `assets/images/flags/` (use consistent sizing and naming, e.g., `nigeria.png`).
3. **Add the country to the selector dropdown** in `country-profiles/index.html`:
   ```html
   <option value="country-slug" data-i18n="countries.countryName">Country Name</option>
   ```
4. Ensure corresponding data exists in the translations for **both** `en` and `fr`.

---

## Image and Asset Guidelines

- Store all images in `assets/images/` and organize by type (carousel, flags, etc.)
- Use **WebP format** for carousel and large images for optimal performance
- Use **PNG** for logos and flags where transparency is required
- Use **descriptive file names** (e.g., `nigeria-waste-collection.webp`, not `img1.webp`)
- Always include `alt` text on `<img>` elements for accessibility
- Optimize image file sizes before committing (aim for < 200 KB per image where possible)

---

## Review and Approval Process

1. **Self-review**: Before submitting a PR, review your own changes for errors, formatting issues, and adherence to these guidelines.
2. **Peer review**: At least **one team member** must review and approve your Pull Request.
3. **Team Lead approval**: Major changes and merges to `main` require approval from the Team Lead (**@sen vick**).
4. **Only reviewed and approved content** is merged into the production branch.

### What Reviewers Check

- Code quality and adherence to the coding standards above
- Content accuracy, grammar, and proper citations
- Translation completeness (both `en` and `fr`)
- Responsive design (mobile-friendly)
- No broken links or missing images
- Accessibility (alt text, semantic HTML, sufficient color contrast)

---

## Communication and Coordination

- **Team communication** is conducted via the designated platform (WhatsApp, Teams, or Google Chat)
- **Document all changes clearly** when submitting PRs — describe what changed and why
- **Significant decisions or architectural changes** must be communicated to the Team Lead before implementation
- **Do not overwrite** another team member's work without discussion
- Raise questions or blockers early — don't wait until the last minute

---

## Quick Reference Checklist

Before submitting your Pull Request, confirm:

- [ ] Code follows the coding standards (indentation, naming, variables)
- [ ] All user-facing text has `data-i18n` attributes
- [ ] Translations added for both English and French
- [ ] Styles use CSS variables from `:root` (no hard-coded colors)
- [ ] Images are optimized and have `alt` attributes
- [ ] Page is responsive on mobile, tablet, and desktop
- [ ] No console errors in the browser developer tools
- [ ] Commit messages are clear and descriptive
- [ ] Content is properly cited using APA or Harvard style
- [ ] `sitemap.xml` updated (if new pages were added)
- [ ] PR description clearly explains the changes

---

*Last updated: February 2026*
