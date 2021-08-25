import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import PropertyList from 'pages/PropertyList';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container" data-testid="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={PropertyList} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
