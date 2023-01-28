/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import IDE from '../../../components/ide/IDE';
import ClassroomLayout from '../../../components/layout/ClassroomLayout';
import nextI18NextConfig from '../../../next-i18next.config.js';
import NonSSRWrapper from '../../../components/common/NonSSRWrapper';

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
      <ClassroomLayout>
        <IDE />
      </ClassroomLayout>
    </NonSSRWrapper>
  );
}

ExercisePage.requireAuth = true;
