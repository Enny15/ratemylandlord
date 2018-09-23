import React, { Component } from 'react';
import Header from './Components/HeaderComponent/HeaderComponent';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="search-div">
          <SearchBar />
        </div>
        <div className="button-div text-center">
            <button type="button" className="btn btn-item">RATE A ROOM</button>
            <Link to="/searchResult">
            <button type="button" className="btn btn-item">RENT A ROOM</button>
            </Link>
            <button type="button" className="btn btn-item">POST/SELL A ROOM</button>
        </div>
      </div>
    );
  }
}

export default Home;
