import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

const robotoFonts = Roboto({
	weight: ['400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={robotoFonts.className}>
			<Component {...pageProps} />
		</main>
	);
}
