import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Property from './Property';
import { TEST_PROPERTY, TEST_PROPERTY_ADDRESS } from 'utils/constants-test';

describe('<Property />', () => {
  const photos = ['1.png', '2.png'];
  const listPrice = 1234567;
  const listingId = 7654321;
  const listDate = '2011-05-23T18:50:30.184391';
  const handleToggleFavorite = jest.fn((id, favorite) => {});
  const property = TEST_PROPERTY;
  const address = TEST_PROPERTY_ADDRESS;

  it('Property renders', () => {
    render(
      <Property
        property={property}
        favorite={1}
        address={address}
        photos={photos}
        listDate={listDate}
        listingId={listingId}
        listPrice={listPrice}
      />,
    );
    expect(screen.queryByTestId('property-' + listingId)).toBeInTheDocument();
    expect(screen.queryByTestId('property-price')).toBeInTheDocument();
    expect(screen.queryByTestId('property-summary')).toBeInTheDocument();
    expect(screen.queryByTestId('property-list-date')).toBeInTheDocument();
    expect(screen.queryByTestId('liked')).toBeInTheDocument();
  });

  it('Property handles favorite image click when not favorite', async () => {
    render(
      <Property
        property={property}
        onToggleFavorite={handleToggleFavorite}
        address={address}
        photos={photos}
        listDate={listDate}
        listingId={listingId}
        listPrice={listPrice}
      />,
    );

    const favButton = await screen.findByTestId('not-liked');
    fireEvent.click(favButton);

    expect(handleToggleFavorite).toBeCalledWith(listingId, true);
  });

  it('Property handles favorite image click when favorite', async () => {
    render(
      <Property
        property={property}
        onToggleFavorite={handleToggleFavorite}
        address={address}
        photos={photos}
        listDate={listDate}
        listingId={listingId}
        listPrice={listPrice}
        favorite={1}
      />,
    );

    const favButton = await screen.findByTestId('liked');
    fireEvent.click(favButton);

    expect(handleToggleFavorite).toBeCalledWith(listingId, false);
  });
});
