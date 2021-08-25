import React, { useEffect, useState } from 'react';
import { useDataApi } from 'hooks/datahook';
import Property from 'components/Property';
import { useWindowHeight } from '@react-hook/window-size';

import './PropertyList.scss';

const PropertyList = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataApi('', []);
  const winHeight = useWindowHeight();
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    doFetch('https://api.simplyrets.com/properties');
    const favList = localStorage.getItem('fav-properties');
    if (favList) {
      setFavorites(JSON.parse(favList));
    }
  }, [doFetch]);

  const handleToggleFavorite = (listingId, favorite) => {
    if (favorite) {
      favorites[`${listingId}`] = 1;
    } else {
      delete favorites[`${listingId}`];
    }
    const newFavs = { ...favorites };
    setFavorites(newFavs);
    localStorage.setItem('fav-properties', JSON.stringify(newFavs));
  };

  return (
    <div
      className="view-container"
      style={{ maxHeight: winHeight - 150 + 'px' }}
    >
      <div className="page-header">
        <h1 className="title">Property List</h1>
        {isError && <div className="status error">Error loading data</div>}
        {isLoading && <div className="status loading">Loading...</div>}
      </div>
      {data && (
        <ul className="property-list">
          {data.map(item => {
            const { photos, listPrice, property, address, listDate } = item;
            return (
              <li className="property-item" key={item.listingId}>
                <Property
                  photos={photos}
                  listPrice={listPrice}
                  listDate={listDate}
                  address={address}
                  property={property}
                  listingId={item.listingId}
                  favorite={favorites[`${item.listingId}`]}
                  onToggleFavorite={handleToggleFavorite}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PropertyList;
