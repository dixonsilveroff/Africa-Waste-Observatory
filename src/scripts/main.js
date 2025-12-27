// ========================================
// Main JavaScript Module
// ========================================

import { initNavigation } from '/src/scripts/modules/navigation.js';
import { loadMarkdown } from '/src/scripts/modules/content-loader.js';
import { loadStats, loadFeaturedResearch } from '/src/scripts/modules/data-loader.js';

/**
 * Initialize the application
 */
async function init() {
  try {
    // Initialize navigation
    initNavigation();
    
    // Load home page content
    await loadHomeContent();
    
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

/**
 * Load home page content
 */
async function loadHomeContent() {
  try {
    // Load introduction content from markdown
    const introElement = document.getElementById('intro-content');
    if (introElement) {
      await loadMarkdown('/src/content/markdown/intro.md', introElement);
    }
    
    // Load statistics
    const statsElement = document.getElementById('stats-grid');
    if (statsElement) {
      await loadStats(statsElement);
    }
    
    // Load featured research
    const featuredElement = document.getElementById('featured-research');
    if (featuredElement) {
      await loadFeaturedResearch(featuredElement);
    }
  } catch (error) {
    console.error('Error loading home content:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
