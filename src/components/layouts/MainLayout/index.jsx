import { Header } from 'components';

const MainLayout = ({ image, children }) => {
  return (
    <div
      className='bg-center bg-cover'
      style={{
        backgroundImage: `url(${image})`,
        height: 'calc(100vh - 40px)',
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
