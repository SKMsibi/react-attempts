import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OnOrOff from './components/on-or-off-container';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Drum Machine</h1>
        </header>
        <p className="App-intro">
          <OnOrOff />
        </p>
      </div>
    );
  }
}

export default App;
