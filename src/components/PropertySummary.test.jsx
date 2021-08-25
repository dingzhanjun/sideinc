import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertySummary from './PropertySummary';

describe('<PropertySummary />', () => {
  it('Renders <PropertySummary /> correctly', () => {
    const bathsFull = 2;
    const bathsHalf = 3;
    const bedrooms = 4;
    const area = 4567;
    render(
      <PropertySummary
        bathsFull={bathsFull}
        bathsHalf={bathsHalf}
        bedrooms={bedrooms}
        area={area}
      />,
    );
    expect(
      screen.getByText('4 BR | 3.5 Bath | 4600 Sq Ft'),
    ).toBeInTheDocument();

    expect(screen.queryByTestId('property-summary')).toBeInTheDocument();
  });
});
