import React from 'react'
import Input from './Input'

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Surname: "", Email: "" };
    }
    changingState(category, newValue) {
        this.setState({ category: newValue });
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Name:{this.state.Name}</p>
                <Input changingState={this.changingState.bind(this)} category="Name" />
                <p>Surname:{this.state.Surname}</p>
                <Input changingState={this.changingState.bind(this)} category="Surname" />
                <p>Email:{this.state.Email}</p>
                <Input changingState={this.changingState.bind(this)} category="Email" />
            </div>
        )
    }
}