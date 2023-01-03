import classNames from 'classnames';

import { MovieCard } from 'components';

const MovieItems = ({ list, title, type, className }) => {
  return (
    <div className={classNames('flex flex-col p-6', className)}>
      <div className='mb-4 text-lg font-bold capitalize'>{title}</div>

      <div className='grid gap-y-6 grid-cols-6'>
        {!!list?.length &&
          list?.map((movie) => (
            <MovieCard className='m-4' key={movie?.id} movie={movie} type={type} />
          ))}
      </div>
    </div>
  );
};

export default MovieItems;
