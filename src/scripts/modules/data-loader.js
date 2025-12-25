// ========================================
// Data Loader Module
// Handles loading and rendering JSON data
// ========================================

/**
 * Load JSON data from a file
 * @param {string} url - Path to JSON file
 * @returns {Promise<Object>} Parsed JSON data
 */
async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}

/**
 * Load and render statistics
 * @param {HTMLElement} targetElement - Element to render stats into
 */
export async function loadStats(targetElement) {
  try {
    const stats = await fetchJSON('/content/json/stats.json');
    
    const statsHTML = stats.map(stat => `
      <div class="card stat-card">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join('');
    
    targetElement.innerHTML = statsHTML;
  } catch (error) {
    console.error('Error loading stats:', error);
    targetElement.innerHTML = '<p class="error">Statistics could not be loaded.</p>';
  }
}

/**
 * Load and render featured research
 * @param {HTMLElement} targetElement - Element to render research into
 */
export async function loadFeaturedResearch(targetElement) {
  try {
    const research = await fetchJSON('/content/json/research.json');
    const featured = research.filter(item => item.featured).slice(0, 3);
    
    const researchHTML = featured.map(item => `
      <article class="card research-card">
        <header class="card-header">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-meta">
            ${item.authors.join(', ')} • ${item.year}
          </div>
        </header>
        <div class="card-content">
          <p>${item.abstract}</p>
        </div>
        <footer class="card-footer">
          <a href="${item.url}" class="btn btn-link">Read More →</a>
        </footer>
      </article>
    `).join('');
    
    targetElement.innerHTML = researchHTML;
  } catch (error) {
    console.error('Error loading featured research:', error);
    targetElement.innerHTML = '<p class="error">Featured research could not be loaded.</p>';
  }
}

/**
 * Load and render all research with filters
 * @param {HTMLElement} targetElement - Element to render research into
 * @param {Object} filters - Filter criteria
 */
export async function loadResearch(targetElement, filters = {}) {
  try {
    const research = await fetchJSON('/content/json/research.json');
    
    // Apply filters
    let filteredResearch = research;
    
    if (filters.topic && filters.topic !== 'all') {
      filteredResearch = filteredResearch.filter(item => 
        item.topics.includes(filters.topic)
      );
    }
    
    if (filters.country && filters.country !== 'all') {
      filteredResearch = filteredResearch.filter(item => 
        item.countries.includes(filters.country)
      );
    }
    
    if (filters.year && filters.year !== 'all') {
      filteredResearch = filteredResearch.filter(item => 
        item.year === parseInt(filters.year)
      );
    }
    
    const researchHTML = filteredResearch.map(item => `
      <article class="card research-card">
        <header class="card-header">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-meta">
            ${item.authors.join(', ')} • ${item.year}
          </div>
        </header>
        <div class="card-content">
          <p>${item.abstract}</p>
          <div class="topics">
            ${item.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
          </div>
        </div>
        <footer class="card-footer">
          <a href="${item.url}" class="btn btn-link">Read More →</a>
        </footer>
      </article>
    `).join('');
    
    targetElement.innerHTML = researchHTML || '<p>No research found matching the selected filters.</p>';
  } catch (error) {
    console.error('Error loading research:', error);
    targetElement.innerHTML = '<p class="error">Research could not be loaded.</p>';
  }
}

/**
 * Load team members
 * @param {HTMLElement} targetElement - Element to render team into
 */
export async function loadTeam(targetElement) {
  try {
    const team = await fetchJSON('/content/json/team.json');
    
    const teamHTML = team.map(member => `
      <div class="card team-card">
        <img src="${member.photo || '/images/placeholder.jpg'}" alt="${member.name}">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p>${member.bio}</p>
      </div>
    `).join('');
    
    targetElement.innerHTML = teamHTML;
  } catch (error) {
    console.error('Error loading team:', error);
    targetElement.innerHTML = '<p class="error">Team information could not be loaded.</p>';
  }
}

/**
 * Load datasets
 * @param {HTMLElement} targetElement - Element to render datasets into
 */
export async function loadDatasets(targetElement) {
  try {
    const datasets = await fetchJSON('/content/json/datasets.json');
    
    const datasetsHTML = datasets.map(dataset => `
      <div class="dataset-item">
        <div class="dataset-header">
          <h3 class="dataset-title">${dataset.title}</h3>
          <a href="${dataset.downloadUrl}" class="btn btn-primary btn-sm">Download</a>
        </div>
        <div class="dataset-meta">
          ${dataset.format} • ${dataset.size} • Updated: ${dataset.lastUpdated}
        </div>
        <p>${dataset.description}</p>
      </div>
    `).join('');
    
    targetElement.innerHTML = datasetsHTML;
  } catch (error) {
    console.error('Error loading datasets:', error);
    targetElement.innerHTML = '<p class="error">Datasets could not be loaded.</p>';
  }
}

/**
 * Load resources
 * @param {HTMLElement} targetElement - Element to render resources into
 */
export async function loadResources(targetElement, type = 'all') {
  try {
    const resources = await fetchJSON('/content/json/resources.json');
    
    const filteredResources = type === 'all' 
      ? resources 
      : resources.filter(r => r.type === type);
    
    const resourcesHTML = filteredResources.map(resource => `
      <div class="card">
        <h3 class="card-title">${resource.title}</h3>
        <p class="card-content">${resource.description}</p>
        <div class="card-footer">
          <a href="${resource.url}" class="btn btn-link">Access Resource →</a>
        </div>
      </div>
    `).join('');
    
    targetElement.innerHTML = resourcesHTML;
  } catch (error) {
    console.error('Error loading resources:', error);
    targetElement.innerHTML = '<p class="error">Resources could not be loaded.</p>';
  }
}
