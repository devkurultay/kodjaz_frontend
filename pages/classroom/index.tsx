/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import store from '../../store';
import MyCourses from '../../components/education/MyCourses';
import nextI18NextConfig from '../../next-i18next.config.js';
import Layout from '../../components/layout/Layout';
import { Provider } from 'react-redux';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function ClassroomPage() {
  return (
    <Provider store={store}>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        <MyCourses />
      </Layout>
    </Provider>
  );
}

ClassroomPage.requireAuth = true;
