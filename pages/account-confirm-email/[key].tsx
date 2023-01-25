/* External dependencies */
import Head from 'next/head';
import { Trans } from 'next-i18next';
import { SSRConfig } from 'next-i18next/dist/types/types';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

/* Local dependencies */
import Layout from '../../components/layout/Layout';
import nextI18NextConfig from '../../next-i18next.config.js';
import TextSection from '../../components/website/text-section/TextSection';
import { GetServerSidePropsContext } from 'next';
import { confirmEmail } from '../api/api-auth';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const key = ctx.params?.key ?? '';

  async function getConfirmationStatus(key: string) {
    // TODO(murat): move try/catch logic to confirmEmail
    try {
      const { data } = await confirmEmail(key);

      return data?.detail ?? '';
    } catch (error: any) {
      const {
        response: { data },
      } = error;

      return data?.detail ?? '';
    }
  }

  return {
    props: {
      confirmationStatus: await getConfirmationStatus(key),
      ...(await serverSideTranslations(
        ctx.locale ?? 'ky',
        ['common'],
        nextI18NextConfig,
      )),
    },
  };
};

interface AccountConfirmEmailProps extends SSRConfig {
  [key: string]: any;
}

export default function AccountConfirmEmail(props: AccountConfirmEmailProps) {
  const { confirmationStatus } = props;
  const { t } = useTranslation('common');
  const [status, setStatus] = useState<string>('just a second');
  const translatedStatus = t(status);

  useEffect(() => {
    if (confirmationStatus) {
      setStatus(confirmationStatus);
    }
  }, [confirmationStatus, setStatus]);

  return (
    <>
      <Head>
        <title>Kodjaz - программалоо негиздер боюнча акысыз курстар</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kodjaz - Курстар" key="title" />
      </Head>
      <Layout>
        <TextSection>
          <Trans
            i18nKey="emailConfirmationText"
            values={{ status: translatedStatus }}
          />
        </TextSection>
      </Layout>
    </>
  );
}
