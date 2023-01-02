import { MovieList } from 'components';
import { useQueries } from 'react-query';

function HomePage() {
  const [actionsMovie, comedyMovie, mysteryMovie] = useQueries([
    { queryKey: ['actionsMovie'] },
    { queryKey: ['comedyMovie'] },
    { queryKey: ['mysteryMovie'] },
  ]);

  if (actionsMovie.isLoading || comedyMovie.isLoading || mysteryMovie.isLoading)
    return <div>Loading...</div>;

  return (
    <div>
      <MovieList title='Top Action Movies 2022' list={actionsMovie.data} />
      <MovieList title='Top Comedy Movies 2022' list={comedyMovie.data} />
      <MovieList title='Top Mystery Movies 2022' list={mysteryMovie.data} />
    </div>
  );
}

export default HomePage;
