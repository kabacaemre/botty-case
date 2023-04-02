import React from 'react';

// Redux Connect
import { connect } from 'react-redux';

import './assets/css/style.scss'; // global style css

import Home from './layouts/HomeLayout';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default connect()(App);
