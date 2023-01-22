/* External dependencies */
import Head from 'next/head';
import { Trans } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

/* Local dependencies */
import Layout from '../../components/layout/Layout';
import NonSSRWrapper from '../../components/common/NonSSRWrapper';
import { useDispatch } from 'react-redux';
import { confirmEmail, userState } from '../../store/slices/userSlice';
import { useAppSelector } from '../../store/hooks';
import nextI18NextConfig from '../../next-i18next.config.js';
import TextSection from '../../components/website/text-section/TextSection';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function AccountConfirmEmail() {
  const { emailConfirmationMsg } = useAppSelector(userState);
  const dispatch = useDispatch();
  const router = useRouter();
  const { key } = router.query;
  const { t } = useTranslation('common');
  const [status, setStatus] = useState<string>('just a second');
  const translatedStatus = t(status);

  useEffect(() => {
    if (key) {
      dispatch(confirmEmail(key));
    }
  }, [key]);

  useEffect(() => {
    if (emailConfirmationMsg) {
      setStatus(emailConfirmationMsg);
    }
  }, [emailConfirmationMsg, setStatus]);

  return (
    <NonSSRWrapper>
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
    </NonSSRWrapper>
  );
}
