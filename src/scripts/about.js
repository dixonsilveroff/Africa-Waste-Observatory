// ========================================
// About Page Script
// ========================================

import { initNavigation } from '/src/scripts/modules/navigation.js';
import { loadMarkdown } from '/src/scripts/modules/content-loader.js';
import { loadTeam } from '/src/scripts/modules/data-loader.js';

async function init() {
  try {
    initNavigation();
    
    // Load about content
    const aboutElement = document.getElementById('about-content');
    if (aboutElement) {
      await loadMarkdown('/src/content/markdown/about.md', aboutElement);
    }
    
    // Load team
    const teamElement = document.getElementById('team-grid');
    if (teamElement) {
      await loadTeam(teamElement);
    }
    
    // Load partners (mock data for now)
    const partnersElement = document.getElementById('partners-list');
    if (partnersElement) {
      partnersElement.innerHTML = `
        <div class="partner-item">
          <h4>Partner Organizations</h4>
          <p>Content loading from JSON...</p>
        </div>
      `;
    }
    
    console.log('About page initialized');
  } catch (error) {
    console.error('Error initializing about page:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
