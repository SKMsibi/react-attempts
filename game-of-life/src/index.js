import React from "react";
import ReactDom from 'react-dom';
import './index.css';

class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.cells = [];
    }

    makeCells() {
        var i = 0;
        while (i <= 50) {
            this.cells.push(<button></button>);
            i++;
        }
    }
    render() {
        this.makeCells()
        var items = this.cells;
        return (
            { items }
        )
    }
}

const app = document.getElementById("app")
ReactDom.render(<Cell />, app);