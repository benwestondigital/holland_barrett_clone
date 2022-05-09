import {
  UserIcon,
  LocationMarkerIcon,
  GiftIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import { BsBasket3 } from 'react-icons/bs';
import NavIcon from './NavIcon';

const NavBar = () => {
  return (
    <div className='flex items-center'>
      <NavIcon Icon={UserIcon} text='Account' />
      <NavIcon Icon={LocationMarkerIcon} text='Store' />
      <NavIcon Icon={GiftIcon} text='Rewards' />
      <NavIcon Icon={HeartIcon} text='Favourites' />

      <div className='group text-white flex h-12 w-12 flex-col mx-2 cursor-pointer items-center relative'>
        <BsBasket3 size={20} className='h-6 mx-auto ' />
        <p className='group-hover:underline text-xs font-semibold'>Basket</p>
        <div className='absolute top-0 left-6 bg-hbred h-4 w-4 rounded-full'>
          {/* TODO: Use number of items in basket for this number */}
          <p className='absolute bottom-[-1.5px] right-1 text-sm font-semibold'>
            1
          </p>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
