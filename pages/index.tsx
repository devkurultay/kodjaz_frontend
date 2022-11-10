import Head from 'next/head';
import Promo from '../components/website/promo/Promo';

export default function Home() {
	return (
		<>
			<Head>
				<title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:title' content='Kodjaz - программалоо негиздер боюнча акысыз курстар' key='title' />
			</Head>
			<Promo></Promo>
		</>
	);
}
