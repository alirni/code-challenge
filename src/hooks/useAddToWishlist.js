import { useState } from 'react';

const useAddToWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (id) => {
    setWishlist((prev) => [...prev, id]);
  };

  return { wishlist, addToWishlist };
};

export default useAddToWishlist;
