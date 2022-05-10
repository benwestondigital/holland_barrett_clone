import { useContext, useState } from 'react';
import { BasketContext } from '../../context/Basket';
import EmptyBasket from '../../components/EmptyBasket';
import Collection from '../../components/Collection';
import BasketPurchase from '../../components/BasketPurchase';
import { displayPrice, totalPrice } from '../../utils';
import Image from 'next/image';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);

  if (basket.length < 1) return <EmptyBasket />;
  return (
    <div className='bg-[#eeeeef] p-6'>
      <div className='p-2 container'>
        <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
        <div className='grid grid-cols-4 gap-x-6 mt-6'>
          <div className='col-span-3'>
            <div className='bg-white'>
              {basket.map((item, index) => {
                return (
                  <div key={index} className='flex p-12 border-b'>
                    <div className='flex flex-col items-start pt-6'>
                    <Image
                      alt={item.name}
                      src={item.image}
                      height={88}
                      width={88}
                    />
                    </div>
                    <div className='flex items-start justify-between py-4 pl-8 my-2 w-full'>
                      <div>
                      <h3 className='text-[#00594c] font-semibold'>
                        {item.name}
                      </h3>
                      <p className='text-hbred mt-4'>Great Value</p>
                      </div>
                      <p className='font-semibold text-xl'>
                        {displayPrice(item.price)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Sidebar */}
          <div className='col-span-1'>
            <Collection />
            {/* Purchase Amount */}
            <BasketPurchase basket={basket} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
