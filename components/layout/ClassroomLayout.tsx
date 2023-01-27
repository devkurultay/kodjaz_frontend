/* External dependencies */
import React from 'react';
import { useSession } from 'next-auth/react';

/* Local dependencies */
import FooterClassroom from '../footer-classroom/FooterClassroom';
import HeaderClassroom from '../header-classroom/HeaderClassroom';
import { LayoutProps } from './type';
import AccessDenied from '../common/AccessDenied';

export default function ClassroomLayout({ children }: LayoutProps) {
  const { status } = useSession();

  return (
    <>
      <HeaderClassroom />
      {status === 'authenticated' ? <main>{children}</main> : <AccessDenied />}
      <FooterClassroom />
    </>
  );
}
