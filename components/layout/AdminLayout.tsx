/* External dependencies */
import React from 'react';
import { useSession } from 'next-auth/react';

/* Local dependencies */
import FooterAdmin from '../footer-admin/FooterAdmin';
import HeaderAdmin from '../header-admin/HeaderAdmin';
import { LayoutProps } from './type';
import Layout from './Layout';
import AccessDenied from '../common/AccessDenied';

export default function AdminLayout({ children }: LayoutProps) {
  const { data: session, status } = useSession();

  return (
    <>
      <HeaderAdmin />
      {session ? (
        <main>{children}</main>
      ) : (
        <Layout>
          <AccessDenied />
        </Layout>
      )}
      <FooterAdmin />
    </>
  );
}
