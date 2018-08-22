import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../App.css";
import * as actions from '../actions/allActions';
import LastPlayed from './last-played-sound';
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
    }
    render() {
        return (
            <div className="container" id="machine-container">
                {
                    this.state.buttons.map(item => {
                        return <div key={this.state.buttons.indexOf(item)}>
                            <button className="btn btn-success" onClick={() => this.playSound(this.props.machineSoundNames[this.state.buttons.indexOf(item)])}>{item}</button>
                        </div>
                    })
                }
                <LastPlayed soundName={this.props.currentSound} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        machineSoundNames: state.machineReducer.currentMachineSounds,
        status: state.machineReducer.AppStatus,
        currentSound: state.machineReducer.lastSoundPlay
    };
}
const mapDispatchToProps = dispatch => ({
    changeLastPlayed: (newSound) => dispatch(actions.changeLastPlayedSound(newSound))
})
export default connect(mapStateToProps, mapDispatchToProps)(MachineKeys);