import React, { Component } from 'react';
import DisplayGrid from './components/display-grid';
import { connect } from 'react-redux';
import { createEmptyGrid, createRandomPointPosition, updateGrid, growSnake, moveSnake } from './snake-game-functions/game-functions';
import * as actions from './actions/actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      pointLocation: {},
      snake: [],
      movingDirection: "right"
    };
  };
  componentWillReceiveProps() {
    console.log("styling", this.props.containerData.gameProperties.direction);

    this.setState({
      grid: this.props.containerData.gameProperties.grid,
      pointLocation: this.props.containerData.gameProperties.pointLocation,
      snake: this.props.containerData.playerInformation.currentSnakeStructure,
      movingDirection: this.props.containerData.gameProperties.direction
    })
  }
  componentDidMount() {
    var pointL = createRandomPointPosition(createEmptyGrid());
    var updatedGrid = updateGrid(pointL, [{ xAxis: 3, yAxis: 0 }, { xAxis: 3, yAxis: 1 }], createEmptyGrid());
    this.props.updatePointLocation(pointL);
    this.props.changeGridLayout(updatedGrid);
    this.setState({ grid: updatedGrid, pointLocation: pointL, snake: updatedGrid.filter(item => item.occupied === "snakeBody" || item.occupied === "snakeHead") });
    document.onkeydown = this.changeDirection;
  }
  changeDirection(e) {
    var newDirection = this.state.movingDirection;
    switch (e.key) {
      case "ArrowUP":
        newDirection = "up";
        break;
      case "ArrowDown":
        newDirection = "down";
        break;
      case "ArrowRight":
        newDirection = "right";
        break;
      case "ArrowLeft":
        newDirection = "left"
        break;
      default:
        console.log("e", this.state.movingDirection)
        newDirection = this.state.movingDirection;
        break;
    };
    // this.props.changeDirection(newDirection)
  }
  showPoint() {
    this.props.updatePointLocation(pointL);
    var pointL = createRandomPointPosition(this.state.grid);
    var snakeMoving = setInterval(() => {
      var snakeMoved = moveSnake(this.state.movingDirection, this.state.snake);
      var updatedGrid = updateGrid(pointL, snakeMoved, createEmptyGrid());
      updatedGrid = updateGrid(pointL, snakeMoved, updatedGrid)
      this.props.updateSnakeStructure(snakeMoved);
      this.props.changeGridLayout(updatedGrid);
    }, 1000);
    growSnake(this.state.movingDirection, this.state.snake)
  };
  render() {
    return (
      <div className="App">
        <DisplayGrid grid={this.state.grid} />
        <button onClick={this.showPoint.bind(this)}>display</button>
      </div>
    );
  };
};
function mapStateToProps(state) {
  return { containerData: state };
};
const mapDispatchToProps = dispatch => ({
  updatePointLocation: (newLocation) => dispatch(actions.changePointLocation(newLocation)),
  updateSnakeStructure: (newSnakeStructure) => dispatch(actions.updateSnake(newSnakeStructure)),
  changeGridLayout: (newGrid) => dispatch(actions.updateGrid(newGrid)),
  changeDirection: (newDirection) => dispatch(actions.changeMovementDirection(newDirection))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
