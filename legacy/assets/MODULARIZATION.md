# Modularization Implementation Guide

## Overview

This document describes the modular architecture implemented for the Africa Waste Observatory website, using template literals for component reusability.

## Architecture

### File Structure

```
Africa-Waste-Observatory/
├── js/
│   ├── components.js       # Header & Footer templates + initialization
│   ├── translations.js     # Multi-language translation system
│   └── main.js            # Page-specific functionality (e.g., carousel)
├── style.css              # Shared global styles
├── index.html             # Homepage (uses modular components)
└── [other-pages].html     # Additional pages (use same structure)
```

---

## Component Files

### 1. `js/components.js`

**Purpose**: Contains reusable header and footer templates with associated logic.

**Features**:
- Header template with navigation and language selector
- Footer template with contact and reference sections
- Mobile hamburger menu functionality
- Automatic rendering on page load

**Key Functions**:
- `renderComponents()` - Injects header/footer into placeholders
- `initializeHeader()` - Sets up hamburger menu interactions

---

### 2. `js/translations.js`

**Purpose**: Manages multi-language support (English & French).

**Features**:
- Translation data for all UI elements
- Language switching functionality
- LocalStorage persistence for language preference
- `data-i18n` attribute-based translation system

**Supported Languages**:
- English (en)
- French (fr)

**Key Functions**:
- `setLanguage(lang)` - Switches all text to specified language
- `initializeLanguage()` - Loads saved language preference

**How to Add Translations**:
1. Add `data-i18n="key.path"` attribute to HTML elements
2. Add corresponding translation in `translations` object
3. Language will auto-apply on page load

---

### 3. `js/main.js`

**Purpose**: Contains page-specific functionality that doesn't belong in components.

**Current Features**:
- Homepage carousel functionality
- Auto-rotation every 5 seconds
- Manual slide selection via dots

**Usage**: Import only on pages that need specific features.

---

## How to Use

### For Existing Pages (index.html)

The homepage already uses the modular system:

```html
<body>
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Your page content -->
    <main>
        <!-- ... -->
    </main>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Load Scripts -->
    <script src="js/components.js"></script>
    <script src="js/translations.js"></script>
    <script src="js/main.js"></script>
</body>
```

---

### Creating New Pages

#### Step 1: Create HTML File

Use this template for any new page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Africa Waste Observatory</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Page Content -->
    <main>
        <section class="your-section">
            <h1 data-i18n="yourSection.title">Your Title</h1>
            <p data-i18n="yourSection.description">Your description</p>
        </section>
    </main>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Required Scripts -->
    <script src="js/components.js"></script>
    <script src="js/translations.js"></script>
    <!-- Optional: Add page-specific scripts -->
    <script src="js/your-page.js"></script>
</body>
</html>
```

#### Step 2: Add Translations (if needed)

In `js/translations.js`, add your page-specific translations:

```javascript
const translations = {
    en: {
        // ... existing translations
        yourSection: {
            title: "Your English Title",
            description: "Your English description"
        }
    },
    fr: {
        // ... existing translations
        yourSection: {
            title: "Votre Titre Français",
            description: "Votre description française"
        }
    }
};
```

#### Step 3: Add Page-Specific JavaScript (optional)

If your page needs custom functionality, create a new JS file (e.g., `js/your-page.js`):

```javascript
// Page-specific functionality
function initializeYourFeature() {
    // Your code here
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeYourFeature);
} else {
    initializeYourFeature();
}
```

---

## Modifying Components

### Updating Header Navigation

Edit the `headerTemplate` in `js/components.js`:

```javascript
const headerTemplate = `
<header>
    <div class="header-container">
        <a href="index.html" class="logo">...</a>
        <nav id="nav-menu">
            <a href="new-page.html" data-i18n="nav.newPage">New Page</a>
            <!-- Add more links -->
        </nav>
    </div>
</header>
`;
```

Don't forget to add translations in `js/translations.js`:

```javascript
nav: {
    newPage: "New Page"  // English
}
```

### Updating Footer

Edit the `footerTemplate` in `js/components.js`:

```javascript
const footerTemplate = `
<footer>
    <div class="footer-container">
        <!-- Modify footer content -->
    </div>
</footer>
`;
```

---

## Benefits

✅ **DRY Principle**: Update header/footer once, reflects across all pages  
✅ **No Flash of Unstyled Content**: Components render immediately  
✅ **Easy Maintenance**: Centralized component logic  
✅ **Consistent UX**: Same navigation and footer everywhere  
✅ **Multi-language Support**: Built-in translation system  
✅ **Clean HTML**: Pages remain focused on content  
✅ **Scalable**: Easy to add new pages  

---

## Best Practices

1. **Always use placeholders**: Include `<div id="header-placeholder"></div>` and `<div id="footer-placeholder"></div>` on every page

2. **Load scripts in order**:
   ```html
   <script src="js/components.js"></script>      <!-- First: renders header/footer -->
   <script src="js/translations.js"></script>    <!-- Second: enables language switching -->
   <script src="js/main.js"></script>            <!-- Last: page-specific features -->
   ```

3. **Use `data-i18n` attributes**: For all translatable text

4. **Keep page-specific code separate**: Create individual JS files for page-specific features (don't bloat `main.js`)

5. **Test on page creation**: Ensure header/footer render correctly and language switching works

6. **Update navigation links**: When adding new pages, update the header template and add translations

---

## Troubleshooting

### Header/Footer Not Appearing

**Problem**: Placeholders are empty  
**Solution**: 
- Ensure `js/components.js` is loaded first
- Check browser console for errors
- Verify placeholder IDs are correct: `header-placeholder` and `footer-placeholder`

### Language Not Switching

**Problem**: Text doesn't change when selecting language  
**Solution**:
- Ensure `data-i18n` attributes are present on elements
- Check that translation keys exist in `translations` object
- Verify `js/translations.js` is loaded after `js/components.js`

### Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open  
**Solution**:
- Ensure `js/components.js` is loaded
- Check that `initializeHeader()` is being called
- Verify hamburger button and nav menu have correct IDs

---

## Extending the System

### Adding New Languages

In `js/translations.js`, add a new language object:

```javascript
const translations = {
    en: { /* ... */ },
    fr: { /* ... */ },
    sw: {  // Swahili example
        nav: {
            home: "Nyumbani",
            about: "Kuhusu",
            // ... more translations
        }
    }
};
```

Update language selector in `js/components.js`:

```javascript
<select class="language-selector" id="language-selector">
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="sw">Swahili</option>
</select>
```

### Adding Global Components

To add new reusable components (e.g., breadcrumbs, sidebar):

1. Create a template in `js/components.js`
2. Add rendering logic to `renderComponents()`
3. Add placeholder div in HTML pages
4. Add corresponding translations if needed

---

## Version History

- **v1.0** (January 16, 2026) - Initial modularization implementation
  - Created components.js for header/footer
  - Extracted translations to separate file
  - Separated page-specific logic to main.js

---

## Contact

For questions or improvements, contact the development team at africawasteobservatory@gmail.com
