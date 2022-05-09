import Image from 'next/image';
import Link from 'next/link';
import { displayPrice, pricePer100g } from '../utils';

const ProductCard = ({ data }) => {
  return (
    <Link href={`products/${data.name}`}>
      <div className='border flex flex-col cursor-pointer'>
        <div data-test='product-image'>
          <Image alt={data.name} src={data.image} width={302} height={302} />
        </div>
        <div className='bg-hbred text-white text-sm font-semibold flex justify-center'>
          <p>Great Savings</p>
        </div>
        <div className='px-2 flex flex-col items-center justify-between flex-grow'>
          <p className='text-hbgreen font-semibold text-sm mt-2 text-center'>
            {data.name}
          </p>
          <p>
            Star Rating Here{' '}
            <span className='text-xs text-gray-400'>({data.numReviews})</span>
          </p>
          <p className='font-bold'>{displayPrice(data.price)}</p>
          <p className='text-sm text-gray-400'>
            {pricePer100g(data.price, data.size)}
          </p>
            <button className='rounded-3xl bg-hbgreen hover:bg-[#00322B] hover:drop-shadow-md text-white py-2 px-8 font-semibold text-sm my-4 w-11/12'>
              Add to Basket
            </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
