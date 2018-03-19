import React from 'react';
import Header from './Header'
import Footer from './Footer' ;

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "write something" };
    }
    changingState(newValue) {
        this.setState({ newValue });
    }
    render() {
        console.log("state in layout", this.state)
        return (
            <div>
                <Header changingState={this.changingState.bind(this)} title={this.state.name} />
                <Footer title={this.state.name} />
            </div>
        );
    }
}