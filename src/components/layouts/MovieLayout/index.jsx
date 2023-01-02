import Header from 'components/Header';

const MovieLayout = ({ image, children }) => {
  return (
    <div
      className='h-screen text-white bg-center bg-cover'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Header />
      <div className='bg-black bg-opacity-75' style={{ height: 'calc(100vh)', paddingTop: 52 }}>
        {children}
      </div>
    </div>
  );
};

export default MovieLayout;
