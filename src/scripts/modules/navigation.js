// ========================================
// Navigation Module
// ========================================

/**
 * Initialize navigation functionality
 */
export function initNavigation() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  if (mobileMenuToggle && mainNavigation) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMobileMenu();
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeMobileMenu();
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = mobileMenuToggle.contains(event.target) || 
                           mainNavigation.contains(event.target);
      
      if (!isClickInside && mainNavigation.classList.contains('active')) {
        closeMobileMenu();
      }
    });
    
    // Handle escape key to close menu
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNavigation.classList.contains('active')) {
        closeMobileMenu();
        mobileMenuToggle.focus();
      }
    });
    
    // Close mobile menu on window resize if viewport is large
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && mainNavigation.classList.contains('active')) {
          closeMobileMenu();
        }
      }, 250);
    });
    
    // Trap focus within mobile menu when open
    if (window.innerWidth <= 768) {
      trapFocus(mainNavigation, mobileMenuToggle);
    }
  }
  
  /**
   * Toggle mobile menu open/close
   */
  function toggleMobileMenu() {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }
  
  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    mainNavigation.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    
    // Focus first link for accessibility
    const firstLink = mainNavigation.querySelector('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 300);
    }
  }
  
  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mainNavigation.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }
  
  /**
   * Trap focus within an element
   */
  function trapFocus(element, triggerButton) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          triggerButton.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          triggerButton.focus();
        }
      }
    });
    
    triggerButton.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && !event.shiftKey && element.classList.contains('active')) {
        event.preventDefault();
        firstFocusable.focus();
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
        
        // Get header height for offset
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update focus for accessibility
        setTimeout(() => {
          target.focus({ preventScroll: true });
          if (document.activeElement !== target) {
            target.setAttribute('tabindex', '-1');
            target.focus();
          }
        }, 500);
      }
    });
  });
}
