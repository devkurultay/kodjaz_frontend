/* External dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { unstable_getServerSession } from 'next-auth/next';
import { Trans } from 'next-i18next';

import React from 'react';

/* Local dependencies */
import MyCourses from '../../../components/education/MyCourses';
import Layout from '../../../components/layout/Layout';
import nextI18NextConfig from '../../../next-i18next.config.js';
import { authOptions } from '../../api/auth/[...nextauth]';
import { ExtendedSession } from '../../../types/userTypes';
import { getRequest } from '../../api/axois-api';
import { getSubscriptions } from '../../api/api-subscription';

export async function getServerSideProps(context: any) {
  // TODO(murat): move this to a helper
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  const extSession = session as unknown as ExtendedSession;
  const subscriptions = await getSubscriptions(extSession.access);
  const subscribedTracks = await Promise.all(
    subscriptions.map(
      // TODO(murat): put proper type
      async ({ track }: any) =>
        await getRequest(extSession.access, `v1/user/tracks/${track}/`),
    ),
  );

  return {
    props: {
      subscribedTracks: subscribedTracks,
      ...(await serverSideTranslations(
        context.locale,
        ['common'],
        nextI18NextConfig,
      )),
    },
  };
}

// TODO(murat): put a proper type
export default function CoursesPage(props: any) {
  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        <MyCourses subscribedTracks={props?.subscribedTracks ?? []} />
      </Layout>
    </>
  );
}
