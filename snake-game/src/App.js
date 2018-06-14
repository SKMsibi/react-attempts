import React, { Component } from 'react';
import DisplayGrid from './components/display-grid';
import { createEmptyGrid } from './snake-game-functions/create-empty-grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: createEmptyGrid()
    }
  }

  render() {
    return (
      <div className="App">
        <DisplayGrid grid={this.state.grid} />
      </div>
    );
  }
}

export default App;
