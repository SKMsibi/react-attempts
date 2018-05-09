import React, { Component } from 'react';
import { generateGameLayout, changeUserLocation } from "./game-layout"
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      weapons: [{ xAxis: 1, yAxis: 2 }, { xAxis: 5, yAxis: 4 }, { xAxis: 6, yAxis: 6 }],
      enemies: [{ xAxis: 2, yAxis: 3 }, { xAxis: 6, yAxis: 7 }, { xAxis: 9, yAxis: 1 }],
      playerPosition: { xAxis: 6, yAxis: 3 },
      pathWaysToMove:
        [{ xAxis: 1, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 4, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 8, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 8, pathWay: true, occupied: null },
        { xAxis: 8, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 7, pathWay: true, occupied: null }]
    }
  }

  componentDidMount() {
    var grid = changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, this.state.playerPosition, this.state.enemies, this.state.weapons)
    this.setState({ pathWaysToMove: grid.newGrid, playerPosition: grid.newPosition, grid: generateGameLayout(grid.newGrid, this.state.enemies, this.state.weapons), enemies: grid.newEnemies, weapons: grid.leftWeapons });
    document.onkeydown = this.checkKey;
  }
  checkKey = (event) => {
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
    var newGrid = changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, keyPresses, this.state.enemies, this.state.weapons)
    this.setState({ pathWaysToMove: newGrid.newGrid, playerPosition: newGrid.newPosition, grid: generateGameLayout(newGrid.newGrid, this.state.enemies, this.state.weapons), enemies: newGrid.newEnemies, weapons: newGrid.leftWeapons });
  }
  render() {
    console.log("weaponFound", this.state)
    return (
      <div className="App">
        {this.state.grid.map(element => {
          if (element.occupied === "User") {
            element.occupied = <p>&#x25A9;</p>;
          } else if (element.occupied === "Enemy") {
            element.occupied = <p>&#x25B6;</p>;
          } else if (element.occupied === "Weapon") {
            element.occupied = <p>&#9672;</p>;
          }
          return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}><p>{element.occupied}</p></span>
        })}
      </div>
    );
  }
}
export default App;