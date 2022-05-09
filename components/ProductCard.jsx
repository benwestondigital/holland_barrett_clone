import Image from 'next/image';
import Link from 'next/link';
import { displayPrice, pricePer100g } from '../utils';
import StarRating from './StarRating';

const ProductCard = ({
  data: { name, image, dealType, stars, numReviews, price, size },
}) => {
  const productLink = name.replace(' ', '');

  return (
    <Link href={`products/${productLink}`}>
      <div className='border flex flex-col cursor-pointer'>
        <div data-test='product-image'>
          <Image alt={name} src={image} width={302} height={302} />
        </div>
        <div className='bg-hbred text-white text-sm font-semibold flex justify-center py-1'>
          <p>{dealType}</p>
        </div>
        <div className='px-2 flex flex-col items-center justify-between flex-grow'>
          <p className='text-hbgreen font-semibold text-sm mt-2 text-center'>
            {name}
          </p>
          <StarRating stars={stars} numReviews={numReviews} />
          <p className='font-bold'>{displayPrice(price)}</p>
          <p className='text-sm text-gray-400'>{pricePer100g(price, size)}</p>
          <button className='rounded-3xl bg-hbgreen hover:bg-[#00322B] hover:drop-shadow-md text-white py-2 px-8 font-semibold text-sm my-4 w-11/12'>
            Add to Basket
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
