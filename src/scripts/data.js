// ========================================
// Data Page Script
// ========================================

import { initNavigation } from '/src/scripts/modules/navigation.js';
import { loadDatasets } from '/src/scripts/modules/data-loader.js';

async function init() {
  try {
    initNavigation();
    
    // Load datasets
    const datasetsElement = document.getElementById('datasets-list');
    if (datasetsElement) {
      await loadDatasets(datasetsElement);
    }
    
    // Load data overview
    const overviewElement = document.getElementById('data-overview');
    if (overviewElement) {
      overviewElement.innerHTML = `
        <div class="card">
          <h3>Available Data</h3>
          <p>Comprehensive datasets on waste management across Africa.</p>
        </div>
        <div class="card">
          <h3>Open Access</h3>
          <p>All data is freely available for research and educational purposes.</p>
        </div>
        <div class="card">
          <h3>Regular Updates</h3>
          <p>Data is updated quarterly with new information.</p>
        </div>
      `;
    }
    
    console.log('Data page initialized');
  } catch (error) {
    console.error('Error initializing data page:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
