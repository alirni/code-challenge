import { useContext } from 'react';
import { StoreContext } from 'context/store';
import { MainLayout } from 'components';

const WishlistPage = () => {
  const { wishlist } = useContext(StoreContext);

  return (
    <MainLayout>
      <div>{!!wishlist?.length && wishlist.map((id) => <div key={id}>{id}</div>)}</div>
    </MainLayout>
  );
};

export default WishlistPage;
