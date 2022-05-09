export const displayPrice = price => {
  if (price > 999) {
    return `£${price / 100}.00`;
  }
  return `£${price / 100}`;
};

export const pricePer100g = (price, size) => {
  return `£${(price / size).toFixed(2)}/100g`;
};

export const navCategories = [
  'Vitamins & Supplements',
  'Food & Drink',
  'Sports Nutrition',
  'Vegan',
  'Natural Beauty',
  'Weight Management',
  'Offers',
];

export const categories = [
  'Food & Drink',
  'Informed Sport',
  'Sports Nutrition',
  'Subscribe & Save Favourites',
  'Vegan',
  'Weight Management',
];

export const filterBy = [
  'Free From',
  'Brand',
  'Goal',
  'Sport',
  'Promotion',
  'Flavour Group',
  'Rating',
  'Range',
  'Price',
  'Format',
  'Size-ml',
  'Size-g',
  'New In',
  'Availability',
];
