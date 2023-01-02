import MoviePage from './MoviePage';

import { getMovieApi } from 'api';
import { dehydrate, QueryClient } from 'react-query';

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movie', id], () => getMovieApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MoviePage;
