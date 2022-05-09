import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ data }) => {
  return (
    <Link href={`products/${data.name}`}>
      <div className='p-2 border flex flex-col cursor-pointer'>
        <div data-test='product-image'>
          <Image alt={data.name} src={data.image} width={302} height={302} />
        </div>
        <div>
          <p>{data.name}</p>
          <p>Star Rating Here (Number of Reviews)</p>
          <p>{data.price} - 2 decimal place</p>
          <p>Price per 100g</p>
          <button className='rounded-3xl bg-hbgreen text-white py-2 px-8 font-semibold text-sm'>
            Add to Basket
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
