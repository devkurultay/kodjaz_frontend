/* External dependencies */
import React from 'react';
import { Provider } from 'react-redux';

/* Local dependencies */
import FooterClassroom from '../footer-classroom/FooterClassroom';
import HeaderClassroom from '../header-classroom/HeaderClassroom';
import store from '../../store';
import { LayoutProps } from './type';

export default function ClassroomLayout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
      <HeaderClassroom />
      <main>{children}</main>
      <FooterClassroom />
    </Provider>
  );
}
