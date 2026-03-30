import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

describe('home page', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Prompt-Based Image Editing')).toBeInTheDocument();
  });

  it('renders the generate button', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /generate edit/i })).toBeInTheDocument();
  });

  it('renders the upload dropzone', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /upload image/i })).toBeInTheDocument();
  });

  it('renders the prompt editor', () => {
    render(<HomePage />);
    expect(screen.getByLabelText(/edit prompt/i)).toBeInTheDocument();
  });

  it('renders the rights notice', () => {
    render(<HomePage />);
    expect(screen.getByText(/only upload images you have rights/i)).toBeInTheDocument();
  });

  it('disables generate button when no image uploaded', () => {
    render(<HomePage />);
    const button = screen.getByRole('button', { name: /generate edit/i });
    expect(button).toBeDisabled();
  });

  it('shows step labels', () => {
    render(<HomePage />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders strength controls', () => {
    render(<HomePage />);
    expect(screen.getByText('Subtle')).toBeInTheDocument();
    expect(screen.getByText('Balanced')).toBeInTheDocument();
    expect(screen.getByText('Strong')).toBeInTheDocument();
  });
});
