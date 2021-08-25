import React from 'react';

import heartFill from 'assets/heart-fill.svg';
import heartStroke from 'assets/heart-stroke.svg';

const FavButton = ({ onClick, favorite }) => {
  const handleClick = e => {
    e.stopPropagation();
    onClick && onClick();
  };
  return (
    <>
      {favorite && (
        <img
          data-testid="liked"
          className="fav-image"
          src={heartFill}
          onClick={handleClick}
          alt="liked"
        />
      )}
      {!favorite && (
        <img
          data-testid="not-liked"
          src={heartStroke}
          onClick={handleClick}
          alt="not liked"
        />
      )}
    </>
  );
};

export default FavButton;
