import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex p-2 bg-black border-gray-300 shadow-sm shadow-gray-500 bg-opacity-70'>
      <Link href='/home'>
        <div className='mr-4 text-base font-bold text-white cursor-pointer'>Home</div>
      </Link>
      <Link href='/wishlist'>
        <div className='text-base font-bold text-white cursor-pointer'>Wishlist</div>
      </Link>
    </div>
  );
};

export default Header;
