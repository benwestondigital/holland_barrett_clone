import { SearchIcon } from '@heroicons/react/outline';

const StoreAvailability = () => {
  return (
    <div className='border-y pb-10 my-2 mb-8'>
      <h3 className='text-lg font-bold py-4'>Store availability</h3>
      <div className='flex items-center justify-between'>
        <input
          type='text'
          placeholder='Enter your postcode'
          className='w-full border-r-0 focus:outline-none'
        />
        <div className='border-y border-r p-2 border-[#6B7280]'>
          <SearchIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
export default StoreAvailability;
