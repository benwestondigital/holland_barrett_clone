import { RefreshIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Purchase = () => {
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

  const addToBasket = e => {
    e.preventDefault();
    /* TODO: complete add to basket function - context */
    setQuantity(0);
  };

  return (
    <form className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-2 mt-1 md:gap-2 lg:gap-6'>
      {/* Purchase */}
      <div className='rounded-lg border-2 grow p-2 border-[#00594c] bg-[#e6f3f2]'>
        <div className='p-2 flex items-center justify-around'>
          <input
            type='radio'
            id='purchase'
            className='h-6 w-6 mr-2 checked:text-[#00594c] focus:outline-none'
            checked
            readOnly
          />
          <label
            htmlFor='purchase'
            className='text-xl text-black font-semibold'
          >
            One-time purchase
          </label>
        </div>
        <div className='m-2 grid grid-cols-2 gap-x-1 pt-2'>
          <label
            htmlFor='quantity'
            className='text-xl font-semibold text-black'
          >
            Quantity:
          </label>
          <div className='border rounded-lg w-11/12 flex items-center justify-between bg-white px-2'>
            <button
              className='text-lg h-8 text-hbgreen'
              onClick={e => decreaseQuantity(e)}
            >
              -
            </button>
            <input
              type='number'
              id='quantity'
              className='w-14 h-8 no-spin border-0 text-center'
              value={quantity}
              readOnly
            />
            <button
              className='text-lg h-8 text-hbgreen'
              onClick={e => increaseQuantity(e)}
            >
              +
            </button>
          </div>
        </div>
        <div className='flex items-center grow justify-center mt-8'>
          <button
            type='submit'
            onClick={e => addToBasket(e)}
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
          <li>
            Pay as little as{' '}
            <span className='text-hbgreen font-semibold text-lg'>£14.25</span>!
          </li>
          <li>Every 5th order free</li>
          <li>Free delivery</li>
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
