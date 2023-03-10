import { getMovieApi } from 'api';
import classNames from 'classnames';
import { Button, MainLayout, MovieCard } from 'components';
import { BREAKPOINTS } from 'const';
import { StoreContext } from 'context/store';
import { imageSizeKey, useImage } from 'hooks';
import { useRouter } from 'next/router';
import { useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useBreakpoint } from 'use-breakpoint';

const fontType = {
  primary: { font: 'font-display', background: 'bg-primary-default' },
  secondary: { font: 'font-sans', background: 'bg-secondary-default' },
  important: { font: 'font-serif', background: 'bg-important-default' },
};

function MoviePage() {
  const { query } = useRouter();
  const { id, type } = query;
  const { data, isLoading } = useQuery(['movie', id], () => getMovieApi(id));

  const { addToWishlist, wishlist } = useContext(StoreContext);

  const imageUrl = useImage({
    path: data?.backdrop_path,
    size: imageSizeKey.backdrop,
    sizeIndex: 2,
  });

  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

  const addToWishlistHandler = () => {
    addToWishlist(id);
  };

  const isAdded = useMemo(() => {
    return wishlist?.includes(id);
  }, [wishlist, id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainLayout image={imageUrl} title='Movie'>
      <div className='flex flex-col items-center justify-between p-12 lg:flex-row'>
        <MovieCard movie={data} isLarge={breakpoint !== 'mobile'} noLink />
        <div
          className={classNames(
            'flex flex-col items-center p-6 mx-auto rounded basis-1/3 bg-opacity-30',
            fontType[type]?.background
          )}
        >
          <div className='mb-6'>
            <div className='mb-2 font-bold'>Overview:</div>
            <p className={classNames('text-lg', fontType[type]?.font)}>{data.overview}</p>
          </div>
          <Button
            title={isAdded ? 'Added To Wishlist' : 'Add To Wishlist'}
            disabled={isAdded}
            onclick={addToWishlistHandler}
            type={type}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default MoviePage;
