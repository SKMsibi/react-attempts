import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../App.css";
import * as actions from '../actions/allActions';
import LastPlayed from './last-played-sound';
// import marimba from '../sounds/drum/marimba.wav';
import * as sounds from '../sounds/all-sounds';

class MachineKeys extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
        }
        this.playSound = this.playSound.bind(this);
        this.checkKey = this.checkKey.bind(this);
    }
    playSound(soundName) {
        this.props.changeLastPlayed(soundName);
        var sound = new Audio(sounds[`${soundName}`]);
        sound.play();
    }
    componentDidMount() {
        document.onkeydown = this.checkKey;
    }
    checkKey(event) {
        this.playSound(this.props.machineSoundNames[this.state.buttons.indexOf(event.key.toUpperCase())])
    }
    render() {
        return (
            <div id="keys-info">
                <div id="machine-keys" className="machine-keys">
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