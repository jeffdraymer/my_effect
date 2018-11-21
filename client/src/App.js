import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

//General Components used for pages 
import Navbar from './components/navbar/Navbar';
import Landing from './components/layout/Landing';

//Settings
import Settings from './components/settings/Settings';


import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container main-content">
              <Route exact path="/" component={Landing} />
              <Route exact path="/settings" component={Settings} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;