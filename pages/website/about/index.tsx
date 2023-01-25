/* External dependencies */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';

/* Local dependencies */
import Layout from '../../../components/layout/Layout';
import Team from '../../../components/website/command/Team';
import AboutPromo from '../../../components/website/promo/AboutPromo';
import InfoAbout from '../../../components/website/info/InfoAbout';
import nextI18NextConfig from '../../../next-i18next.config.js';

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
        <meta
          property="og:title"
          content="Kodjaz - программалоо негиздер боюнча акысыз курстар"
          key="title"
        />
      </Head>
      <Layout>
        <AboutPromo />
        <InfoAbout />
        <Team />
      </Layout>
    </>
  );
}
