import { useContext, useState } from 'react';
import { BasketContext } from '../../context/Basket';
import EmptyBasket from '../../components/EmptyBasket';
import Collection from '../../components/Collection';
import BasketPurchase from '../../components/BasketPurchase';
import { displayPrice } from '../../utils';
import Image from 'next/image';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);

  const reducedBasket = basket => {
    const counts = {};
    const uniqueBasket = [...new Set(basket)];
    basket.forEach(x => {
      counts[x.id] = (counts[x.id] || 0) + 1;
    });
    uniqueBasket.forEach(item => {
      item.quantity = counts[item.id];
    });
    return uniqueBasket;
  };

  const uniqueBasket = reducedBasket(basket);

  if (basket.length < 1) return <EmptyBasket />;
  return (
    <div className='bg-[#eeeeef] p-6'>
      <div className='p-2 container'>
        <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
        <div className='grid grid-cols-4 gap-x-6 mt-6'>
          <div className='col-span-3'>
            <div className='bg-white'>
              {uniqueBasket.map((item, index) => {
                const itemValue = item.price * item.quantity;
                return (
                  <div key={index} className='flex p-12 border-b'>
                    <div className='flex flex-col items-start pt-6'>
                      <Image
                        alt={item.name}
                        src={item.image}
                        height={150}
                        width={150}
                      />
                    </div>
                    <div className='flex items-start justify-between py-4 pl-8 my-2 w-full'>
                      <div>
                        <h3 className='text-[#00594c] font-semibold'>
                          {item.name}
                        </h3>
                        <p className='text-hbred mt-4'>Great Value</p>
                      </div>
                      <div className='flex items-center justify-between ml-8 w-64'>
                        <span className='border-2 rounded-lg px-8 py-1'>
                          {item.quantity}
                        </span>
                        <p className='font-semibold text-xl'>
                          {displayPrice(itemValue)}
                        </p>
                      </div>
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
