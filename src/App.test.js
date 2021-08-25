import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

jest.mock('components/Navbar', () => {
  return {
    __esModule: true,
    default: () => {
      // if you exporting component as default
      return <div data-testid="navbar" />;
    },
  };
});

jest.mock('pages/Home', () => {
  return {
    __esModule: true,
    default: () => {
      // if you exporting component as default
      return <div data-testid="home-page" />;
    },
  };
});

jest.mock('pages/PropertyList', () => {
  return {
    __esModule: true,
    default: () => {
      // if you exporting component as default
      return <div data-testid="property-list" />;
    },
  };
});

describe('<APP>', () => {
  it('renders correctly', () => {
    render(<App />, { wrapper: MemoryRouter });
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  it('renders home page correctly', () => {
    const history = createMemoryHistory();
    render(<App />, { wrapper: MemoryRouter });
    const page = screen.getByTestId('home-page');
    expect(page).toBeInTheDocument();
  });

  it('renders property list correctly', () => {
    const history = createMemoryHistory();
    history.push('/properties');
    render(
      <MemoryRouter initialEntries={['/properties/']}>
        <App />
      </MemoryRouter>,
    );
    const page = screen.getByTestId('property-list');
    expect(page).toBeInTheDocument();
  });
});
