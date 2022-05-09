import Image from 'next/image';
import StarRating from '../../components/StarRating';
import { StarIcon } from '@heroicons/react/outline';
import ProductBreadcrumbs from '../../components/ProductBreadcrumbs';
import { displayPrice, pricePer100g } from '../../utils';
import { GiftIcon } from '@heroicons/react/outline';

const ProductPage = ({
  product: { name, image, flavour, brand, price, numReviews, stars, size },
}) => {
  return (
    <div>
      <ProductBreadcrumbs name={name} />
      <div className='grid grid-cols-2 gap-2 m-8'>
        {/* Left Col - Image */}
        <div>
          <Image alt={name} src={image} width={604} height={604} />
        </div>
        {/* Right Col - Info */}

        {/* Product Info */}
        <div>
          <p className='text-3xl font-bold p-2'>{name}</p>
          <p className='text-sm p-2'>
            By <span className='text-hbgreen'>{brand}</span>
          </p>
          <div className='p-1'>
            <StarRating stars={stars} numReviews={numReviews} />
          </div>

          {/* Benefits */}
          <div className='p-2'>
            <h3 className='text-lg font-semibold mb-3'>Benefits</h3>
            <div className='flex items-center gap-x-2'>
              <StarIcon className='h-7' />
              <p>{flavour} flavour</p>
            </div>
          </div>

          {/* Select Flavour */}

          <div className='p-2'>
            <h3 className='text-xl font-semibold mb-3'>
              Select Strength, Flavour or Colour:
            </h3>
            <span className='font-semibold border-2 border-[#00594c] bg-[#e6f3f2] p-2 rounded-lg text-sm cursor-pointer text-[#00594c]'>
              {flavour}
            </span>
          </div>

          {/* Price Section */}
          <div className='border-t border-b py-3 px-2 mt-2'>
            <span className='rounded bg-hbred text-white text-sm p-2 cursor-pointer text-center font-semibold'>
              Great Value <span className='text-lg mr-2'>{'>'}</span>
            </span>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-x-2'>
                <GiftIcon className='h-7' />
                <p className='text-sm'>
                  72 Rewards for Life points with this purchase
                </p>
              </div>
              <div>
                <p className='text-2xl font-bold'>{displayPrice(price)}</p>
                <p className='text-sm text-gray-400'>
                  {pricePer100g(price, size)}
                </p>
              </div>
            </div>
            <p className='text-xs text-gray-400 ml-1'>SKU: 046032</p>
          </div>


          {/* Purchase Section */}
          <form className='grid grid-cols-2 p-2 gap-2'>
            <div className='rounded-lg border-2 grow p-2'>
              <div>
                <input type='checkbox' id='purchase' />
                <label htmlFor='purchase' className='text-xl font-semibold'>
                  One-time purchase
                </label>
              </div>
              <div className='p-2'>
                <label htmlFor='quantity' className='text-xl font-semibold'>
                  Quantity:
                </label>
                <input type='number' id='quantity' />
              </div>
            </div>
            <div className='rounded-lg border-2 grow'></div>
          </form>
        </div>
      </div>
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
