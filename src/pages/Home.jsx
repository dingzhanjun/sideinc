import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Side React Take-home Assignment</h1>
      <p className="">
        <Link to="/properties">
          <em>Please click here to see the property list page</em>
        </Link>
      </p>
    </div>
  );
};

export default Home;
