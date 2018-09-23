import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import SearchResult from './SearchResult.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/searchResult" component={SearchResult} />
        </div>
      </Router>
    );
  }
}

export default App;
