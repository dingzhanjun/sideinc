import React from 'react';
import { formatListDate } from 'utils/formatter';

const PropertyListDate = ({ listDate }) => {
  const dateString = formatListDate(listDate);
  return (
    <div className="list-date" data-testid="property-list-date">
      {`Listed: ` + dateString}
    </div>
  );
};

export default PropertyListDate;
