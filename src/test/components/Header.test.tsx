import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../../components/Header.jsx';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Header', () => {
  it('renders the company logo and name', () => {
    render(<Header />);
    expect(screen.getByText('HatchPoint Solutions')).toBeInTheDocument();
    expect(screen.getByText('HP')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Vision')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);
    const serviceLink = screen.getByLabelText('Navigate to Services section');
    expect(serviceLink).toBeInTheDocument();
    expect(serviceLink).toHaveAttribute('href', '#services');
  });
});
