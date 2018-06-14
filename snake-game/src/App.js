import React, { Component } from 'react';
import DisplayGrid from './components/display-grid';
import { createEmptyGrid, createRandomPointPosition, updateGrid } from './snake-game-functions/game-functions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: createEmptyGrid(),
      pointLocation: {}
    }
  }
  componentDidMount() {
    this.setState({ pointLocation: createRandomPointPosition(this.state.grid) })
  }
  showPoint() {
    this.setState({ grid: updateGrid(this.state.pointLocation) })
  }
  render() {
    return (
      <div className="App">
        <DisplayGrid grid={this.state.grid} />
        <button onClick={this.showPoint.bind(this)}>display</button>
      </div>
    );
  }
}

export default App;
