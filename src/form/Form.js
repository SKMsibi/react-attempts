import React from 'react'
import Input from './Input'

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Surname: "", Email: "" };
    }
    changingState(value, newValue) {
        this.setState({ value: newValue });
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Name:{this.state.Name}</p>
                <Input changingState={this.changingState.bind(this)} value="Name" />
                <p>Surname:{this.state.Surname}</p>
                <Input changingState={this.changingState.bind(this)} value="Surname" />
                <p>Email:{this.state.Email}</p>
                <Input changingState={this.changingState.bind(this)} value="Email" />
            </div>
        )
    }
}