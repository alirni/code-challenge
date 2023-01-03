import { StoreContext } from 'context/store';
import useAddToWishlist from 'hooks/useAddToWishlist';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import 'styles/globals.css';
function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const { addToWishlist, wishlist } = useAddToWishlist();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext.Provider value={{ addToWishlist, wishlist }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
