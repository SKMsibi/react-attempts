import React, { Component } from 'react';
export default class SpeedButtons extends Component {
    render() {
        return (
            <table>
                <thead>
                    <td><b>change speed</b></td>
                </thead>
                <tbody>
                    <tr>
                        <button id="speedChange" onClick={() => { this.props.speedFunc(2000) }}>Slow</button>
                    </tr>
                    <tr>
                        <button id="speedChange" onClick={() => { this.props.speedFunc(1000) }}>Normal</button>
                    </tr>
                    <tr>
                        <button id="speedChange" onClick={() => { this.props.speedFunc(200) }}>Fast</button>
                    </tr>
                </tbody>
            </table>

        )
    }
}