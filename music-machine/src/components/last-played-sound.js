import React, { Component } from 'react';
import "../App.css";
export default class LastPlayed extends Component {
    render() {
        return (
            <div id="machine-last-played" className="machine-last-played">
                <h2>{this.props.soundName}</h2>
            </div>
        );
    }
}