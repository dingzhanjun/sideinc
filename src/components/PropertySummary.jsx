import React from 'react';
import { formatArea, formatBathroom } from 'utils/formatter';

const PropertySummary = ({ bathsFull, bathsHalf, bedrooms, area }) => {
  const beds = bedrooms + ' BR';
  const baths = formatBathroom(bathsFull, bathsHalf) + ' Bath';
  const footage = formatArea(area) + ' Sq Ft';
  return (
    <div
      data-testid="property-summary"
      className="summary"
    >{`${beds} | ${baths} | ${footage}`}</div>
  );
};

export default PropertySummary;
