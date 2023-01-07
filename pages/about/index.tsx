/* External dependencies */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';

/* Local dependencies */
import Command from '../../components/website/command/Command';
import Header from '../../components/website/header/Header';
import AboutPromo from '../../components/website/promo/AboutPromo';
import InfoAbout from '../../components/website/info/InfoAbout';
import Footer from '../../components/website/footer/Footer';
import nextI18NextConfig from '../../next-i18next.config.js';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function About() {
  return (
    <>
      <Head>
        <title>Kodjaz - проект жөнүндө</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - программалоо негиздер боюнча акысыз курстар" key="title" />
      </Head>
      <Header />
      <AboutPromo />
      <InfoAbout />
      <Command />
      <Footer />
    </>
  );
}
