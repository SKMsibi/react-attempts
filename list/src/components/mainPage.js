import React from 'react';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { login: "false" }
    }
    lifeCycle(status) {
        if (status === "true") {
            return <h2>it works</h2>
        } else {
            return <div></div>
        }
    }
    changing(hint) {
        if (hint === "true") {
            this.setState({ login: "false" })
        } else {
            this.setState({ login: "true" })
        }
    }
    handleEvent() {
        this.changing(this.state.login);
    }
    render() {
        return (
            <div>
                <h1>This is the main page</h1>
                <button onClick={this.handleEvent.bind(this)}>hide/show</button>
                {this.lifeCycle(this.state.login)}
            </div>
        )
    }
}