import HomePage from './HomePage';

import { getGenreApi, discoverApi, configurationApi } from 'api';
import { dehydrate, QueryClient } from 'react-query';

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['config'], () => configurationApi());

  await queryClient.prefetchQuery(['genre'], () => getGenreApi());
  await queryClient.prefetchQuery(['actionsMovie'], () => discoverApi('28'));
  await queryClient.prefetchQuery(['comedyMovie'], () => discoverApi('35'));
  await queryClient.prefetchQuery(['mysteryMovie'], () => discoverApi('9648'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
