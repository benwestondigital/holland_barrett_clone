import { GiftIcon } from '@heroicons/react/outline';
import { displayPrice, pricePer100g } from '../utils';

const Price = ({ price, size }) => {
  return (
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
          <p className='text-2xl font-bold' data-test='product-page-price'>
            {displayPrice(price)}
          </p>
          <p className='text-sm text-gray-400' data-test='product-page-100g'>
            {pricePer100g(price, size)}
          </p>
        </div>
      </div>
      <p className='text-xs text-gray-400 ml-1'>SKU: 046032</p>
    </div>
  );
};
export default Price;
