/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { Provider } from 'react-redux';

/* Local dependencies */
import IDE from '../../../components/ide/IDE';

import nextI18NextConfig from '../../../next-i18next.config.js';
import NonSSRWrapper from '../../../components/common/NonSSRWrapper';
import store from '../../../store';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function ExercisePage() {
  return (
    <NonSSRWrapper>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Provider store={store}>
        <IDE />
      </Provider>
    </NonSSRWrapper>
  );
}

ExercisePage.requireAuth = true;
