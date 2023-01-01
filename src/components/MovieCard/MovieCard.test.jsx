import { render } from '@testing-library/react';

import MovieCard from './index';

describe('MovieCard Component', () => {
  it('render Divider without error', () => {
    const { container } = render(
      <MovieCard
        movie={{
          name: 'All Quiet on the Western Front 2022',
          image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
        }}
      />
    );
    expect(container).not.toBeNull();
  });
});
