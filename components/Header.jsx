import HeaderLogo from './HeaderLogo';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import Categories from './Categories';

const Header = () => {
  return (
    <div className='bg-hbgreen text-white'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between p-2 space-x-40'>
          <HeaderLogo />
          <SearchBox />
          <NavBar />
        </div>
        <Categories />
      </div>
      <div className='h-12 bg-[#f7403a] flex items-center justify-between hover:bg-[#ffb7ae]'>
        <div className='w-10/12 flex items-center justify-center'>
          <p className='font-semibold text-lg pl-64'>
            Buy 1 get 1 half price | On 100s of your favourites {'>'}
          </p>
        </div>
        <div className='flex items-center justify-end'>
          <p className='text-xs pr-4'>T&Cs apply.</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
