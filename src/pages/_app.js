import { MainLayout } from 'components';
import 'styles/globals.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}

export default App;
