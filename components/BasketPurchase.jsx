import { ChevronDownIcon } from '@heroicons/react/outline';
import { displayPrice } from '../utils';

const totalPrice = basket => {
  let displayedPrice = basket[0].price;
  if (basket.length > 1) {
    displayedPrice = basket.reduce((a, b) => a + b.price, 0);
  }

  return (Math.round(displayedPrice) / 100);
};

const BasketPurchase = ({ basket }) => {
  return (
    <div className='flex flex-col bg-white my-4 px-3 pb-8'>
      <div className='py-4'>
        <div className='flex items-center justify-between mt-1'>
          <p>Subtotal</p>
          <p className='font-semibold'>£{totalPrice(basket).toFixed(2)}</p>
        </div>
        <div className='flex items-center justify-between mt-1 text-hbred'>
          <p>Savings</p>
          <p className='font-semibold'>£0.00</p>
        </div>
        <div className='flex items-center justify-between mt-1'>
          <p>Default Delivery</p>
          <p className='font-semibold'>£3.49</p>
        </div>
        <p className='text-[#333] text-sm mt-1'>
          You can change delivery at checkout
        </p>
      </div>
      <div className='flex items-center justify-between my-2 pb-2 border-b'>
        <h3 className='font-semibold'>Add voucher code</h3>
        <ChevronDownIcon className='h-6 text-hbgreen' />
      </div>
      <div className='flex flex-col my-2 pb-2 border-b'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold'>Rewards for Life</h3>
          <ChevronDownIcon className='h-6 text-hbgreen' />
        </div>
        <p className='text-sm text-[#333] mt-1'>
          You could collect <span className='text-hbred'>72</span> points on
          this order
        </p>
      </div>
      <div className='flex items-center justify-between my-2 pb-2'>
        <h3 className='font-semibold'>
          Total ({basket.length} {basket.length > 1 ? 'items' : 'item'})
        </h3>
        <p className='font-semibold'>£{totalPrice(basket) + 3.49}</p>
      </div>
      <div className='flex items-center grow justify-center mt-2'>
        <button
          type='submit'
          className='hover:shadow-lg text-xl font-semibold text-white rounded-lg w-11/12 bg-[#93c90e] hover:bg-[#6da500] py-4'
          disabled
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default BasketPurchase;
