import { Button, MainLayout, MovieCard } from 'components';
import { StoreContext } from 'context/store';
import useImage, { imageSizeKey } from 'hooks/useImage';
import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import { useQuery } from 'react-query';

function MoviePage() {
  const { query } = useRouter();
  const { data, isLoading } = useQuery(['movie', query?.id]);

  const { addToWishlist, wishlist } = useContext(StoreContext);

  const imageUrl = useImage({
    path: data.backdrop_path,
    size: imageSizeKey.backdrop,
    sizeIndex: 2,
  });

  const addToWishlistHandler = () => {
    addToWishlist(query?.id);
  };

  const isAdded = useMemo(() => {
    return wishlist?.includes(query?.id);
  }, [wishlist, query]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainLayout image={imageUrl}>
      <div className='flex items-center justify-between p-10'>
        <MovieCard movie={data} isLarge noLink />
        <div className='flex flex-col items-center p-6 mx-auto bg-white rounded basis-1/3 bg-opacity-10'>
          <div className='mb-6'>
            <span className='font-bold'>Overview:</span>
            <p className='text-lg'>{data.overview}</p>
          </div>
          <Button
            title={isAdded ? 'Added To Wishlist' : 'Add To Wishlist'}
            disabled={isAdded}
            onclick={addToWishlistHandler}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default MoviePage;
