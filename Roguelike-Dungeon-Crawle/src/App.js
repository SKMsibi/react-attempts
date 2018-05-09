import React, { Component } from 'react';
import { generateGameLayout, changeUserLocation } from "./game-layout"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { keyPresses: [], grid: [], highestAndLowest: {}, playerPosition: { xAxis: 6, yAxis: 3 }, pathWaysToMove: [{ xAxis: 1, yAxis: 1, pathWay: true }, { xAxis: 1, yAxis: 2, pathWay: true }, { xAxis: 1, yAxis: 3, pathWay: true }, { xAxis: 1, yAxis: 4, pathWay: true }, { xAxis: 1, yAxis: 5, pathWay: true }, { xAxis: 2, yAxis: 1, pathWay: true }, { xAxis: 2, yAxis: 2, pathWay: true }, { xAxis: 2, yAxis: 3, pathWay: true }, { xAxis: 2, yAxis: 4, pathWay: true }, { xAxis: 2, yAxis: 5, pathWay: true }, { xAxis: 3, yAxis: 1, pathWay: true }, { xAxis: 3, yAxis: 2, pathWay: true }, { xAxis: 3, yAxis: 3, pathWay: true }, { xAxis: 3, yAxis: 4, pathWay: true }, { xAxis: 3, yAxis: 5, pathWay: true }, { xAxis: 4, yAxis: 3, pathWay: true }, { xAxis: 5, yAxis: 1, pathWay: true }, { xAxis: 5, yAxis: 2, pathWay: true }, { xAxis: 5, yAxis: 3, pathWay: true }, { xAxis: 5, yAxis: 4, pathWay: true }, { xAxis: 6, yAxis: 1, pathWay: true }, { xAxis: 6, yAxis: 2, pathWay: true }, { xAxis: 6, yAxis: 3, pathWay: true }, { xAxis: 6, yAxis: 4, pathWay: true }, { xAxis: 6, yAxis: 5, pathWay: true }, { xAxis: 6, yAxis: 6, pathWay: true }, { xAxis: 6, yAxis: 7, pathWay: true }, { xAxis: 6, yAxis: 8, pathWay: true }, { xAxis: 7, yAxis: 5, pathWay: true }, { xAxis: 7, yAxis: 6, pathWay: true }, { xAxis: 7, yAxis: 7, pathWay: true }, { xAxis: 7, yAxis: 8, pathWay: true }, { xAxis: 8, yAxis: 5, pathWay: true }, { xAxis: 9, yAxis: 1, pathWay: true }, { xAxis: 9, yAxis: 2, pathWay: true }, { xAxis: 9, yAxis: 3, pathWay: true }, { xAxis: 9, yAxis: 4, pathWay: true }, { xAxis: 9, yAxis: 5, pathWay: true }, { xAxis: 9, yAxis: 6, pathWay: true }, { xAxis: 9, yAxis: 7, pathWay: true }, { xAxis: 10, yAxis: 1, pathWay: true }, { xAxis: 10, yAxis: 2, pathWay: true }, { xAxis: 10, yAxis: 3, pathWay: true }, { xAxis: 10, yAxis: 4, pathWay: true }, { xAxis: 10, yAxis: 5, pathWay: true }, { xAxis: 10, yAxis: 6, pathWay: true }, { xAxis: 10, yAxis: 7, pathWay: true }] }
  }

  componentDidMount() {
    this.setState({ grid: generateGameLayout(this.state.pathWaysToMove) })
    document.onkeydown = this.checkKey;
  }
  checkKey = (event) => {

    console.log(event)
    var keyPresses = this.state.playerPosition;
    if (event.key === "ArrowUp") {
      keyPresses = { xAxis: keyPresses.xAxis - 1, yAxis: keyPresses.yAxis }
    } else if (event.key === "ArrowDown") {
      keyPresses = { xAxis: keyPresses.xAxis + 1, yAxis: keyPresses.yAxis }
    } else if (event.key === "ArrowLeft") {
      keyPresses = { xAxis: keyPresses.xAxis, yAxis: keyPresses.yAxis - 1 }
    } else if (event.key === "ArrowRight") {
      keyPresses = { xAxis: keyPresses.xAxis, yAxis: keyPresses.yAxis + 1 }
    }
    var cellFound = this.state.grid.find(element => { return element.xAxis === keyPresses.xAxis && element.yAxis === keyPresses.yAxis });
    if (cellFound !== undefined && cellFound.pathWay) {
      this.setState({ playerPosition: keyPresses })
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.grid.map(element => {
          return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}>{element.occupied}</span>
        })}
      </div>
    );
  }
}

export default App;
