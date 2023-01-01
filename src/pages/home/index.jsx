import MovieCard from 'components/MovieCard';
import MovieList from 'components/MovieList';

function Home() {
  return (
    <div>
      Welcome to Home!
      <MovieList
        title='test'
        list={[
          {
            id: 1,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
          },
          {
            id: 2,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30522860-l_30NAMA.webp?1662971632',
          },
          {
            id: 3,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30536673-l_30NAMA.webp?',
          },
          {
            id: 4,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30261410-l_30NAMA.webp?1665917108',
          },
          {
            id: 5,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30318666-l_30NAMA.webp?1669570408',
          },
          {
            id: 6,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
          },
          {
            id: 7,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
          },
          {
            id: 8,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
          },
          {
            id: 9,
            name: 'All Quiet on the Western Front 2022',
            image: 'https://cdn.30nama.com/poster/30540893-l_30NAMA.webp?1667394086',
          },
        ]}
      />
    </div>
  );
}

export default Home;
