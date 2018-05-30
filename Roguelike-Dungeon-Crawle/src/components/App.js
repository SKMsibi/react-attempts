import * as func from './game-layout';
import React, { Component } from 'react';
import DisplayDetails from './display-details';
import HideRestOfGrid from './hide-rest-of-gird';
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
      hideGrid: false,
      smallGrid: []
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
    var smallG = func.showSmallGrid(newGrid.newPosition, ToDisplayGrid)
    this.setState({ pathWaysToMove: newGrid.newGrid, smallGrid: smallG, playerPosition: newGrid.newPosition, grid: ToDisplayGrid, enemies: newGrid.newEnemies, weapons: newGrid.leftWeapons, health: newGrid.healthLeft, currentLifeRemaining: newGrid.newLifeStatus, doorway: newGrid.doorWay, currentGamePoints: newGrid.gamePoints });
    if (newGrid.doorWay && newGrid.doorWay.usedOrNot) {
      this.props.nextStage(this.props.containerData.gameProperties.stage, this.props.containerData.gameProperties.allStages);
      this.props.passUserDetailsToNextStage(this.state.currentLifeRemaining);
      this.props.updateGamePoints(this.state.currentGamePoints)
      this.setState({ currentAvailableWeapon: this.props.containerData.gameProperties.allAvailableWeapons[this.state.stage], pathWaysToMove: this.props.containerData.gameProperties.pathWays, playerPosition: { xAxis: 6, yAxis: 3 } })
      this.loadGrid();
    }
  }
  render() {
    return (
      <div className="container" id="mainPage">
        <div className="row">
          {!this.state.hideGrid ?
            <div className="col-md-6">
              <div className="firstGrid">{this.state.grid.map(element => {
                if (element.occupied === "User") {
                  element.displayPart = <span id="user"><i className="em em-male-detective"></i></span>;
                } else if (element.occupied === "Enemy") {
                  element.displayPart = <span id="enemy"><i className="em em-skull"></i></span>;
                } else if (element.occupied === "Weapon") {
                  element.displayPart = <span id="weapon"><i className={this.state.currentAvailableWeapon.emoji}></i></span>;
                } else if (element.occupied === "Health") {
                  element.displayPart = <span id="health"><i class="em em-hamburger"></i></span>;
                } else if (element.occupied === "DoorWay") {
                  element.displayPart = <span id="doorway"><i className="em em-door"></i></span>;
                } else if (element.occupied === "Boss") {
                  element.displayPart = <span><i className="em em-japanese_ogre"></i> </span>
                }
                return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}><p>{element.displayPart}</p></span>
              })}
              </div>
            </div> : <HideRestOfGrid grid={this.state.smallGrid} weapon={this.state.currentAvailableWeapon.emoji} />}
          <div className="col-md-6">
            <DisplayDetails allInfo={this.state} weapon={this.state.currentAvailableWeapon.emoji} />
            <button class="btn btn-default" onClick={() => this.state.hideGrid ? this.setState({ hideGrid: false }) : this.setState({ hideGrid: true })}>{this.state.hideGrid ? "show parts of grid" : "hide parts of grid"}</button>
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