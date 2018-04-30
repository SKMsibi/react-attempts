import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import { generateNextGeneration } from "./generation-generator";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [], aliveCells: [], generationNumber: 0, gameStatus: "On" }
    }
    componentDidMount() {
        var results = generateNextGeneration();
        this.setState({ grid: results.gridDisplay, aliveCells: results.aliveCells, generationNumber: 1, gameStatus: "Off" })
    }
    recursiveGenerationGenerator() {
        var count = 1;
        this.setState({ gameStatus: "On" })
        var generationLoop = setInterval(() => {
            var nextGeneration = generateNextGeneration(this.state.aliveCells);
            this.setState({ grid: nextGeneration.gridDisplay, aliveCells: nextGeneration.aliveCells, generationNumber: count })
            if (this.state.aliveCells.length === 0) {
                this.setState({ gameStatus: "Over" })
                clearInterval(generationLoop)
            } else if (this.state.gameStatus === "paused") {
                clearInterval(generationLoop)
            }
            count += 1;
        }, 1000);

    }
    bringToLifeOrTakeAwayLIfe(cell) {
        var positionOfCell = this.state.grid.indexOf(cell);
        if (cell.status) {
            this.state.grid[positionOfCell].status = false;
            var positionInAlive = this.state.aliveCells.indexOf(this.state.aliveCells.find(element => element.xAxis === cell.xAxis && element.yAxis === cell.yAxis));

            this.state.aliveCells.splice(positionInAlive, positionInAlive + 1)
            console.log("removing items", cell, this.state.aliveCells, positionInAlive)
        } else {
            this.state.grid[positionOfCell].status = true;
            this.state.aliveCells.push(this.state.grid[positionOfCell]);
        }
        this.setState({ grid: this.state.grid, aliveCells: this.state.aliveCells })
    }

    clearGrid() {
        this.state.grid.forEach(element => {
            if (element.status === true) {
                element.status = false;
            }
            this.setState({ grid: this.state.grid, aliveCells: [] }
            )
        })
    }
    render() {
        console.log(this.state.aliveCells)
        return (
            <div className="container">
                <div id="gameDetails">
                    <button className='btn btn-primary' id="pauseOrPlay" onClick={() => this.recursiveGenerationGenerator(this.state.generationNumber)}>Start</button>
                    <span>Generation Number: {this.state.generationNumber}</span>
                    <button className='btn btn-warning' id="pauseOrPlay" onClick={() => { return this.setState({ gameStatus: "paused" }) }}>Pause</button>
                    <span>Alive cells: {this.state.aliveCells.length}</span>
                    <button className='btn btn-danger' id="pauseOrPlay" onClick={this.clearGrid.bind(this)}>Clear</button>
                    <span>Game: {this.state.gameStatus}</span>
                </div>
                <div id="grid">
                    {this.state.grid.map(gridCell => {
                        return <button key={this.state.grid.indexOf(gridCell)} id={`${gridCell.status}`} onClick={() => this.bringToLifeOrTakeAwayLIfe(gridCell)}></button>
                    })}
                </div>
            </div>
        )
    }
}
const app = document.getElementById("app")
ReactDom.render(<Cell />, app);