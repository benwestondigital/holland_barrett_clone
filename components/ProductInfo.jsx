import StarRating from './StarRating';
import { StarIcon } from '@heroicons/react/outline';

const ProductInfo = ({ name, brand, numReviews, stars, flavour }) => {
  return (
    <div>
      <div>
        <p className='text-3xl font-bold p-2' data-testid='product-name'>
          {name}
        </p>
        <p className='text-sm p-2'>
          By{' '}
          <span
            className='text-hbgreen hover:underline cursor-pointer'
            data-testid='product-brand'
          >
            {brand}
          </span>
        </p>
        <div className='p-1' data-testid='product-stars'>
          <StarRating stars={stars} numReviews={numReviews} />
        </div>
      </div>

      {/* Benefits */}
      <div className='p-2'>
        <h3 className='text-lg font-semibold mb-3'>Benefits</h3>
        <div className='flex items-center gap-x-2'>
          <StarIcon className='h-7' />
          <p>{flavour} flavour</p>
        </div>
      </div>

      {/* Select Flavour */}
      <div className='p-2' data-testid='product-flavour'>
        <h3 className='text-xl font-semibold mb-3'>
          Select Strength, Flavour or Colour:
        </h3>
        <span className='font-semibold border-2 border-[#00594c] bg-[#e6f3f2] hover:bg-[#bfe0dc] p-2 rounded-lg text-sm cursor-pointer text-[#00594c]'>
          {flavour}
        </span>
      </div>
    </div>
  );
};
export default ProductInfo;
