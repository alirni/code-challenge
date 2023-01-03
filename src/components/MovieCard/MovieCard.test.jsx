import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieCard from '.';

describe('MovieCard Component', () => {
  it('render MovieCard without error', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MovieCard
          movie={{
            title: 'All Quiet on the Western Front 2022',
            poster_path: '/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg',
          }}
        />
      </QueryClientProvider>
    );
    expect(container).not.toBeNull();
  });

  it('render MovieCard and check title', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MovieCard
          movie={{
            title: 'All Quiet on the Western Front 2022',
            poster_path: '/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg',
          }}
        />
      </QueryClientProvider>
    );

    expect(screen.getByText('All Quiet on the Western Front 2022')).toBeInTheDocument();
  });
});
