import Header from './header';
import Footer from './footer';

export default function Layout2({ children }) {
  return (
    <>
      <Header />
      <p>レイアウト２だよ</p>
      <main>{children}</main>
      <Footer />
    </>
  );
}