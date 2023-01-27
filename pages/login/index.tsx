import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginUser from '../../components/login/LoginUser';
import nextI18NextConfig from '../../next-i18next.config.js';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function LoginPage() {
  return <LoginUser />;
}
