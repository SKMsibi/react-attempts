import React from 'react';
import Header from './Header'
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "", login: true };
    }
    changingState(newValue) {
        this.setState({ name: newValue });
    }
    render() {
        return (
            <div>
                <Header changingState={this.changingState.bind(this)} title={this.state.name} />
                {this.testing()}
            </div>
        );
    }
}