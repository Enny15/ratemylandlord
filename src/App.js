import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Rating from './Components/RatingComponent/RatingComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/rating" component={Rating} />
        </div>
      </Router>
    );
  }
}

export default App;
