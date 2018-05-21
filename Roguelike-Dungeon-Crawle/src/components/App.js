import * as func from './game-layout';
import React, { Component } from 'react';
import DisplayDetails from './display-details';
import { connect } from 'react-redux';
import * as user from '../actions/actions';
import '../App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      weapons: this.props.containerData.gameProperties.accessibleWeapon,
      enemies: this.props.containerData.gameProperties.enemies,
      health: this.props.containerData.gameProperties.health,
      playerPosition: this.props.containerData.userInformation.userLocation,
      pathWaysToMove: this.props.containerData.gameProperties.pathWays,
      stage: this.props.containerData.gameProperties.stage,
      currentWeapon: this.props.containerData.gameProperties.allAvailableWeapons[this.props.containerData.gameProperties.stage]
    }
  }

  componentDidMount() {
    var randomItems = func.placeAtRandom(this.state.pathWaysToMove);
    var grid = func.changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, this.state.playerPosition, randomItems.enemies, randomItems.weapon, randomItems.health);
    var girdToDisplay = func.generateGameLayout(grid.newGrid, this.state.enemies, this.state.weapons, this.state.health)
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
    var newGrid = func.changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, keyPresses, this.state.enemies, this.state.weapons, this.state.health);
    var ToDisplayGrid = func.generateGameLayout(newGrid.newGrid, this.state.enemies, this.state.weapons, this.state.health);
    this.setState({ pathWaysToMove: newGrid.newGrid, playerPosition: newGrid.newPosition, grid: ToDisplayGrid, enemies: newGrid.newEnemies, weapons: newGrid.leftWeapons, health: newGrid.healthLeft });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { containerData: state };
}
export default connect(mapStateToProps)(App);
