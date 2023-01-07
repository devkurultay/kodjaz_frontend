/* External dependencies */
import Head from 'next/head';
import { Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import LoginUser from '../components/login/LoginUser';
import Feedbacks from '../components/website/feedbacks/Feedbacks';
import Founder from '../components/website/founder/Founder';
import Footer from '../components/website/footer/Footer';
import Header from '../components/website/header/Header';
import InfoMain from '../components/website/info/InfoMain';
import MainPromo from '../components/website/promo/MainPromo';
import TextSection from '../components/website/text-section/TextSection';
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - программалоо негиздер боюнча акысыз курстар" key="title" />
      </Head>
      <Header />
      <MainPromo />
      <TextSection text="whatCodeText">
        <Trans
          i18nKey="whatCodeTitle"
          components={{
            kodjaz: <span className="text-primaryColorLight"></span>,
          }}
        />
      </TextSection>
      <InfoMain />
      <TextSection text="sponsorPartnersText" logos={true}>
        <Trans>sponsorsPartnersTitle</Trans>
      </TextSection>
      <Founder />
      <Feedbacks />
      <Footer />
      <LoginUser />
    </>
  );
}
