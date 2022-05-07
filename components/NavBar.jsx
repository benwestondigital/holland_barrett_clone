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
      <NavIcon Icon={BsBasket3} text='Basket' />
    </div>
  );
};
export default NavBar;
