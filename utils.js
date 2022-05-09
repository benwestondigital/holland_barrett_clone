export const displayPrice = price => {
  if (price > 999) {
    return `£${price / 100}.00`;
  }
  return `£${price / 100}`;
};

export const pricePer100g = (price, size) => {
  return `£${(price / size).toFixed(2)}/100g`;
};
