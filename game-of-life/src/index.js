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
        this.setState({ grid: generateNextGeneration() })
    }
    bringToLifeOrTakeAwayLIfe(cell) {
        var positionOfCell = this.state.grid.indexOf(cell);
        if (cell.status) {
            this.state.grid[positionOfCell].status = false;
        } else {
            this.state.grid[positionOfCell].status = true;
        }
        this.setState({ grid: this.state.grid })
        console.log("positionOfCell", positionOfCell, cell);
    }

    recursiveGenerationGenerator() {
        var generationNumber = 0;
        var workedOnGeneration = [];
        var generatorLoop = setInterval(() => {
            workedOnGeneration = generateNextGeneration(this.state.grid);
            this.setState({ grid: workedOnGeneration })
            generationNumber++;
        }, 3000);
        if (generationNumber === 5) {
            clearTimeout(generatorLoop);
        }
    }
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.recursiveGenerationGenerator()}>Start</button>
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