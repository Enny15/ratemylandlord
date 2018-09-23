import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Components/HeaderComponent/HeaderComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Header location="home" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {2+2}
        </p>
      </div>
    );
  }
}

export default App;
