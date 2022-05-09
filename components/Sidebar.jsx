import { ChevronDownIcon } from '@heroicons/react/outline';
import { categories, filterBy } from '../utils';

const Sidebar = () => {
  return (
    <div className='col-span-1'>
      <div className='border mb-3'>
        <div className='border-b'>
          <p className='font-semibold p-4'>Select Category:</p>
        </div>
        <ul className='text-sm text-hbgreen px-4 py-3'>
          {categories.map(cat => {
            return (
              <li key={cat} className='cursor-pointer hover:underline'>
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className='border'>
          <p className='font-semibold px-3 py-4'>Filter by:</p>
        </div>
        {filterBy.map(type => {
          return (
            <div
              key={type}
              className='p-3 border-x border-b cursor-pointer flex items-center justify-between'
            >
              <p className='font-semibold'>{type}</p>
              <ChevronDownIcon className='h-6 w-6' />
            </div>
          );
        })}
        <div className='px-4 py-3 font-bold'></div>
      </div>
    </div>
  );
};
export default Sidebar;
