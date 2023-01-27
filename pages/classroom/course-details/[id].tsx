/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import CourseDetail from '../../../components/education/CourseDetail';
import Layout from '../../../components/layout/Layout';
import nextI18NextConfig from '../../../next-i18next.config.js';
import { useRouter } from 'next/navigation';
import { Hashmap } from '../../../types/userTypes';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export const getStaticPaths = async ({}) => {
  const res = await fetch('https://.../posts');
  const paths: Hashmap[] = [{ id: 1 }];
  return {
    paths,
    fallback: true,
  };
};

export default function CoursePage() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        <CourseDetail />
      </Layout>
    </>
  );
}
