import React from 'react';
import { formatPrice } from 'utils/formatter';

const PropertyPrice = ({ price }) => {
  const priceString = formatPrice(price);
  return (
    <div className="price" data-testid="property-price">
      {priceString}
    </div>
  );
};

export default PropertyPrice;
