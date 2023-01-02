import { Button, MovieCard, MovieLayout } from 'components';
import useImage, { imageSizeKey } from 'hooks/useImage';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function MoviePage(props) {
  const { query } = useRouter();
  const { data, isLoading } = useQuery(['movie', query?.id]);

  const imageUrl = useImage({
    path: data.backdrop_path,
    size: imageSizeKey.backdrop,
    sizeIndex: 2,
  });

  console.log('MoviePage.jsx:8 >> data', { data });

  const addToWishlist = () => {
    console.log('MoviePage.jsx:19 >> addToWishlist', { id: query?.id });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <MovieLayout image={imageUrl}>
      <div className='flex justify-between p-10'>
        <MovieCard movie={data} isLarge />
        <div>
          <Button title='Add To Wishlist' onclick={addToWishlist} />
        </div>
      </div>
    </MovieLayout>
  );
}

export default MoviePage;
