import { Header } from 'components';

const MainLayout = ({ image, children }) => {
  return (
    <div
      className='bg-center bg-cover'
      style={{
        backgroundImage: `url(${image})`,
        height: 'calc(100vh - 52px)',
        paddingTop: 52,
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
