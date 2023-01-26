import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from '../../next-i18next.config.js';
import SignUpUser from '../../components/signup/SignUpUser';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function Login() {
  return <SignUpUser />;
}
