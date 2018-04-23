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
        this.setState({ grid: generateNextGeneration(), generationNumber: 0 })
    }
    bringToLife(cell) {
        var positionOfCell = this.state.grid.indexOf(cell);
        if (cell.status) {
            this.state.grid[positionOfCell].status = false;
        } else {
            this.state.grid[positionOfCell].status = true;
        }
        this.setState({ grid: this.state.grid })
        console.log("positionOfCell", positionOfCell, cell);
    }


    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.recursiveGenerationGenerator()}>Start</button>

                <div id="grid">
                    {
                        this.state.grid.map(gridCell => {
                            return <button key={this.state.grid.indexOf(gridCell)} id={`${gridCell.status}`} ></button>
                        })
                    }
                </div>
            </div>
        )
    }
}

const app = document.getElementById("app")
ReactDom.render(<Cell />, app);