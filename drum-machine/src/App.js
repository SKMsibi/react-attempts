import React, { Component } from 'react';
import './App.css';
import OnOrOff from './components/on-or-off-container';
import AllMachines from './components/all-machines';
import MachineKeys from './components/machine-keys';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Drum Machine</h1>
        </header>
        <div className="App-intro">
          <OnOrOff />
          <AllMachines />
          <MachineKeys />
        </div>
      </div>
    );
  }
}

export default App;
