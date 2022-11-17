import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Roboto } from '@next/font/google';

import '../styles/globals.scss';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
