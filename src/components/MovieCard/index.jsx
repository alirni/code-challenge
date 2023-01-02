import classNames from 'classnames';
import useImage, { imageSizeKey } from 'hooks/useImage';
import Link from 'next/link';

const MovieCard = ({ movie, className = '', isLarge = false }) => {
  const imageUrl = useImage({
    path: movie?.poster_path,
    size: imageSizeKey.poster,
    sizeIndex: 3,
  });

  return (
    <Link href={`/movie/${movie?.id}`} prefetch={false}>
      <div
        className={classNames(
          'flex flex-col h-full cursor-pointer',
          isLarge ? 'w-96' : 'w-52',
          className
        )}
      >
        <div
          className={classNames(
            'p-2 font-bold text-center text-white bg-white bg-opacity-10',
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
    </Link>
  );
};

export default MovieCard;
