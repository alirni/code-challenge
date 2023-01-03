import { useContext, useMemo } from 'react';
import { StoreContext } from 'context/store';
import { useQueries } from 'react-query';

import { MainLayout, MovieList } from 'components';

const WishlistPage = () => {
  const { wishlist } = useContext(StoreContext);

  const getWishlistKeys = () => {
    return wishlist.map((id) => ({ queryKey: ['movie', id] }));
  };

  const result = useQueries(getWishlistKeys());

  const preparedWishlist = useMemo(() => {
    if (result.length) {
      return result.map((item) => item.data);
    }

    return [];
  }, [result]);

  return (
    <MainLayout image='/img/back.jpg'>
      {wishlist?.length ? (
        <MovieList title='Wishlist' list={preparedWishlist} />
      ) : (
        <div>Your wishlist is empty! go to Home.</div>
      )}
    </MainLayout>
  );
};

export default WishlistPage;
