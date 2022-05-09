import Image from 'next/image';
import ProductBreadcrumbs from '../../components/ProductBreadcrumbs';
import Price from '../../components/Price';
import ProductInfo from '../../components/ProductInfo';
import Purchase from '../../components/Purchase';
import StoreAvailability from '../../components/StoreAvailability';
import FurtherInfo from '../../components/FurtherInfo';

const ProductPage = ({
  product: { name, image, flavour, brand, price, numReviews, stars, size },
}) => {
  return (
    <div className='text-[#333]'>
      <ProductBreadcrumbs name={name} />
      <div className='grid grid-cols-2 gap-2 m-8'>
        {/* Left Col - Image */}
        {/* TODO: Make image fixed? */}
        <div className='column1'>
          <Image alt={name} src={image} width={604} height={604} className='cursor-crosshair'/>
          <div className='flex items-center justify-between cursor-pointer'>
            <div className='border-b-4 border-gray-500'>
              <Image alt={name} src={image} width={88} height={88} />
            </div>
            <Image alt={name} src={image} width={88} height={88} />
            <Image alt={name} src={image} width={88} height={88} />
            <Image alt={name} src={image} width={88} height={88} />
            <Image alt={name} src={image} width={88} height={88} />
          </div>
        </div>
        {/* Right Col - Info */}
        <div className='column2'>
          <ProductInfo
            name={name}
            brand={brand}
            numReviews={numReviews}
            stars={stars}
            flavour={flavour}
          />
          <Price price={price} size={size} />
          <Purchase />
          <StoreAvailability />
        </div>
      </div>
          <FurtherInfo stars={stars} numReviews={numReviews}/>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/products');
  const products = await res.json();

  return {
    paths: products.map(p => ({
      params: {
        slug: p.name.replace(' ', ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch('http://localhost:3000/products');
  const products = await res.json();
  const [product] = products.filter(
    product => product.name.replace(' ', '') === slug
  );

  return { props: { product } };
}

export default ProductPage;
