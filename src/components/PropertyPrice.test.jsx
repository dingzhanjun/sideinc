import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyPrice from './PropertyPrice';

describe('<PropertyPrice />', () => {
  it('Renders <PropertyPrice /> formatted price correctly', () => {
    const price = 12104869;
    render(<PropertyPrice price={price} />);
    expect(screen.getByText('$12,104,869')).toBeInTheDocument();
    expect(screen.queryByTestId('property-price')).toBeInTheDocument();
  });
});
