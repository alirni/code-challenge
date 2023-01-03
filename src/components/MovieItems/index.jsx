import classNames from 'classnames';

import { MovieCard } from 'components';

const MovieItems = ({ list, title, type, className }) => {
  return (
    <div className={classNames('flex flex-col p-6', className)}>
      <div className='mb-4 text-lg font-bold capitalize'>{title}</div>

      <div className='mx-auto lg:mx-0 grid gap-y-6 lg:grid-cols-5'>
        {!!list?.length &&
          list?.map((movie) => (
            <MovieCard className='m-4' key={movie?.id} movie={movie} type={type} />
          ))}
      </div>
    </div>
  );
};

export default MovieItems;
