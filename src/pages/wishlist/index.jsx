import { useContext, useMemo } from 'react';
import { StoreContext } from 'context/store';
import { useQueries } from 'react-query';

import { MainLayout } from 'components';
import Link from 'next/link';
import MovieItems from 'components/MovieItems';
import { getMovieApi } from 'api';

const WishlistPage = () => {
  const { wishlist } = useContext(StoreContext);

  const getWishlistKeys = () => {
    return wishlist.map((id) => ({ queryKey: ['movie', id], queryFn: () => getMovieApi(id) }));
  };

  const result = useQueries(getWishlistKeys());

  const preparedWishlist = useMemo(() => {
    if (result.length) {
      return result.map((item) => item.data);
    }

    return [];
  }, [result]);

  return (
    <MainLayout image='/img/back.jpg' title='Wishlist'>
      {wishlist?.length ? (
        <MovieItems title='Wishlist' list={preparedWishlist} type='primary' />
      ) : (
        <div className='flex items-center justify-center h-full text-lg font-bold'>
          Your wishlist is empty! Pleas go back to
          <Link href='/home'>
            <div className='ml-1 text-primary-default bg-pr'> home page</div>
          </Link>
          .
        </div>
      )}
    </MainLayout>
  );
};

export default WishlistPage;
