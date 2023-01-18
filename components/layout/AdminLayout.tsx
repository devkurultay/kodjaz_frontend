/* External dependencies */
import React from 'react';

/* Local dependencies */
import FooterAdmin from '../footer-admin/FooterAdmin';
import HeaderAdmin from '../header-admin/HeaderAdmin';
import { LayoutProps } from './type';

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <HeaderAdmin />
      <main>{children}</main>
      <FooterAdmin />
    </>
  );
}
