/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans } from 'next-i18next';
import React, { useEffect, useState } from 'react';

/* Local dependencies */
import Layout from '../../components/layout/Layout';
import Courses from '../../components/website/courses/Courses';
import TextSection from '../../components/website/text-section/TextSection';
import nextI18NextConfig from '../../next-i18next.config.js';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoadingSpinner from '../../components/ui/Spinner';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function CoursesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  useEffect(() => {
    if (status === 'authenticated') {
      setLoading(true);
      router.push({
        pathname: '/classroom',
      });
    }
  }, [status, setLoading, router]);

  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        {loading ? (
          <TextSection>
            <LoadingSpinner height={100} />
          </TextSection>
        ) : (
          <>
            <TextSection>
              <Trans i18nKey="coursesDescription" />
            </TextSection>
            <Courses />
          </>
        )}
      </Layout>
    </>
  );
}
