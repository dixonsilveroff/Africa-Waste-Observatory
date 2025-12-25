# Development Guide

## Architecture Overview

### Static-First Approach

This project follows a static-first architecture where:
- HTML pages are pre-structured
- Content is loaded dynamically from Markdown/JSON
- JavaScript enhances but doesn't control core functionality
- Works without JavaScript (progressive enhancement)

### Module System

JavaScript uses ES6 modules for clean code organization:

```javascript
// Import a module
import { initNavigation } from './modules/navigation.js';

// Use the module
initNavigation();
```

### Content Loading

Content is decoupled from layout:

1. **Markdown files**: Long-form content (about, guides)
2. **JSON files**: Structured data (research, team, datasets)

## Adding New Pages

1. Create HTML file in appropriate directory
2. Add semantic structure with proper ARIA labels
3. Create corresponding JS file for page logic
4. Link CSS and JS in HTML
5. Update navigation in all pages

## Code Style

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Add meta tags for SEO
- Use kebab-case for IDs and classes

### CSS
- Follow BEM-like naming conventions
- Use CSS custom properties for theming
- Mobile-first responsive design
- Group related properties

### JavaScript
- Use ES6+ features
- Write pure functions
- Handle errors gracefully
- Comment complex logic
- Use async/await for promises

## Performance Tips

- Lazy load images
- Minimize JavaScript execution
- Use CSS for animations
- Optimize assets before deployment
- Enable compression in production

## Testing

### Manual Testing Checklist

- [ ] All links work correctly
- [ ] Navigation works on mobile
- [ ] Forms validate properly
- [ ] Content loads successfully
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Works without JavaScript
- [ ] Performance metrics pass

### Browser Testing

Test in:
- Chrome (desktop & mobile)
- Firefox
- Safari (desktop & iOS)
- Edge

## Deployment

### Build Process

```bash
npm run build
```

This creates optimized files in `dist/` directory.

### Hosting Options

The static build can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Environment Variables

For production, consider:
- API endpoints (if added)
- Analytics IDs
- Contact form endpoints

## Troubleshooting

### Vite not starting
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Check port 3000 is available

### Content not loading
- Verify file paths are correct
- Check browser console for errors
- Ensure JSON is valid

### Styles not applying
- Check import order in main.css
- Verify CSS file paths
- Clear browser cache

## Future Enhancements

Potential additions:
- Search functionality
- Data visualizations with Chart.js
- Blog/news section
- Multi-language support
- PDF generation
- Advanced filtering
- User comments
