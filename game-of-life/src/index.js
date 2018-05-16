import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import SpeedButtons from './speed-buttons';
import { generateNextGeneration } from "./generation-generator";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [], aliveCells: [], generationNumber: 1, gameStatus: "On", speed: 1000 }
    }
    componentDidMount() {
        var results = generateNextGeneration();
        this.setState({ grid: results.gridDisplay, aliveCells: results.aliveCells, generationNumber: 1, gameStatus: "Off" })
        this.recursiveGenerationGenerator(this.state.generationNumber);
    }
    recursiveGenerationGenerator() {
        var count = this.state.generationNumber < 1 && this.state.aliveCells.length > 0 ? 1 : this.state.generationNumber;
        var currentSpeed = this.state.speed;
        this.setState({ gameStatus: "On" })
        var generationLoop = setInterval(() => {
            var nextGeneration = generateNextGeneration(this.state.aliveCells);
            this.setState({ grid: nextGeneration.gridDisplay, aliveCells: nextGeneration.aliveCells, generationNumber: count })
            if (this.state.aliveCells.length === 0) {
                this.setState({ gameStatus: "Over", generationNumber: 0 })
                clearInterval(generationLoop)
            } else if (this.state.gameStatus === "paused") {
                clearInterval(generationLoop)
            } else if (currentSpeed !== this.state.speed) {
                clearInterval(generationLoop)
            }
            count += 1;
        }, this.state.speed);
    }
    bringToLifeOrTakeAwayLIfe(cell) {
        var positionOfCell = this.state.grid.indexOf(cell);
        if (cell.status) {
            this.state.grid[positionOfCell].status = false;
            var positionInAlive = this.state.aliveCells.indexOf(this.state.aliveCells.find(element => element.xAxis === cell.xAxis && element.yAxis === cell.yAxis));

            this.state.aliveCells.splice(positionInAlive, positionInAlive + 1)
        } else {
            this.state.grid[positionOfCell].status = true;
            this.state.aliveCells.push(this.state.grid[positionOfCell]);
        }
        this.setState({ grid: this.state.grid, aliveCells: this.state.aliveCells })
    }
    changeSpeed(time) {
        this.setState({ speed: time });
        setTimeout(() => {
            this.recursiveGenerationGenerator();
        }, 1000);
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
        return (
            <div className="container">
                <div id="gameDetails">
                    <button className='btn btn-primary' id="pauseOrPlay" onClick={() => this.recursiveGenerationGenerator()}>Start</button>
                    <span>Generation Number: {this.state.generationNumber}</span>
                    <button className='btn btn-warning' id="pauseOrPlay" onClick={() => this.setState({ gameStatus: "paused" })}>Pause</button>
                    <span>Alive cells: {this.state.aliveCells.length}</span>
                    <button className='btn btn-danger' id="pauseOrPlay" onClick={() => this.clearGrid()}>Clear</button>
                    <span>Game: {this.state.gameStatus}</span>
                </div>
                <div className="row">
                    <div className="col-md-8" id="grid">
                        {this.state.grid.map(gridCell => {
                            return <button key={this.state.grid.indexOf(gridCell)} id={`${gridCell.status}`} onClick={() => this.bringToLifeOrTakeAwayLIfe(gridCell)}></button>
                        })}
                    </div>
                    <div className="col-md-4">
                        <SpeedButtons speedFunc={this.changeSpeed.bind(this)} />
                    </div>
                </div>
            </div >
        )
    }
}
const app = document.getElementById("app")
ReactDom.render(<Cell />, app);