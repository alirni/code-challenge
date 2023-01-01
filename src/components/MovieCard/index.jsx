const MovieCard = ({ movie }) => {
  return (
    <div className='flex flex-col rounded shadow-md cursor-pointer shadow-gray-500 w-52'>
      <div className='p-2 text-sm font-bold text-center text-white rounded-t bg-slate-800'>
        {movie.name}
      </div>
      <div
        className='bg-center bg-cover rounded-b h-80'
        style={{ backgroundImage: `url(${movie.image})` }}
      />
    </div>
  );
};

export default MovieCard;
