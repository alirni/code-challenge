import { discoverApi } from 'api';
import { MainLayout, MovieList } from 'components';
import { useQueries } from 'react-query';

function HomePage() {
  const [actionsMovie, comedyMovie, mysteryMovie] = useQueries([
    { queryKey: ['actionsMovie'], queryFn: () => discoverApi(28) },
    { queryKey: ['comedyMovie'], queryFn: () => discoverApi(35) },
    { queryKey: ['mysteryMovie'], queryFn: () => discoverApi(9648) },
  ]);

  if (actionsMovie.isLoading || comedyMovie.isLoading || mysteryMovie.isLoading)
    return <div>Loading...</div>;

  return (
    <MainLayout image='/img/back.jpg' title='Home'>
      <MovieList
        className='mb-4'
        title='Top Action Movies 2022'
        list={actionsMovie.data}
        type='primary'
      />
      <MovieList
        className='mb-4'
        title='Top Comedy Movies 2022'
        list={comedyMovie.data}
        type='secondary'
      />
      <MovieList title='Top Mystery Movies 2022' list={mysteryMovie.data} type='important' />
    </MainLayout>
  );
}

export default HomePage;
