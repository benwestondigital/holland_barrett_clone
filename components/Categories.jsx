const Categories = () => {
  const categories = [
    'Vitamins & Supplements',
    'Food & Drink',
    'Sports Nutrition',
    'Vegan',
    'Natural Beauty',
    'Weight Management',
    'Offers',
  ];
  return (
    <div className='flex items-center justify-between mt-2 '>
      {categories.map(type => {
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
export default Categories;
