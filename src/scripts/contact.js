// ========================================
// Contact Page Script
// ========================================

import { initNavigation } from './modules/navigation.js';

/**
 * Handle contact form submission
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formStatus = document.getElementById('form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Disable submit button
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    console.log('Form data:', data);
    
    // Show success message
    formStatus.className = 'success';
    formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
    
    // Reset form
    form.reset();
    
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.className = '';
      formStatus.textContent = '';
    }, 5000);
  }, 1000);
}

/**
 * Validate form fields
 */
function validateForm() {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.validity.valid) {
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.setAttribute('aria-invalid', 'false');
      }
    });
    
    input.addEventListener('input', () => {
      if (input.validity.valid) {
        input.setAttribute('aria-invalid', 'false');
      }
    });
  });
}

async function init() {
  try {
    initNavigation();
    
    // Setup contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
      validateForm();
    }
    
    console.log('Contact page initialized');
  } catch (error) {
    console.error('Error initializing contact page:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
