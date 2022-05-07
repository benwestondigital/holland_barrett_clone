import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Holland & Barrett - The UK&apos;s Leading Health & Wellbeing Store
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <div className='mx-auto'>
      <Header />
      {/* Products */}
      {/* Footer */}
      </div>
    </div>
  );
};

export default Home;
