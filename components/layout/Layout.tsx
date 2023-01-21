/* Local dependencies */
import LoginUser from '../login/LoginUser';
import SignUpUser from '../signup/SignUpUser';
import Footer from '../website/footer/Footer';
import Header from '../website/header/Header';
import { LayoutProps } from './type';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <LoginUser />
      <SignUpUser />
    </>
  );
}
