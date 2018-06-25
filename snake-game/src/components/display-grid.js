import React, { Component } from 'react';
export default class DisplayGrid extends Component {
    render() {
        return (
            <div id="grid">
                {this.props.grid.map(element => {
                    if (element.occupied === "snakeHead") {
                        element.display = <i class="em em-dragon_face"></i>;
                    }
                    else if (element.occupied === "point") {
                        element.display = <i class="em em-rat"></i>;
                    } else if (element.occupied === "snakeBody") {
                        element.display = <i class="em em-snake"></i>;
                    } else {
                        element.display = element.occupied
                    }
                    return <span key={this.props.grid.indexOf(element)} id={element.occupied}>{element.display}</span>
                })}
            </div>
        )
    }
}