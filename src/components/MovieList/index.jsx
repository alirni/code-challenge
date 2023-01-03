import { Carousel } from '@trendyol-js/react-carousel';
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useBreakpoint } from 'use-breakpoint';

import { MovieCard } from 'components';
import { BREAKPOINTS } from 'const';
import styles from './styles.module.scss';

const MovieList = ({ list, title, type, className }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

  return (
    <div className={classNames('flex flex-col p-6', styles['movieListContainer'], className)}>
      <div className='mb-4 text-lg font-bold capitalize'>{title}</div>
      <Carousel
        show={breakpoint === 'mobile' ? 1 : 6.2}
        slide={breakpoint === 'mobile' ? 1 : 3}
        swiping={true}
        responsive={true}
        leftArrow={<ChevronLeftIcon data-direction='left' />}
        rightArrow={<ChevronRightIcon data-direction='right' />}
      >
        {!!list?.length &&
          list?.map((movie) => (
            <MovieCard
              key={movie?.id}
              movie={movie}
              type={type}
              // isLarge={breakpoint === 'mobile'}
              className='mx-auto'
            />
          ))}
      </Carousel>
    </div>
  );
};

export default MovieList;
