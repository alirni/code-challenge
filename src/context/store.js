import { createContext } from 'react';

export const store = {
  wishlist: [],
  addToWishlist: () => {},
};

export const StoreContext = createContext(
  store // default value
);
