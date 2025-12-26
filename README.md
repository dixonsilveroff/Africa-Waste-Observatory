# Africa Waste Observatory

A production-ready, static-first, content-heavy academic website focused on waste management research and data across Africa.

## 🌍 Overview

The Africa Waste Observatory is a comprehensive platform providing accessible, authoritative information on waste management practices, research findings, and data to support sustainable development goals across the African continent.

## ✨ Features

- **Static-First Architecture**: Fast, secure, and easily deployable
- **Semantic HTML5**: Accessible and SEO-optimized markup
- **Modular CSS**: Organized with CSS custom properties and component-based structure
- **ES6 Modules**: Clean, maintainable vanilla JavaScript
- **Content Decoupling**: Markdown and JSON-based content management
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **Performance**: Optimized for Core Web Vitals

## 📁 Project Structure

```
Africa-Waste-Observatory/
├── src/
│   ├── index.html              # Home page
│   ├── about/                  # About page
│   ├── research/               # Research publications
│   ├── data/                   # Data and statistics
│   ├── resources/              # Educational resources
│   ├── contact/                # Contact form
│   ├── styles/                 # CSS architecture
│   │   ├── base/               # Variables, reset, typography
│   │   ├── layout/             # Container, header, footer, grid
│   │   ├── components/         # Buttons, forms, cards, navigation
│   │   ├── pages/              # Page-specific styles
│   │   └── utilities/          # Accessibility, spacing, responsive
│   ├── scripts/                # JavaScript modules
│   │   ├── modules/            # Reusable modules
│   │   │   ├── navigation.js   # Navigation functionality
│   │   │   ├── content-loader.js  # Markdown parser
│   │   │   └── data-loader.js  # JSON data handling
│   │   ├── main.js             # Home page script
│   │   ├── about.js            # About page script
│   │   ├── research.js         # Research page script
│   │   ├── data.js             # Data page script
│   │   ├── resources.js        # Resources page script
│   │   └── contact.js          # Contact page script
│   └── content/                # Content files
│       ├── markdown/           # Markdown content
│       └── json/               # JSON data
├── public/                     # Static assets
│   ├── images/                 # Images
│   └── fonts/                  # Web fonts
├── dist/                       # Build output (generated)
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dixonsilveroff/Africa-Waste-Observatory.git
cd Africa-Waste-Observatory
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the optimized production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Content Management

### Adding Markdown Content

Place `.md` files in `src/content/markdown/`. The simple Markdown parser supports:

- Headers (`#`, `##`, `###`)
- Bold (`**text**`)
- Italic (`*text*`)
- Links (`[text](url)`)
- Paragraphs and line breaks

### Adding JSON Data

Store structured data in `src/content/json/`. Current data files:

- `stats.json` - Key statistics for the home page
- `research.json` - Research publications
- `team.json` - Team members
- `datasets.json` - Available datasets
- `resources.json` - Educational resources

## 🎨 Styling

### CSS Architecture

The project uses a modular CSS architecture with:

- **CSS Custom Properties**: All design tokens in `base/variables.css`
- **Component-Based**: Reusable components in `components/`
- **Utility Classes**: Helper classes in `utilities/`
- **No CSS Frameworks**: Pure CSS3 for full control

### Customization

Modify design tokens in `src/styles/base/variables.css`:

```css
:root {
  --color-primary: #2d6a4f;
  --font-family-base: -apple-system, BlinkMacSystemFont, ...;
  --spacing-md: 1rem;
  /* ... */
}
```

## ♿ Accessibility

The site is built with accessibility as a priority:

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip links for screen readers
- Focus indicators
- Color contrast compliance
- Reduced motion support

## 🔍 SEO

SEO optimizations include:

- Meta descriptions and keywords
- Open Graph tags
- Twitter Card tags
- Structured data (Schema.org)
- Semantic HTML
- Clean URLs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This platform supports research and sustainable development initiatives across Africa, contributing to SDG 11 (Sustainable Cities and Communities) and SDG 12 (Responsible Consumption and Production).

## 📧 Contact

For questions and collaborations, please visit the [Contact page](src/contact/index.html) or reach out to info@africa-waste-observatory.org