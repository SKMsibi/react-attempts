import React, { Component } from 'react';

export default class OnOrOff extends Component {
    constructor() {
        super()
        this.state = {
            machineStatus: false
        }
    }

    render() {
        return (
            <div className="container" id="on-or-off">
                <button>On</button>
                <button>Off</button>
            </div>
        );
    }
}