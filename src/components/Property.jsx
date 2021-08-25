import React from 'react';
import { Link } from 'react-router-dom';
import { formatAddress } from 'utils/formatter';
import PropertyListDate from './PropertyListDate';
import PropertyPrice from './PropertyPrice';
import PropertySummary from './PropertySummary';
import FavButton from './FavButton';
import './Property.scss';

const Property = ({
  photos,
  listPrice,
  property,
  listingId,
  favorite,
  address,
  listDate,
  onToggleFavorite,
}) => {
  const photo1st = photos && photos[0];
  const fullAddress = formatAddress(address);
  const { bathsFull, bathsHalf, bedrooms, area } = property;

  const handleToggleFavorite = () => {
    onToggleFavorite && onToggleFavorite(listingId, !favorite);
  };

  return (
    <div className="property-container" data-testid={`property-${listingId}`}>
      <div className="fav-btn-container">
        <FavButton favorite={favorite} onClick={handleToggleFavorite} />
      </div>
      <img src={photo1st} className="photo" alt="property photo" />
      <div className="details">
        <PropertySummary
          bathsFull={bathsFull}
          bathsHalf={bathsHalf}
          bedrooms={bedrooms}
          area={area}
        />
        <PropertyPrice price={listPrice} />
        <span className="address">{fullAddress}</span>
        <PropertyListDate listDate={listDate} />
      </div>
    </div>
  );
};

export default Property;
