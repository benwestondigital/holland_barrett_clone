import { navCategories } from '../utils';

const NavCategories = () => {
  return (
    <div className='md:flex items-center justify-between mt-2 hidden'>
      {navCategories.map(type => {
        return (
          <div key={type} className='p-2 hover:bg-white group'>
            <p className='text-white group-hover:text-hbgreen font-semibold text-sm cursor-pointer'>
              {type}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default NavCategories;
