import { RefreshIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { BasketContext } from '../context/Basket';
import { useContext } from 'react';
import QuantityButton from './QuantityButton';

const Purchase = ({ data }) => {
  const { setBasket } = useContext(BasketContext);
  const [quantity, setQuantity] = useState(1);

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

  const addToBasketProdPage = e => {
    e.preventDefault();
    for (let i = 0; i < quantity; i++) {
      setBasket(currBasket => [
        ...currBasket,
        data,
      ]);
    }
    setQuantity(1);
  };

  return (
    <form className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-2 mt-1 md:gap-2 lg:gap-6'>
      {/* Purchase */}
      <div className='rounded-lg border-2 grow p-2 border-[#00594c] bg-[#e6f3f2]'>
        <div className='p-2 flex items-center justify-around'>
          <input
            type='radio'
            id='purchase'
            className='h-6 w-6 mr-2 checked:text-[#00594c] focus:outline-none cursor-pointer'
            checked
            readOnly
          />
          <label
            htmlFor='purchase'
            className='text-xl text-black font-semibold cursor-pointer'
          >
            One-time purchase
          </label>
        </div>
        {/* Quantity Button */}
        <QuantityButton
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          quantity={quantity}
        />
        <div className='flex items-center grow justify-center mt-8'>
          <button
            type='submit'
            onClick={e => addToBasketProdPage(e)}
            className='hover:shadow-lg text-xl font-semibold text-white rounded-lg w-11/12 bg-[#93c90e] hover:bg-[#6da500] py-4'
            disabled={!quantity}
          >
            Add to Basket
          </button>
        </div>
      </div>

      {/* Subscribe */}
      <div className='rounded-lg border-2 grow p-2'>
        <div className='p-2 flex items-center justify-around'>
          <input type='radio' id='purchase' className='h-6 w-6 mr-2' disabled />
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
          <li className='pb-2'>
            Pay as little as{' '}
            <span className='text-hbgreen font-semibold text-lg'>£14.25</span>!
          </li>
          <li className='pb-2'>Every 5th order free</li>
          <li className='pb-2'>Free delivery</li>
        </ul>
        <p className='text-hbgreen underline px-2 py-4 cursor-pointer'>
          More Info
        </p>
        <div className='p-2 flex items-center justify-around'></div>
      </div>
    </form>
  );
};
export default Purchase;
