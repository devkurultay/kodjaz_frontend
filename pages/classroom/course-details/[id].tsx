/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import CourseDetail from '../../../components/education/CourseDetail';
import Layout from '../../../components/layout/Layout';
import nextI18NextConfig from '../../../next-i18next.config.js';
import { getRequest } from '../../api/axois-api';
import { Track } from '../../../types/tracksTypes';

export const getStaticPaths = async () => {
  const tracks = await getRequest('', 'v1/tracks/');
  const paths = tracks.map((track: Track) => ({
    params: { id: `${track.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ locale, params }: any) => {
  const track = await getRequest('', `v1/tracks/${params.id}`);
  return {
    props: {
      track,
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

export default function CoursePage({ track }: any) {
  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        <CourseDetail track={track} />
      </Layout>
    </>
  );
}

CoursePage.requireAuth = true;
