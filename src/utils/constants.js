// Animation constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  MEDIUM: 0.5,
  SLOW: 0.8,
};

export const ANIMATION_DELAY = {
  NONE: 0,
  SMALL: 0.1,
  MEDIUM: 0.2,
  LARGE: 0.4,
};

// Layout constants
export const CONTAINER_MAX_WIDTH = 'max-w-7xl';
export const CONTAINER_PADDING = 'px-6 lg:px-8';

// Color schemes
export const COLOR_SCHEMES = {
  PRIMARY: {
    gradient: 'from-purple-400 to-pink-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
  },
  SECONDARY: {
    gradient: 'from-blue-400 to-cyan-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
  },
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};

// Z-index values
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'vision', label: 'Vision', href: '#vision' },
  { id: 'community', label: 'Community', href: '#audience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Footer links
export const FOOTER_LINKS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'vision', label: 'Vision', href: '#vision' },
  { id: 'community', label: 'Community', href: '#audience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
