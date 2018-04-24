import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import { generateNextGeneration, getAllNeighbors } from './next-generation-generator';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [], generationNumber: 0, gameStatus: "On" }
        this.recursiveGenerationGenerator = this.recursiveGenerationGenerator.bind(this);
    }
    componentDidMount() {
        this.setState({ grid: generateNextGeneration(), generationNumber: 1, gameStatus: "On" })
    }
    bringToLifeOrTakeAwayLIfe(cell) {
        var positionOfCell = this.state.grid.indexOf(cell);
        if (cell.status) {
            this.state.grid[positionOfCell].status = false;
        } else {
            this.state.grid[positionOfCell].status = true;
        }
        this.setState({ grid: this.state.grid })
    }

    recursiveGenerationGenerator(genNumber = 1, generation = this.state.grid, gameStatus = "On") {
        var generationNumber = genNumber;
        var workedOnGeneration = generation;
        this.setState({ gameStatus: gameStatus })
        var generatorLoop = setInterval(() => {
            generationNumber++;
            workedOnGeneration = generateNextGeneration(this.state.grid);
            this.setState({ grid: workedOnGeneration, generationNumber: generationNumber })
            var existenceOfAliveCell = this.state.grid.find(element => { return element.status === true });
            console.log("gameStatus", this.state.gameStatus)
            if (this.state.gameStatus === "paused") {
                clearInterval(generatorLoop);
            }
            if (generationNumber === 20) {
                clearInterval(generatorLoop);
                this.setState({ gameStatus: "Over" });
            } else if (existenceOfAliveCell === undefined) {
                clearInterval(generatorLoop);
                this.setState({ gameStatus: "Over" });
            }
        }, 1000);
    }
    render() {
        return (
            <div className="container">
                <div id="gameDetails">
                    <button className='btn btn-primary' id="pauseOrPlay" onClick={() => this.recursiveGenerationGenerator(this.state.generationNumber)}>Start</button>
                    <span>{this.state.generationNumber}</span>
                    <span>Game: {this.state.gameStatus}</span>
                    <button className='btn btn-warning' id="pauseOrPlay" onClick={() => { return this.setState({ gameStatus: "paused" }) }}>Pause</button>
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