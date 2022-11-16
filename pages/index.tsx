import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Promo from '../components/website/promo/Promo';
import nextI18NextConfig from '../next-i18next.config.js';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
	},
});

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
