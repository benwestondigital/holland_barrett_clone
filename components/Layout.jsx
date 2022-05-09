import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='mx-auto font-sans antialiased'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
