import React, { Component } from 'react';
// import logo from './logo.svg';
// import Header from './Components/HeaderComponent/HeaderComponent';
import MainLayout from './MainLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout location="searchresults" />
      </div>
    );
  }
}

export default App;
