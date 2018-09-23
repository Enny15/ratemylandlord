import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Rating from './Components/RatingComponent/RatingComponent';
import './App.css';
import SearchResult from './SearchResult.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/searchResult" component={SearchResult} />
        </div>
      </Router>
    );
  }
}

export default App;
