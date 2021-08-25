import React from 'react';
import { render, screen} from '@testing-library/react';
import PropertyListDate from './PropertyListDate';

describe('<PropertyListDate />', () => {
  it('Renders <PropertyListDate /> formatted price correctly', () => {
    const date = '2021-05-23T18:50:30.184391Z';
    render(<PropertyListDate listDate={date} />);
    expect(screen.getByText('Listed: 5/23/21')).toBeInTheDocument();
    expect(screen.queryByTestId('property-list-date')).toBeInTheDocument();
  });
});
