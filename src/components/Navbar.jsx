import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="properties">Properties</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Side Inc.',
};

export default Navbar;
