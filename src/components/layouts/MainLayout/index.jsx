import Header from 'components/Header';

const MainLayout = ({ image, children }) => {
  return (
    <div
      className='h-screen text-white bg-center bg-cover'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Header />
      <div
        className='fixed left-0 right-0 overflow-auto bg-black bg-opacity-75'
        style={{ height: 'calc(100vh - 52px)', marginTop: 52 }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
