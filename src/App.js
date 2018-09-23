import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/HeaderComponent/HeaderComponent';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="button-div text-center">
            <button type="button" className="btn btn-item">RATE A ROOM</button>
            <button type="button" className="btn btn-item">RENT A ROOM</button>
            <button type="button" className="btn btn-item">POST/SELL A ROOM</button>
        </div>
      </div>
    );
  }
}

export default App;
