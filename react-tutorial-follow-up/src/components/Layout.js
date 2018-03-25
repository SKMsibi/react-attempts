import React from 'react';
import Header from './Header'
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "name", login: true };
    }
    changingState(newValue) {
        this.setState({ name: newValue });
        localStorage.setItem("data", this.state)
    }
    render() {
        console.log(localStorage.getItem("data"))
        return (
            <div>
                <Header changingState={this.changingState.bind(this)} title={this.state.name} />
                {localStorage.getItem("data")}
            </div>
        );
    }
}