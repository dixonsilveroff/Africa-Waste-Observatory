// ========================================
// Navigation Module
// ========================================

/**
 * Initialize navigation functionality
 */
export function initNavigation() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  
  if (mobileMenuToggle && mainNavigation) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNavigation.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = mobileMenuToggle.contains(event.target) || 
                           mainNavigation.contains(event.target);
      
      if (!isClickInside && mainNavigation.classList.contains('active')) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mainNavigation.classList.remove('active');
      }
    });
    
    // Close mobile menu on window resize if viewport is large
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mainNavigation.classList.contains('active')) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mainNavigation.classList.remove('active');
      }
    });
  }
}

/**
 * Smooth scroll to anchor links
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update focus for accessibility
        target.focus({ preventScroll: true });
      }
    });
  });
}
