// ========================================
// Content Loader Module
// Handles loading Markdown and converting to HTML
// ========================================

/**
 * Simple Markdown parser (basic implementation)
 * For production, consider using a library like marked.js
 */
function parseMarkdown(markdown) {
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
  
  // Line breaks and paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  html = '<p>' + html + '</p>';
  
  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p><br>/g, '<p>');
  
  return html;
}

/**
 * Load markdown file and render to element
 * @param {string} url - Path to markdown file
 * @param {HTMLElement} targetElement - Element to render content into
 */
export async function loadMarkdown(url, targetElement) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    
    const markdown = await response.text();
    const html = parseMarkdown(markdown);
    
    targetElement.innerHTML = html;
  } catch (error) {
    console.error('Error loading markdown:', error);
    targetElement.innerHTML = '<p class="error">Content could not be loaded at this time.</p>';
  }
}

/**
 * Load multiple markdown files
 * @param {Array<{url: string, selector: string}>} files - Array of file configurations
 */
export async function loadMultipleMarkdown(files) {
  const promises = files.map(async ({ url, selector }) => {
    const element = document.querySelector(selector);
    if (element) {
      await loadMarkdown(url, element);
    }
  });
  
  await Promise.all(promises);
}
