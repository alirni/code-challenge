import classNames from 'classnames';
import { imageSizeKey, useImage } from 'hooks';
import Link from 'next/link';

const MovieCard = ({ movie, className = '', isLarge = false, noLink = false, type }) => {
  const imageUrl = useImage({
    path: movie?.poster_path,
    size: imageSizeKey.poster,
    sizeIndex: 3,
  });

  const Container = noLink ? 'div' : Link;

  return (
    <Container href={`/movie/${movie?.id}?type=${type}`}>
      <div
        className={classNames(
          'flex flex-col h-full mb-4 lg:mb-0',
          isLarge ? 'w-96' : 'w-52',
          !noLink && 'cursor-pointer',
          className
        )}
      >
        <div
          className={classNames(
            'p-2 font-bold text-center text-white bg-white bg-opacity-10 truncate',
            isLarge ? 'text-xl rounded-t-lg' : 'text-sm rounded-t'
          )}
        >
          {movie?.title}
        </div>
        <div
          className={classNames(
            'flex-grow bg-center bg-cover rounded-b-lg',
            isLarge ? 'rounded-b-lg' : 'rounded-b'
          )}
          style={{
            minHeight: isLarge ? 500 : 320,
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
    </Container>
  );
};

export default MovieCard;
