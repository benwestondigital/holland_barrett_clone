import { SearchIcon } from '@heroicons/react/outline';

const Collection = () => {
  return (
    <div className='bg-white p-4 flex flex-col justify-start items-start'>
      <h3 className='font-semibold text-lg whitespace-nowrap'>
        Collection availability
      </h3>
      <div className='flex items-center justify-between mt-2'>
        <input
          type='text'
          placeholder='Enter your postcode'
          className='w-full border-r-0 rounded-l focus:outline-none grow'
        />
        <div className='border-y border-r p-2 border-[#6B7280] bg-white rounded-r'>
          <SearchIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
export default Collection;
