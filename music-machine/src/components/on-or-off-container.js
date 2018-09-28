import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/allActions';

export class OnOrOff extends Component {
    constructor() {
        super()
        this.state = {
            status: false
        }
    }
    switchOnOrOff() {
        var newStatus = this.state.status ? false : true;
        this.setState({ status: newStatus })
        this.props.changeAppStatus(newStatus)
    }
    render() {
        return (
            <div id="on-or-off">
                <button id={this.state.status ? "On" : "Off"} className={this.state.status ? "btn btn-primary" : "btn btn-danger"} onClick={() => this.switchOnOrOff()} >Turn {`${this.state.status ? " Off" : " On"}`}</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { store: state.machineReducer.AppStatus };
}
const mapDispatchToProps = dispatch => ({
    changeAppStatus: (status) => dispatch(action.switchAppOnOrOff(status))
})
export default connect(mapStateToProps, mapDispatchToProps)(OnOrOff);