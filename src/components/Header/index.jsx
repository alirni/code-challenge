import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex p-2 text-base border-gray-300 shadow-sm shadow-gray-500'>
      <Link href='/home'>
        <div className='mr-4 cursor-pointer'>Home</div>
      </Link>
      <Link href='/wishlist'>
        <div className='cursor-pointer'>Wishlist</div>
      </Link>
    </div>
  );
};

export default Header;
