import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavButton from './FavButton';

describe('<FavButton />', () => {
  it('Renders <FavButton /> correctly when favorite', () => {
    render(<FavButton favorite={'1'} />);
    expect(screen.queryByTestId('liked')).toBeInTheDocument();
  });

  it('Renders <FavButton /> correctly when not favorite', () => {
    render(<FavButton />);
    expect(screen.queryByTestId('not-liked')).toBeInTheDocument();
  });

  it(' <FavButton /> calls onClick when favorite', async () => {
    const handleClick = jest.fn(() => {});
    render(<FavButton onClick={handleClick} favorite={1} />);

    const selection = await screen.findByTestId('liked');
    fireEvent.click(selection);

    expect(handleClick).toHaveBeenCalled();
  });

  it(' <FavButton /> calls onClick when not favorite', async () => {
    const handleClick = jest.fn(() => {});
    render(<FavButton onClick={handleClick} />);

    const selection = await screen.findByTestId('not-liked');
    fireEvent.click(selection);

    expect(handleClick).toHaveBeenCalled();
  });
});
