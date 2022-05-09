import { customerService, aboutUs, trending, brands } from '../utils';
const Footer = () => {
  return (
    <div className='border-t-4 border-hbgreen'>
      <div className='container hidden md:flex items-start justify-between px-12 mb-12 pt-8'>
        {/* Payment / Social Links Section */}
        {/* Site Links Section */}
        <div>
          <h3 className='font-bold mb-2'>Customer Service</h3>
          {customerService.map(item => {
            return (
              <div key={item} className='flex flex-col'>
                <ul>
                  <li className='text-sm hover:underline text-hbgreen py-1 cursor-pointer'>
                    {item}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className='font-bold mb-2'>About Us</h3>
          {aboutUs.map(item => {
            return (
              <div key={item} className='flex flex-col'>
                <ul>
                  <li className='text-sm hover:underline text-hbgreen py-1 cursor-pointer'>
                    {item}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className='font-bold mb-2'>Trending</h3>
          {trending.map(item => {
            return (
              <div key={item} className='flex flex-col'>
                <ul>
                  <li className='text-sm hover:underline text-hbgreen py-1 cursor-pointer'>
                    {item}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className='font-bold mb-2'>Brands</h3>
          {brands.map(item => {
            return (
              <div key={item} className='flex flex-col'>
                <ul>
                  <li className='text-sm hover:underline text-hbgreen py-1 cursor-pointer'>
                    {item}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* Legal Info Section */}
      <div className='py-2 my-3 border-hbgreen w-11/12 mx-auto'>
        <div className='border-y py-2 my-3 border-hbgreen'>
          <p className='text-center text-xs'>
            Copyright © Holland & Barrett Retail Limited, 2022. All rights
            reserved. hollandandbarrett.com is a trading name of Holland &
            Barrett Retail Limited,. Registered office: Samuel Ryder House,
            Barling Way, Nuneaton, Warwickshire CV10 7RH. Registered in England:
            company no. 2758955. Registered VAT no. 211727395.
          </p>
        </div>
        <p className='text-center text-xs'>
          This site is protected by reCAPTCHA and the Google{' '}
          <span className='text-hbgreen hover:underline'>Privacy Policy</span>{' '}
          and{' '}
          <span className='text-hbgreen hover:underline'>Terms of Service</span>{' '}
          apply
        </p>
      </div>
    </div>
  );
};
export default Footer;
