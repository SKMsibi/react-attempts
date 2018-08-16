import React, { Component } from 'react';
import "../App.css";
export default class LastPlayed extends Component {
    render() {
        return (
            <div className="container" id="machine-last-played">
                <h1>{this.props.soundName}</h1>
            </div>
        );
    }
}