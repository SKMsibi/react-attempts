import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../App.css";
import LastPlayed from './last-played-sound';
class MachineKeys extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
            lastPlayed: ""
        }
        this.playSound = this.playSound.bind(this);
    }
    playSound(soundName) {
        this.setState({ lastPlayed: soundName })
    }

    render() {
        return (
            <div className="container" id="machine-container">

                {
                    this.state.buttons.map(item => {
                        return <button className="btn btn-success" key={this.state.buttons.indexOf(item)} onClick={() => this.playSound(this.props.machineSoundNames[this.state.buttons.indexOf(item)])}>{item}</button>
                    })
                }
                <LastPlayed soundName={this.state.lastPlayed} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        machineSoundNames: state.machineReducer.currentMachineSounds
    };
}
export default connect(mapStateToProps)(MachineKeys);