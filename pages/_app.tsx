import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Roboto } from '@next/font/google';

import '../styles/globals.scss';

const robotoFonts = Roboto({
	weight: ['400', '500', '700', '900'],
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<main className={robotoFonts.className}>
			<Component {...pageProps} />
		</main>
	);
};

export default appWithTranslation(App);
