/**
 * Utility functions for accessibility improvements
 */

/**
 * Generate unique IDs for accessibility
 * @param {string} prefix - Prefix for the ID
 * @returns {string} - Unique ID
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} - Whether reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get focusable elements within a container
 * @param {HTMLElement} container - Container element
 * @returns {Array} - Array of focusable elements
 */
export const getFocusableElements = (container) => {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors));
};

/**
 * Trap focus within a container
 * @param {HTMLElement} container - Container element
 * @param {KeyboardEvent} event - Keyboard event
 */
export const trapFocus = (container, event) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }
};

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 * @param {string} priority - Priority level ('polite' or 'assertive')
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Validate ARIA attributes
 * @param {HTMLElement} element - Element to validate
 * @returns {Array} - Array of validation errors
 */
export const validateARIA = (element) => {
  const errors = [];

  // Check for required ARIA attributes
  if (element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
    // aria-label is present, which is good
  } else if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
    if (element.tagName === 'BUTTON' && !element.textContent.trim()) {
      errors.push('Button without text content should have aria-label');
    }
  }

  // Check for invalid ARIA states
  const ariaExpanded = element.getAttribute('aria-expanded');
  if (ariaExpanded && !['true', 'false'].includes(ariaExpanded)) {
    errors.push('aria-expanded should be "true" or "false"');
  }

  return errors;
};
