import React, { Component } from 'react';
export default class DisplayGrid extends Component {
    render() {
        return (
            <div id="grid">
                {this.props.grid.map(element => {
                    return <span key={this.props.grid.indexOf(element)} id={element.occupied}>{element.occupied}</span>
                })}
            </div>
        )
    }
}