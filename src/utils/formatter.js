import { usStates } from './constants';

export const formatArea = area => {
  return area <= 100 ? area.toString() : (area / 100).toFixed(0) + '00';
};

export const formatPrice = (price, prefix = '$') => {
  return prefix + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatBathroom = (bathsFull, bathsHalf) => {
  if (bathsHalf === 0) {
    return bathsFull.toString();
  }

  const total = bathsFull + bathsHalf * 0.5;

  return total.toFixed(bathsHalf % 2 ? 1 : 0);
};

export const formatAddress = propertyAddress => {
  if (!propertyAddress) {
    return '';
  }
  const shortStateName = propertyAddress.state
    ? usStates[propertyAddress.state.toUpperCase()]
    : '';
  return `${propertyAddress.streetNumberText} ${propertyAddress.streetName}, ${propertyAddress.city}, ${shortStateName}`;
};

export const formatListDate = dateString => {
  if (!dateString) {
    return '';
  }
  try {
    const theDate = new Date(dateString);
    const month = theDate.getMonth() + 1;
    const day = theDate.getDate();
    const year = theDate
      .getFullYear()
      .toString()
      .substr(2, 2);
    return `${month}/${day}/${year}`;
  } catch {
    return null;
  }
};
