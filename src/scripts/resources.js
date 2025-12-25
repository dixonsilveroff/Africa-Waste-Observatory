// ========================================
// Resources Page Script
// ========================================

import { initNavigation } from './modules/navigation.js';
import { loadResources } from './modules/data-loader.js';

async function init() {
  try {
    initNavigation();
    
    // Load guides
    const guidesElement = document.getElementById('guides-list');
    if (guidesElement) {
      await loadResources(guidesElement, 'guide');
    }
    
    // Load tools
    const toolsElement = document.getElementById('tools-list');
    if (toolsElement) {
      await loadResources(toolsElement, 'tool');
    }
    
    // Load external links
    const linksElement = document.getElementById('external-links');
    if (linksElement) {
      await loadResources(linksElement, 'external');
    }
    
    console.log('Resources page initialized');
  } catch (error) {
    console.error('Error initializing resources page:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
