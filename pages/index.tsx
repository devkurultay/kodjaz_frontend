/* External dependencies */
import Head from 'next/head';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import Layout from '../components/layout/Layout';
import Feedbacks from '../components/website/feedbacks/Feedbacks';
import Founder from '../components/website/founder/Founder';
import InfoMain from '../components/website/info/InfoMain';
import MainPromo from '../components/website/promo/MainPromo';
import TextSection from '../components/website/text-section/TextSection';
import nextI18NextConfig from '../next-i18next.config.js';

export const getStaticProps = async ({ req, res, locale }: any) => ({
  props: {
    // TODO(murat): move this to the SSR page
    session: await unstable_getServerSession(req, res, authOptions),
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function Home() {
  const { t } = useTranslation();
  const title = t('kodjazTitle');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout>
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
      </Layout>
    </>
  );
}
