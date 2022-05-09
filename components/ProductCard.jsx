import Image from 'next/image';
import Link from 'next/link';

const displayPrice = price => {
  if (price > 999) {
    return `£${price / 100}.00`;
  }
  return `£${price / 100}`;
};

const pricePer100g = (price, size) => {
  return `£${(price / size).toFixed(2)}/100g`;
};

const ProductCard = ({ data }) => {
  return (
    <Link href={`products/${data.name}`}>
      <div className='m-1 border flex flex-col cursor-pointer'>
        <div data-test='product-image'>
          <Image alt={data.name} src={data.image} width={302} height={302} />
        </div>
        <div className='flex flex-col justify-end'>
          <div className='bg-hbred text-white text-sm font-semibold flex justify-center'>
            <p>Great Savings</p>
          </div>
          <p className='text-hbgreen font-semibold text-sm'>{data.name}</p>
          <p>
            Star Rating Here{' '}
            <span className='text-sm text-gray-400'>(No. Reviews)</span>
          </p>
          <p className='font-bold'>{displayPrice(data.price)}</p>
          <p className='text-sm text-gray-400'>
            {pricePer100g(data.price, data.size)}
          </p>
          <button className='rounded-3xl bg-hbgreen hover:bg-[#00322B] hover:drop-shadow-md text-white py-2 px-8 font-semibold text-sm my-4'>
            Add to Basket
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
