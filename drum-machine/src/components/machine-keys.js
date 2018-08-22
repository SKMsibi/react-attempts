import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../App.css";
import * as actions from '../actions/allActions';
import LastPlayed from './last-played-sound';
import marimba1 from './sounds/marimba1.wav';

class MachineKeys extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
        }
        this.playSound = this.playSound.bind(this);
    }
    playSound(soundName) {
        this.props.changeLastPlayed(soundName);
        var sound = new Audio(marimba1);
        sound.play();
    }
    render() {
        return (
            <div id="keys-info">
                <div id="machine-keys">
                    {
                        this.state.buttons.map(item => {
                            return <button key={this.state.buttons.indexOf(item)} id="single-key" className="btn btn-success" onClick={() => this.playSound(this.props.machineSoundNames[this.state.buttons.indexOf(item)])}>{item}</button>
                        })
                    }
                </div>
                <div id="display-info">
                    <h1>{this.props.name}</h1>
                    <LastPlayed soundName={this.props.currentSound} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        machineSoundNames: state.machineReducer.currentMachineSounds,
        status: state.machineReducer.AppStatus,
        name: state.machineReducer.currentMachineName,
        currentSound: state.machineReducer.lastSoundPlay
    };
}
const mapDispatchToProps = dispatch => ({
    changeLastPlayed: (newSound) => dispatch(actions.changeLastPlayedSound(newSound))
})
export default connect(mapStateToProps, mapDispatchToProps)(MachineKeys);