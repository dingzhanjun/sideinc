import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyList from './PropertyList';
import { TEST_PROPERTY_ADDRESS, TEST_PROPERTY } from 'utils/constants-test';

let data = [];
let isLoading = false;
let isError = false;

const makeData = () => ({
  data,
  isLoading,
  isError,
});

const func = jest.fn();
const makeFunc = () => {
  return func;
};

jest.mock('hooks/datahook', () => ({
  useDataApi: () => {
    return [makeData(), makeFunc()];
  },
}));

jest.mock('components/Property', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="mocked-property" />;
    },
  };
});

describe('<PropertyList />', () => {
  beforeEach(() => {
    data = [];
    isLoading = false;
    isError = false;
  });

  it('Renders correctly where there is not data', () => {
    render(<PropertyList />);

    expect(screen.getByText('Property List')).toBeInTheDocument();
    expect(screen.queryAllByText('Loading...').length).toEqual(0);
    expect(screen.queryAllByText('Error loading data').length).toEqual(0);
    expect(func).toBeCalled();
  });

  it('Renders correctly where data is still loading', () => {
    data = [];
    isLoading = true;
    isError = false;

    render(<PropertyList />);

    expect(screen.getByText('Property List')).toBeInTheDocument();
    expect(screen.queryAllByText('Loading...').length).toEqual(1);
    expect(screen.queryAllByText('Error loading data').length).toEqual(0);
    expect(func).toBeCalled();
  });

  it('Renders correctly when there is error', () => {
    data = [];
    isLoading = false;
    isError = true;

    render(<PropertyList />);

    expect(screen.getByText('Property List')).toBeInTheDocument();
    expect(screen.queryAllByText('Loading...').length).toEqual(0);
    expect(screen.queryAllByText('Error loading data').length).toEqual(1);
    expect(func).toBeCalled();
  });

  it('Renders correctly when there is data', () => {
    const property = {
      listingId: 1,
      photos: ['1.png', '2.png'],
      listPrice: 345000,
      property: TEST_PROPERTY,
      address: TEST_PROPERTY_ADDRESS,
      listDate: '2021-05-23T18:50:30.184391Z',
    };

    data = [
      { ...property },
      { ...property, listingId: 2 },
      { ...property, listingId: 3 },
      { ...property, listingId: 4 },
    ];

    render(<PropertyList />);

    expect(screen.getByText('Property List')).toBeInTheDocument();
    expect(screen.queryAllByText('Loading...').length).toEqual(0);
    expect(screen.queryAllByText('Error loading data').length).toEqual(0);
    expect(screen.queryAllByTestId('mocked-property').length).toEqual(4);
    expect(func).toBeCalled();
  });
});
