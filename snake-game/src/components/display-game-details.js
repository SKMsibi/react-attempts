import React, { Component } from 'react';

export default class DisplayGameDetails extends Component {
    render() {
        return (
            <div>
                <h1>Game Details</h1>
                Game Status: {this.props.details.gameStatus}<br />
                Game Points: {this.props.details.gamePoints} XP<br />
                Snake Size: {this.props.details.snake.length}
                highest Score:
            </div>
        )
    }
}