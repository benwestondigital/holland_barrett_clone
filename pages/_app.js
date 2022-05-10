import '../styles/globals.css';
import Layout from '../components/Layout';
import { BasketContext } from '../context/Basket';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketContext.Provider>
  );
}

export default MyApp;
