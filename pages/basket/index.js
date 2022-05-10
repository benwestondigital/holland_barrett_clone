import { useContext, useState } from 'react';
import { BasketContext } from '../../context/Basket';
import EmptyBasket from '../../components/EmptyBasket';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);

  if (basket.length < 1) return <EmptyBasket />;
  return (
    <div className='bg-[#eeeeef]'>
      <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
    </div>
  );
};
export default Basket;
