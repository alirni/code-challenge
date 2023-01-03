import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Component', () => {
  it('render Header without error', () => {
    const { container } = render(<Header />);
    expect(container).not.toBeNull();
  });

  it('render Header and check content', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Wishlist')).toBeInTheDocument();
  });
});
