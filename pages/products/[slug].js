import Image from 'next/image';
import StarRating from '../../components/StarRating';
import { StarIcon } from '@heroicons/react/outline';
import ProductBreadcrumbs from '../../components/ProductBreadcrumbs';
import { displayPrice, pricePer100g } from '../../utils';
import { GiftIcon, RefreshIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const ProductPage = ({
  product: { name, image, flavour, brand, price, numReviews, stars, size },
}) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = e => {
    e.preventDefault();
    if (quantity) {
      setQuantity(currQuantity => currQuantity - 1);
    }
  };

  const increaseQuantity = e => {
    e.preventDefault();
    setQuantity(currQuantity => currQuantity + 1);
  };

  return (
    <div className='text-[#333]'>
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
          <form className='grid grid-cols-2 p-2 gap-6'>
            {/* Purchase */}
            <div className='rounded-lg border-2 grow p-2 border-[#00594c] bg-[#e6f3f2]'>
              <div className='p-2 flex items-center justify-around'>
                <input
                  type='radio'
                  id='purchase'
                  className='h-7 w-7 mr-2 checked:text-[#00594c] focus:outline-none'
                  checked
                />
                <label
                  htmlFor='purchase'
                  className='text-xl text-black font-semibold'
                >
                  One-time purchase
                </label>
              </div>
              <div className='m-2 grid grid-cols-2 gap-x-1'>
                <label
                  htmlFor='quantity'
                  className='text-xl font-semibold text-black'
                >
                  Quantity:
                </label>
                <div className='border rounded-lg w-11/12 flex items-center justify-between bg-white'>
                  <button
                    className='text-lg h-8'
                    onClick={e => decreaseQuantity(e)}
                  >
                    -
                  </button>
                  <input
                    type='number'
                    id='quantity'
                    className='w-14 h-8'
                    value={quantity}
                    disabled={!quantity}
                  />
                  <button
                    className='text-lg h-8 pl-3'
                    onClick={e => increaseQuantity(e)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className='rounded-lg border-2 grow p-2'>
              <div className='p-2 flex items-center justify-around'>
                <input
                  type='radio'
                  id='purchase'
                  className='h-7 w-7 mr-2'
                  disabled
                />
                <div className='flex items-center '>
                  <RefreshIcon className='h-6 pr-2' />
                  <label htmlFor='purchase' className='text-xl font-semibold'>
                    {' '}
                    Subscribe & Save
                  </label>
                </div>
              </div>
              <p className='pl-4 text-[#333]'>
                Get these benefits from your second order onwards:
              </p>
              <ul className='mt-3 list-disc px-6'>
                <li>
                  Pay as little as{' '}
                  <span className='text-hbgreen font-semibold text-lg'>
                    £14.25
                  </span>
                  !
                </li>
                <li>Every 5th order free</li>
                <li>Free delivery</li>
              </ul>
              <p className='text-hbgreen underline px-2 py-4'>More Info</p>
              <div className='p-2 flex items-center justify-around'></div>
            </div>
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
