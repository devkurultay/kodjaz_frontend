/* External dependencies */
import React from 'react';
import { useSession } from 'next-auth/react';

/* Local dependencies */
import FooterClassroom from '../footer-classroom/FooterClassroom';
import HeaderClassroom from '../header-classroom/HeaderClassroom';
import { LayoutProps } from './type';
import Layout from './Layout';
import AccessDenied from '../common/AccessDenied';

export default function ClassroomLayout({ children }: LayoutProps) {
  const { data: session, status } = useSession();

  return (
    <>
      <HeaderClassroom />
      {session ? (
        <main>{children}</main>
      ) : (
        <Layout>
          <AccessDenied />
        </Layout>
      )}
      <FooterClassroom />
    </>
  );
}
