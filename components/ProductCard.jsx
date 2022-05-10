import Image from 'next/image';
import Link from 'next/link';
import { displayPrice, pricePer100g } from '../utils';
import StarRating from './StarRating';
import { BasketContext } from '../context/Basket';
import { useContext } from 'react';

const ProductCard = ({ data }) => {
  const { name, image, dealType, stars, numReviews, price, size } = data;
  const { setBasket } = useContext(BasketContext);
  const productLink = name.replace(' ', '');

  const addToBasket = e => {
    e.preventDefault();
    setBasket(currBasket => [...currBasket, data]);
  };

  return (
    <Link href={`products/${productLink}`} data-test='product-card'>
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
          <button
            onClick={e => addToBasket(e)}
            className='rounded-3xl bg-hbgreen hover:bg-[#00322B] hover:drop-shadow-md text-white py-2 px-8 font-semibold text-sm my-4 w-11/12'
            data-test='add-to-basket-home'
          >
            Add to Basket
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
