/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans } from 'next-i18next';
import React from 'react';

/* Local dependencies */
import Header from '../../components/website/header/Header';
import TextSection from '../../components/website/text-section/TextSection';
import Footer from '../../components/website/footer/Footer';
import nextI18NextConfig from '../../next-i18next.config.js';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Header />
      <div className="min-h-[80vh]">
        <TextSection>
          <Trans i18nKey="resoursesDescription" />
        </TextSection>
      </div>
      <Footer />
    </>
  );
}
