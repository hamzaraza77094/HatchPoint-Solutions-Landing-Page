// Service types
export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

// Target audience types
export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  description: string;
  features: string[];
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// Animation types
export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
}

// Component props types
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  'aria-label'?: string;
}

// Hook types
export interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

// Theme types
export interface ColorScheme {
  gradient: string;
  bg: string;
  border: string;
  text: string;
}

// Constants types
export interface Breakpoints {
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  '2XL': string;
}

export interface ZIndex {
  DROPDOWN: number;
  STICKY: number;
  FIXED: number;
  MODAL_BACKDROP: number;
  MODAL: number;
  POPOVER: number;
  TOOLTIP: number;
}
