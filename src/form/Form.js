import React from 'react'
import Input from './Input'
import Table from './Table'

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Surname: "", Email: "" };
    }
    changingState(valueName, newValue) {
        this.setState({ valueName: newValue });
        console.log(this.state)
    }
    // changingStateSurname(newValue) {
    //     this.setState({ Surname: newValue });
    // }
    // changingStateEmail(newValue) {
    //     this.setState({ Email: newValue });
    // }
    // changingStateEmail(newValue) {
    //     this.setState({ Email: newValue });
    // }
    render() {
        return (
            <div>
                <p>Name:</p>
                <Input changingState={this.changingState.bind(this)} category="Name" />
                <p>Surname:</p>
                <Input changingState={this.changingState.bind(this)} category="Surname" />
                <p>Email:</p>
                <Input changingState={this.changingState.bind(this)} category="Email" />
                <br />
                <Table 
                data={this.state} />
            </div>
        )
    }
}