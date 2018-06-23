import React, { Component } from 'react';
import DisplayGrid from './components/display-grid';
import DisplayGameDetails from './components/display-game-details';
import { createEmptyGrid, createRandomPointPosition, updateGrid, growSnake, moveSnake } from './snake-game-functions/game-functions';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [],
      pointLocation: {},
      snake: [{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeHead" }],
      movingDirection: "right",
      gameStatus: "on",
      gamePoints: 0
    };
    this.changeDirection = this.changeDirection.bind(this);
  };
  componentWillReceiveProps() {
  }
  componentDidMount() {
    document.onkeydown = this.changeDirection;
    var pointL = createRandomPointPosition(createEmptyGrid());
    var updatedGrid = updateGrid(pointL, this.state.snake, createEmptyGrid());
    this.setState({ grid: updatedGrid, pointLocation: pointL, snake: this.state.snake });
  }
  changeDirection(e) {
    var newDirection = this.state.movingDirection;
    var directionKey = e.key
    if (newDirection === "right" && directionKey === "ArrowLeft") {
      directionKey = "ArrowRight";
    } else if (newDirection === "left" && directionKey === "ArrowRight") {
      directionKey = "ArrowLeft";
    } else if (newDirection === "up" && directionKey === "ArrowDown") {
      directionKey = "ArrowUp";
    } else if (newDirection === "down" && directionKey === "ArrowUp") {
      directionKey = "ArrowDown";
    }
    switch (directionKey) {
      case "ArrowUp":
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
        newDirection = this.state.movingDirection;
        break;
    };
    this.setState({ movingDirection: newDirection })
  }
  showPoint() {
    this.setState({ gameStatus: "on" })
    var pointL = this.state.pointLocation;
    var continuousSnakeMovement = setInterval(() => {
      var snakeMoved = moveSnake(this.state.movingDirection, this.state.snake, this.state.grid, this.state.gamePoints);
      pointL = snakeMoved.snake.length > this.state.snake.length ? createRandomPointPosition(this.state.grid) : pointL;
      var updatedGrid = updateGrid(pointL, snakeMoved.snake, createEmptyGrid());
      this.setState({ pointLocation: pointL, snake: snakeMoved.snake, grid: updatedGrid, gamePoints: snakeMoved.newPoints })
      if (this.state.gameStatus === "paused") {
        clearInterval(continuousSnakeMovement)
      }
    }, 1000);
  };
  render() {
    return (
      <div className="App">
        <div>
          <DisplayGrid grid={this.state.grid} />
          <DisplayGameDetails details={this.state} />
        </div>
        <div>
          <button onClick={this.showPoint.bind(this)}>{this.state.gameStatus === "paused" ? "continue" : "Start"}</button>
          <button onClick={() => this.setState({ gameStatus: "paused" })}>Pause</button>
        </div>
      </div>
    );
  };
};
