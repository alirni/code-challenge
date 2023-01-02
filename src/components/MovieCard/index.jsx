import { useQuery } from 'react-query';

const MovieCard = ({ movie }) => {
  const { data: config, isLoading } = useQuery(['config']);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex flex-col h-full cursor-pointer w-52'>
      <div className='p-2 text-sm font-bold text-center text-white bg-gray-500 rounded-t bg-opacity-70'>
        {movie?.original_title}
      </div>
      <div
        className='flex-grow bg-center bg-cover rounded-b'
        style={{
          minHeight: 320,
          backgroundImage: `url(${config?.images?.base_url}${config?.images?.poster_sizes[3]}${movie?.poster_path})`,
        }}
      />
    </div>
  );
};

export default MovieCard;
