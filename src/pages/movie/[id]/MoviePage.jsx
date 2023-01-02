import { Button, MovieCard, MovieLayout } from 'components';
import { StoreContext } from 'context/store';
import useImage, { imageSizeKey } from 'hooks/useImage';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useQuery } from 'react-query';

function MoviePage() {
  const { query } = useRouter();
  const { data, isLoading } = useQuery(['movie', query?.id]);

  const { addToWishlist } = useContext(StoreContext);

  const imageUrl = useImage({
    path: data.backdrop_path,
    size: imageSizeKey.backdrop,
    sizeIndex: 2,
  });

  const addToWishlistHandler = () => {
    addToWishlist(query?.id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <MovieLayout image={imageUrl}>
      <div className='flex justify-between p-10'>
        <MovieCard movie={data} isLarge />
        <div>
          <Button title='Add To Wishlist' onclick={addToWishlistHandler} />
        </div>
      </div>
    </MovieLayout>
  );
}

export default MoviePage;
