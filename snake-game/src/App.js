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
    this.setState({
      grid: this.props.containerData.gameProperties.grid,
      pointLocation: this.props.containerData.gameProperties.pointLocation,
      snake: this.props.containerData.playerInformation.currentSnakeStructure
    })
  }
  componentDidMount() {
    var pointL = createRandomPointPosition(createEmptyGrid());
    var updatedGrid = updateGrid(pointL, [{ xAxis: 3, yAxis: 0 }, { xAxis: 3, yAxis: 1 }], createEmptyGrid());
    this.props.updatePointLocation(pointL);
    this.props.changeGridLayout(updatedGrid);
    this.setState({ grid: updatedGrid, pointLocation: pointL, snake: updatedGrid.filter(item => item.occupied === "snakeBody" || item.occupied === "snakeHead") });
    document.onkeydown = this.props.changeDirection;
  }
  showPoint() {
    var pointL = createRandomPointPosition(this.state.grid);
    var updatedGrid = updateGrid(pointL, this.state.snake, createEmptyGrid());
    this.props.updatePointLocation(pointL);
    this.props.changeGridLayout(updatedGrid);
    this.props.updateSnakeStructure(this.state.snake);
    growSnake(this.state.movingDirection, this.state.snake)
    moveSnake(this.state.movingDirection, this.state.snake);
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
