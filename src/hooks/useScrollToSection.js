import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 * @param {string} sectionId - The ID of the section to scroll to
 * @returns {Function} - Function to trigger scroll
 */
export const useScrollToSection = (sectionId) => {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [sectionId]);

  return scrollToSection;
};

/**
 * Custom hook for handling navigation clicks
 * @returns {Function} - Function to handle navigation
 */
export const useNavigation = () => {
  const handleNavigation = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return handleNavigation;
};
