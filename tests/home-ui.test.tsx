import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('home page', () => {
  it('renders generate button', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });
});
