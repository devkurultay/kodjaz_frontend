/* External dependencies */
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Roboto } from '@next/font/google';

/* Local dependencies */
import '../styles/globals.scss';
import AuthGuard from '../components/auth/AuthGuard';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      {/* @ts-ignore */}
      {Component.requireAuth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
};

export default appWithTranslation(App);
