import React, { Component } from 'react';
import { generateGameLayout, changeUserLocation } from "./game-layout";
import * as stage from './game-stage';
import DisplayDetails from './display-details';
import { connect } from 'react-redux';
import * as user from '../actions/actions';
import '../App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      weapons: [{ xAxis: 1, yAxis: 2 }, { xAxis: 5, yAxis: 4 }, { xAxis: 6, yAxis: 6 }],
      enemies: [{ xAxis: 2, yAxis: 3 }, { xAxis: 6, yAxis: 7 }, { xAxis: 9, yAxis: 1 }],
      health: [{ xAxis: 6, yAxis: 2 }, { xAxis: 9, yAxis: 4 }],
      playerPosition: { xAxis: 6, yAxis: 3 },
      pathWaysToMove: stage.stageOne
    }
  }

  componentDidMount() {

    var grid = changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, this.state.playerPosition, this.state.enemies, this.state.weapons, this.state.health);
    var girdToDisplay = generateGameLayout(grid.newGrid, this.state.enemies, this.state.weapons, this.state.health)
    this.setState({ pathWaysToMove: grid.newGrid, playerPosition: grid.newPosition, grid: girdToDisplay, enemies: grid.newEnemies, weapons: grid.leftWeapons, health: grid.healthLeft });
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
    var newGrid = changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, keyPresses, this.state.enemies, this.state.weapons, this.state.health);
    var ToDisplayGrid = generateGameLayout(newGrid.newGrid, this.state.enemies, this.state.weapons, this.state.health);
    this.setState({ pathWaysToMove: newGrid.newGrid, playerPosition: newGrid.newPosition, grid: ToDisplayGrid, enemies: newGrid.newEnemies, weapons: newGrid.leftWeapons, health: newGrid.healthLeft });
  }
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="col-md-6">
          <div className="App">{this.state.grid.map(element => {
            if (element.occupied === "User") {
              element.occupied = <span id="user">&#x25A9;</span>;
            } else if (element.occupied === "Enemy") {
              element.occupied = <span id="enemy">&#x26C7;</span>;
            } else if (element.occupied === "Weapon") {
              element.occupied = <span id="weapon">&#9874;</span>;
            } else if (element.occupied === "Health") {
              element.occupied = <span id="health">&#9749;</span>;
            }
            return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}><p>{element.occupied}</p></span>
          })}
          </div>
        </div>
        <div className="col-md-6">
          <DisplayDetails weapons={this.state.weapons} health={this.state.health} enemies={this.state.enemies} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { containerData: state };
}
export default connect(mapStateToProps)(App);
