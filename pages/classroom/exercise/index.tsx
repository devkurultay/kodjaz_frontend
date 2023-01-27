/* External dependencies */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

/* Local dependencies */
import IDE from '../../../components/ide/IDE';
import ClassroomLayout from '../../../components/layout/ClassroomLayout';
import nextI18NextConfig from '../../../next-i18next.config.js';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default function ExercisePage() {
  return (
    <ClassroomLayout>
      <IDE />
    </ClassroomLayout>
  );
}

ExercisePage.requireAuth = true;
