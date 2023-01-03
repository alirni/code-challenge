import Link from 'next/link';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-center py-3 bg-black border-gray-300 shadow-sm shadow-gray-500 bg-opacity-70'>
      <Link href='/home'>
        <div className='mr-10 text-lg font-bold text-white cursor-pointer hover:text-primary-default'>
          Home
        </div>
      </Link>
      <Link href='/wishlist'>
        <div className='text-lg font-bold text-white cursor-pointer hover:text-primary-default'>
          Wishlist
        </div>
      </Link>
    </div>
  );
};

export default Header;
