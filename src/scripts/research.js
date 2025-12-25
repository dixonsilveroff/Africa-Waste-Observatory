// ========================================
// Research Page Script
// ========================================

import { initNavigation } from './modules/navigation.js';
import { loadResearch } from './modules/data-loader.js';

async function init() {
  try {
    initNavigation();
    
    const researchList = document.getElementById('research-list');
    const topicFilter = document.getElementById('topic-filter');
    const countryFilter = document.getElementById('country-filter');
    const yearFilter = document.getElementById('year-filter');
    
    // Initial load
    if (researchList) {
      await loadResearch(researchList);
    }
    
    // Setup filter listeners
    const applyFilters = async () => {
      const filters = {
        topic: topicFilter?.value || 'all',
        country: countryFilter?.value || 'all',
        year: yearFilter?.value || 'all'
      };
      
      await loadResearch(researchList, filters);
    };
    
    topicFilter?.addEventListener('change', applyFilters);
    countryFilter?.addEventListener('change', applyFilters);
    yearFilter?.addEventListener('change', applyFilters);
    
    console.log('Research page initialized');
  } catch (error) {
    console.error('Error initializing research page:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
