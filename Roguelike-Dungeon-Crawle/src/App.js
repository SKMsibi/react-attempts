import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { grid: [], pathWaysToMove: [{ xAxis: 1, yAxis: 1, pathWay: true }, { xAxis: 1, yAxis: 2, pathWay: true }, { xAxis: 1, yAxis: 3, pathWay: true }, { xAxis: 1, yAxis: 4, pathWay: true }, { xAxis: 1, yAxis: 5, pathWay: true }, { xAxis: 2, yAxis: 1, pathWay: true }, { xAxis: 2, yAxis: 2, pathWay: true }, { xAxis: 2, yAxis: 3, pathWay: true }, { xAxis: 2, yAxis: 4, pathWay: true }, { xAxis: 2, yAxis: 5, pathWay: true }, { xAxis: 3, yAxis: 1, pathWay: true }, { xAxis: 3, yAxis: 2, pathWay: true }, { xAxis: 3, yAxis: 3, pathWay: true }, { xAxis: 3, yAxis: 4, pathWay: true }, { xAxis: 3, yAxis: 5, pathWay: true }, { xAxis: 4, yAxis: 3, pathWay: true }, { xAxis: 5, yAxis: 1, pathWay: true }, { xAxis: 5, yAxis: 2, pathWay: true }, { xAxis: 5, yAxis: 3, pathWay: true }, { xAxis: 5, yAxis: 4, pathWay: true }, { xAxis: 6, yAxis: 1, pathWay: true }, { xAxis: 6, yAxis: 2, pathWay: true }, { xAxis: 6, yAxis: 3, pathWay: true }, { xAxis: 6, yAxis: 4, pathWay: true }, { xAxis: 6, yAxis: 5, pathWay: true }, { xAxis: 6, yAxis: 6, pathWay: true }, { xAxis: 6, yAxis: 7, pathWay: true }, { xAxis: 6, yAxis: 8, pathWay: true }, { xAxis: 7, yAxis: 5, pathWay: true }, { xAxis: 7, yAxis: 6, pathWay: true }, { xAxis: 7, yAxis: 7, pathWay: true }, { xAxis: 7, yAxis: 8, pathWay: true }, { xAxis: 8, yAxis: 5, pathWay: true }, { xAxis: 8, yAxis: 6, pathWay: true }, { xAxis: 8, yAxis: 7, pathWay: true }, { xAxis: 8, yAxis: 8, pathWay: true }, { xAxis: 9, yAxis: 1, pathWay: true }, { xAxis: 9, yAxis: 2, pathWay: true }, { xAxis: 9, yAxis: 3, pathWay: true }, { xAxis: 9, yAxis: 4, pathWay: true }, { xAxis: 9, yAxis: 5, pathWay: true }, { xAxis: 9, yAxis: 6, pathWay: true }, { xAxis: 9, yAxis: 7, pathWay: true }, { xAxis: 10, yAxis: 1, pathWay: true }, { xAxis: 10, yAxis: 2, pathWay: true }, { xAxis: 10, yAxis: 3, pathWay: true }, { xAxis: 10, yAxis: 4, pathWay: true }, { xAxis: 10, yAxis: 5, pathWay: true }, { xAxis: 10, yAxis: 6, pathWay: true }, { xAxis: 10, yAxis: 7, pathWay: true }], highestAndLowest: {}, playerPosition: { xAxis: 5, yAxis: 4 } }
  }
  getHighestAndLowest(arrayObj) {
    var onlyX = [];
    var onlyY = [];
    arrayObj.forEach(element => {
      onlyX.push(element.xAxis);
      onlyY.push(element.yAxis);
    });
    return { lowestX: onlyX.sort()[0], lowestY: onlyY.sort()[0], highestX: onlyX.sort()[onlyX.length - 1], highestY: onlyY.sort()[onlyY.length - 1] };
  }
  componentDidMount() {
    var gridTemp = [];
    var lowestAndHighest = this.getHighestAndLowest(this.state.pathWaysToMove)
    for (let index = 0; index <= 10; index++) {
      for (let secondIndex = 0; secondIndex <= 9; secondIndex++) {
        gridTemp.push({ xAxis: index, yAxis: secondIndex, pathWay: false });
      }
    }
    this.state.pathWaysToMove.forEach(element => {
      var itemFound = gridTemp.find(item => item.xAxis === element.xAxis && item.yAxis === element.yAxis);
      if (itemFound) {
        gridTemp[gridTemp.indexOf(itemFound)].pathWay = true;
      }
    })
    this.setState({ grid: gridTemp })
  }
  pla
  render() {
    return (
      <div className="App">
        {this.state.grid.map(element => {
          return <span key={this.state.grid.indexOf(element)} id={`${element.pathWay}`}>__</span>
        })}
      </div>
    );
  }
}

export default App;
