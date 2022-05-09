import Head from 'next/head';
import ProductCard from '../components/ProductCard';

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>
          Holland & Barrett - The UK&apos;s Leading Health & Wellbeing Store
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* TODO: set up grid 4 x 2 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-8'>
        {/* Products */}
        {products.map(prod => {
          return <ProductCard key={prod.id} data={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/products');
  const products = await res.json();

  return { props: { products } };
}
