import { useContext } from 'react';
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
    <div className='bg-[#eeeeef] p-6' data-testid='filled-basket'>
      <div className='p-2 container'>
        <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
        <div className='grid grid-cols-4 gap-x-6 mt-6'>
          <div className='col-span-3' data-testid='basket'>
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
                      <div className='w-1/2'>
                        <h3
                          className='text-[#00594c] font-semibold'
                          data-testid='product-name'
                        >
                          {item.name}
                        </h3>
                        <p className='text-hbred mt-4'>Great Value</p>
                      </div>
                      <div className='flex items-start justify-between ml-8 w-64'>
                        <div>
                          <div className='border-2 rounded-lg px-4 w-24 py-1 flex items-center justify-between'>
                            <span className='text-2xl text-hbgreen cursor-pointer'>
                              -
                            </span>
                            <span data-testid='basket-item-quantity'>{item.quantity}</span>
                            <span className='text-2xl text-hbgreen cursor-pointer'>
                              +
                            </span>
                          </div>
                          <p className='text-hbgreen underline text-xs cursor-pointer mt-2'>
                            Save for later
                          </p>
                        </div>
                        <p
                          className='font-semibold text-xl'
                          data-testid='basket-product-price'
                        >
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
          <div className='col-span-1' data-testid='basket-sidebar'>
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
