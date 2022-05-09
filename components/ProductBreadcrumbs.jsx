import Link from 'next/link';

const ProductBreadcrumbs = ({ name }) => {
  const productBreadcrumbs = [
    'Home',
    'Sports Nutrition',
    'Protein',
    'Whey Protein',
  ];
  return (
    <div className='text-sm my-4 mx-12'>
      <div className='flex items-center'>
        {productBreadcrumbs.map(item => {
          return (
            <div key={item}>
              <Link href='/'>
                <span className='text-hbgreen mr-4 hover:underline cursor-pointer'>
                  {item}
                </span>
              </Link>
              <span className='text-xl mr-2'>{'>'}</span>
            </div>
          );
        })}
        <p>{name}</p>
      </div>
    </div>
  );
};
export default ProductBreadcrumbs;
