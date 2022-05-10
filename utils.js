export const displayPrice = price => {
  if (price > 999) {
    return `£${price / 100}.00`;
  }
  return `£${price / 100}`;
};

export const pricePer100g = (price, size) => {
  return `£${(price / size).toFixed(2)}/100g`;
};

export const totalPrice = basket => {
  let displayedPrice = basket[0].price;
  if (basket.length > 1) {
    displayedPrice = basket.reduce((a, b) => a + b.price, 0);
  }

  return (Math.round(displayedPrice) / 100);
};

/* Nav */
export const navCategories = [
  'Vitamins & Supplements',
  'Food & Drink',
  'Sports Nutrition',
  'Vegan',
  'Natural Beauty',
  'Weight Management',
  'Offers',
];

/* Home */
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

/* Footer */
export const customerService = [
  'Help Centre',
  'Track your order',
  'My account',
  'Store locator',
  'Home Delivery',
  'Click & Collect',
  'Returns',
  'International Delivery',
  'Student Discount',
  'Product Recall',
];
export const aboutUs = [
  'Who we are',
  'Working at Holland & Barrett',
  'Press releases',
  'Corporate Website',
  'Privacy & cookie policy',
  'Terms & conditions',
  'Holland & Barrett International',
  'Tax Strategy',
  'Modern Slavery Statement',
  'Supplying Holland & Barrett',
  'Our support for Ukraine',
  'B-Corps at H&B',
];
export const trending = [
  'Your recommended daily steps by age',
  'Sea moss health benefits',
  'Manuka honey guide',
  'What are sleep gummies',
  'Dealing with anxiety',
  'Probiotics for women',
  'How to choose the best multivitamin for you',
];
export const brands = [
  'View All Brands',
  'Holland & Barrett',
  'Floradix',
  'Bootea',
  'Dr Organic',
  'Manuka Doctor',
  'Manuka Pharm',
  'Jacob Hooy',
];