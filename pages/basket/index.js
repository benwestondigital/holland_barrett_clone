import { useContext, useState } from 'react';
import { BasketContext } from '../../context/Basket';
import EmptyBasket from '../../components/EmptyBasket';
import Collection from '../../components/Collection';
import BasketPurchase from '../../components/BasketPurchase';
import { displayPrice, totalPrice } from '../../utils';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  console.log(basket)

  if (basket.length < 1) return <EmptyBasket />;
  return (
    <div className='bg-[#eeeeef] p-6'>
      <div className='p-2 container'>
        <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
        <div className='grid grid-cols-4'>
          <div className='col-span-3'>
            <div className='bg-white w-10/12'>
              {basket.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-between p-8 m-2'
                  >
                    <h3 className='text-hbgreen font-semibold'>{item.name}</h3>
                    <p className='font-semibold text-lg'>
                      {displayPrice(item.price)}
                    </p>
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
