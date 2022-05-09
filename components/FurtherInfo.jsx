import { ChevronDownIcon } from '@heroicons/react/outline';
import StarRating from './StarRating';

const FurtherInfo = ({ stars, numReviews }) => {
  const info = [
    'Delivery Options',
    'Description',
    'Customer Reviews',
    'Ingredients',
    'Nutritional Information',
    'Additional Info',
  ];
  return (
    <div className='flex flex-col mb-12'>
      {info.map(info => {
        const renderStars = info === 'Customer Reviews';
        return (
          <div
            key={info}
            className='flex items-center justify-between p-4 border-b w-[97%] mx-auto cursor-pointer'
          >
            <div>
              <p className='text-xl font-semibold mb-1'>{info}</p>
              {renderStars && (
                <StarRating stars={stars} numReviews={numReviews} />
              )}
            </div>
            <ChevronDownIcon className='h-7' />
          </div>
        );
      })}
    </div>
  );
};
export default FurtherInfo;
