import { useContext, useState } from 'react';
import { BasketContext } from '../../context/Basket';
import EmptyBasket from '../../components/EmptyBasket';
import Collection from '../../components/Collection';
import BasketPurchase from '../../components/BasketPurchase';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);

  if (basket.length < 1) return <EmptyBasket />;
  return (
    <div className='bg-[#eeeeef] p-6'>
      <div className='p-2 container'>
        <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
        <div className='grid grid-cols-4'>
          <div className='col-span-3'></div>
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
