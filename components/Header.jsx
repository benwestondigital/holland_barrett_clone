import HeaderLogo from './HeaderLogo';
import NavBar from './NavBar';
import SearchBox from './SearchBox';
import NavCategories from './NavCategories';

const Header = () => {
  return (
    <div className='bg-hbgreen text-white pt-2' data-testid='header'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between p-2 space-x-40'>
          <HeaderLogo />
          <SearchBox />
          <NavBar />
        </div>
        <NavCategories />
      </div>
      <div className='md:h-12 bg-hbred flex flex-col md:flex-row items-center justify-between hover:bg-hblightred h-20 cursor-pointer'>
        <div className='w-10/12 flex flex-col md:flex-row items-center justify-center'>
          <p
            className='font-semibold text-sm md:text-lg pt-2 md:pt-0 md:pl-64'
            data-testid='reduced-banner'
          >
            Buy 1 get 1 half price | On 100s of your favourites {'>'}
          </p>
        </div>
        <div className='flex items-center justify-end mb-4 md:mb-0'>
          <p className='text-xs pr-4'>T&Cs apply.</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
