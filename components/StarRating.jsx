import { StarIcon } from '@heroicons/react/solid';

const StarRating = ({ stars, numReviews }) => {
  const fiveStars = [...Array(5)].map(x => 0);

  return (
    <div className='flex items-center' data-test='store-rating'>
      {fiveStars.map((s, index) => {
        return (
          <StarIcon
            key={index}
            className={`h-5 ${
              stars >= index + 1 ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        );
      })}
      <span className='text-xs text-gray-400'>({numReviews})</span>
    </div>
  );
};
export default StarRating;
