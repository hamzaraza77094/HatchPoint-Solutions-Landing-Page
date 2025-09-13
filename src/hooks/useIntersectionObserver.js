import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer functionality
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} - [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

/**
 * Custom hook for scroll-based animations
 * @param {Object} options - Animation options
 * @returns {Object} - Animation state and refs
 */
export const useScrollAnimation = (options = {}) => {
  const [ref, isIntersecting] = useIntersectionObserver(options);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  return {
    ref,
    isIntersecting,
    hasAnimated,
  };
};
