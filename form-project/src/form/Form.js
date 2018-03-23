import React from 'react'
import Input from './Input'
import Table from './Table'

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Surname: "", Email: "" };
    }
    changingStateSurname(newValue) {
        this.setState({ Surname: newValue });
    }
    changingStateEmail(newValue) {
        this.setState({ Email: newValue });
    }
    changingStateName(newValue) {
        this.setState({ Name: newValue });
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Name:</p>
                <Input changingState={this.changingStateName.bind(this)} category="Name" />
                <p>Surname:</p>
                <Input changingState={this.changingStateSurname.bind(this)} category="Surname" />
                <p>Email:</p>
                <Input changingState={this.changingStateEmail.bind(this)} category="Email" />
                <br />
                <Table data={this.state} />
            </div>
        )
    }
}