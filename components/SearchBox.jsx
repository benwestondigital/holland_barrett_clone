import { SearchIcon } from '@heroicons/react/outline';

const SearchBox = () => {
  return (
    <div className='hidden md:flex'>
      <form
        className='flex grow items-center text-hbgreen max-w-sm'
        data-testid='search-form'
      >
        <input
          type='search'
          placeholder='Search products, brands, articles'
          autoComplete='off'
          data-testid='search-input'
          maxLength={128}
          className='p-2 rounded-l-md placeholder-hbgreen outline-none border-0 grow'
        />
        {/* TODO: set up button useState to enable when typed */}
        <button type='submit' disabled className='bg-white p-2 rounded-r-md'>
          <SearchIcon className='w-6 h-6' />
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
