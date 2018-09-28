import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/allActions';
export class AllMachines extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMachine: props.name,
            machineSounds: props.sounds
        }
        this.changeCurrentMachine = this.changeCurrentMachine.bind(this)
    }
    changeCurrentMachine(chosen) {
        if (this.props.status) {
            this.setState({ currentMachine: chosen })
            this.props.changeMachine(chosen);
            this.props.changeSounds(chosen);
        }
    }
    componentWillReceiveProps() {
        this.setState({ currentMachine: this.props.name, machineSounds: this.props.sounds })
    }
    render() {
        return (
            <div id="machine-container">
                <button id={this.props.name === "Guitar" ? "Picked" : "notPicked"} className={this.props.name === "Guitar" ? "btn btn-warning" : "btn btn-default"} onClick={() => this.changeCurrentMachine("Guitar")}>Guitar</button>
                <button id={this.props.name === "Drum" ? "Picked" : "notPicked"} className={this.props.name === "Drum" ? "btn btn-warning" : "btn btn-default"} onClick={() => this.changeCurrentMachine("Drum")}>Drum</button>
                <button id={this.props.name === "Piano" ? "Picked" : "notPicked"} className={this.props.name === "Piano" ? "btn btn-warning" : "btn btn-default"} onClick={() => this.changeCurrentMachine("Piano")}>Piano</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { status: state.machineReducer.AppStatus, name: state.machineReducer.currentMachineName, sounds: state.machineReducer.currentMachineSounds };
}
const mapDispatchToProps = dispatch => ({
    changeMachine: (name) => dispatch(action.changeCurrentMachine(name)),
    changeSounds: (machine) => dispatch(action.changeCurrentMachineSounds(machine))
})
export default connect(mapStateToProps, mapDispatchToProps)(AllMachines);