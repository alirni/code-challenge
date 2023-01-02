import { Carousel } from '@trendyol-js/react-carousel';
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { MovieCard } from 'components';
import styles from './styles.module.scss';

const MovieList = ({ list, title }) => {
  return (
    <div
      className={classNames(
        'flex flex-col p-4 m-4 border rounded shadow-lg',
        styles['movieListContainer']
      )}
    >
      <div className='mb-4 text-lg font-bold capitalize'>{title}</div>
      <Carousel
        show={6.2}
        slide={3}
        swiping={true}
        responsive={true}
        leftArrow={<ChevronLeftIcon data-direction='left' />}
        rightArrow={<ChevronRightIcon data-direction='right' />}
      >
        {!!list.length && list.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Carousel>
    </div>
  );
};

export default MovieList;
