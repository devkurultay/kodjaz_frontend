/* External dependencies */
import React from 'react';

/* Local dependencies */
import FooterClassroom from '../footer-classroom/FooterClassroom';
import HeaderClassroom from '../header-classroom/HeaderClassroom';
import { LayoutProps } from './type';

export default function ClassroomLayout({ children }: LayoutProps) {
  return (
    <>
      <HeaderClassroom />
      <main>{children}</main>
      <FooterClassroom />
    </>
  );
}
