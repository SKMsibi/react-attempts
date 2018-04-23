import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import { generateNextGeneration, getAllNeighbors } from './next-generation-generator';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [] }
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

    recursiveGenerationGenerator() {
        var generationNumber = 0;
        var workedOnGeneration = [];
        var generatorLoop = setInterval(() => {
            generationNumber++;
            workedOnGeneration = generateNextGeneration(this.state.grid);
            this.setState({ grid: workedOnGeneration, generationNumber: generationNumber })
            var existenceOfAliveCell = this.state.grid.find(element => { return element.status === true });

            if (generationNumber === 5) {
                clearInterval(generatorLoop);
                this.setState({ gameStatus: "Over" });
            } else if (existenceOfAliveCell === undefined) {
                clearInterval(generatorLoop);
                this.setState({ gameStatus: "Over" });
            }
        }, 2000);
    }
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.recursiveGenerationGenerator()}>Start</button>
                <span>{this.state.generationNumber}</span>
                <span>Game: {this.state.gameStatus}</span>
                <div id="grid">
                    {
                        this.state.grid.map(gridCell => {
                            return <button key={this.state.grid.indexOf(gridCell)} id={`${gridCell.status}`} onClick={() => this.bringToLifeOrTakeAwayLIfe(gridCell)}></button>
                        })
                    }
                </div>
            </div>
        )
    }
}
const app = document.getElementById("app")
ReactDom.render(<Cell />, app);