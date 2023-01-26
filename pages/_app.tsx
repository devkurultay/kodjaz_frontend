/* External dependencies */
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Roboto } from '@next/font/google';
import { Provider } from 'react-redux';

/* Local dependencies */
import { wrapper } from '../store';
import '../styles/globals.scss';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default appWithTranslation(App);
