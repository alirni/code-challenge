import Header from 'components/Header';

const MovieLayout = ({ image, children }) => {
  return (
    <div
      className='h-screen bg-center bg-cover text-white'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Header />
      <div className='bg-black bg-opacity-75' style={{ height: 'calc(100vh - 40px)' }}>
        {children}
      </div>
    </div>
  );
};

export default MovieLayout;
