import * as func from './game-layout';
import React, { Component } from 'react';
import DisplayDetails from './display-details';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      currentGamePoints: this.props.containerData.userInformation.currentGamePoints,
      currentLifeRemaining: this.props.containerData.userInformation.currentLifeRemaining,
      weapons: [],
      enemies: [],
      health: [],
      boss: "",
      doorway: {},
      playerPosition: this.props.containerData.userInformation.userLocation,
      pathWaysToMove: this.props.containerData.gameProperties.pathWays,
      stage: this.props.containerData.gameProperties.stage + 1,
      currentAvailableWeapon: this.props.containerData.gameProperties.allAvailableWeapons[this.props.containerData.gameProperties.stage],
    }
  }
  componentDidMount() {
    this.loadGrid();
    document.onkeydown = this.checkKey;
  }
  loadGrid() {
    var randomItems = func.placeAtRandom(this.state.pathWaysToMove);
    if (this.props.containerData.gameProperties.stage + 1 === 4) {
      var newBoss = func.createTheBoss(randomItems.enemies);
      randomItems.enemies = newBoss.newEnemies
      this.setState({ boss: newBoss.boss })
    }
    var grid = func.changeUserLocation(this.state.pathWaysToMove, this.state.playerPosition, this.state.playerPosition, randomItems.enemies, randomItems.weapon, randomItems.health, this.state.currentLifeRemaining, this.state.currentAvailableWeapon, randomItems.doorWay);
    var girdToDisplay = func.generateGameLayout(grid.newGrid, this.state.enemies, this.state.weapons, this.state.health, randomItems.doorWay, this.state.boss, this.props.containerData.gameProperties.stage + 1)
    this.setState({ pathWaysToMove: grid.newGrid, playerPosition: grid.newPosition, grid: girdToDisplay, enemies: grid.newEnemies, weapons: grid.leftWeapons, health: grid.healthLeft, currentLifeRemaining: grid.newLifeStatus, doorway: grid.doorWay, stage: this.props.containerData.gameProperties.stage + 1 });
  }
  checkKey = (event) => {
    console.log(this.state)
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
    var path = this.state.grid.filter(element => element.pathWay === true)
    var newGrid = func.changeUserLocation(path, this.state.playerPosition, keyPresses, this.state.enemies, this.state.weapons, this.state.health, this.state.currentLifeRemaining, this.state.currentAvailableWeapon, this.state.doorway, this.state.boss, this.state.currentGamePoints);
    var ToDisplayGrid = func.generateGameLayout(newGrid.newGrid, newGrid.newEnemies, newGrid.leftWeapons, newGrid.healthLeft, newGrid.doorWay, newGrid.boss);
    this.setState({ pathWaysToMove: newGrid.newGrid, playerPosition: newGrid.newPosition, grid: ToDisplayGrid, enemies: newGrid.newEnemies, weapons: newGrid.leftWeapons, health: newGrid.healthLeft, currentLifeRemaining: newGrid.newLifeStatus, doorway: newGrid.doorWay, currentGamePoints: newGrid.gamePoints });
    if (newGrid.doorWay.usedOrNot) {
      this.props.nextStage(this.props.containerData.gameProperties.stage, this.props.containerData.gameProperties.allStages);
      this.props.passUserDetailsToNextStage(this.state.currentLifeRemaining);
      this.props.updateGamePoints(this.state.currentGamePoints)
      this.setState({ currentAvailableWeapon: this.props.containerData.gameProperties.allAvailableWeapons[this.state.stage], pathWaysToMove: this.props.containerData.gameProperties.pathWays, playerPosition: { xAxis: 6, yAxis: 3 } })
      this.loadGrid();
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="App">{this.state.grid.map(element => {
              if (element.occupied === "User") {
                element.displayPart = <span id="user">&#x25A9;</span>;
              } else if (element.occupied === "Enemy") {
                element.displayPart = <span id="enemy">&#x26C7;</span>;
              } else if (element.occupied === "Weapon") {
                element.displayPart = <span id="weapon">&#9874;</span>;
              } else if (element.occupied === "Health") {
                element.displayPart = <span id="health">&#9749;</span>;
              } else if (element.occupied === "DoorWay") {
                element.displayPart = <span id="doorway">&#9961;</span>;
              } else if (element.occupied === "Boss") {
                element.displayPart = <span>B</span>
              }
              return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}><p>{element.displayPart}</p></span>
            })}
            </div>
          </div>
          <div className="col-md-6">
            <DisplayDetails allInfo={this.state} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { containerData: state };
}
const mapDispatchToProps = dispatch => ({
  nextStage: (newStageNumber, stages) => dispatch(actions.changeStage(newStageNumber, stages)),
  passUserDetailsToNextStage: (life) => dispatch(actions.changeLifeLeft(life)),
  updateGamePoints: (points) => dispatch(actions.changeCurrentPoints(points))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
