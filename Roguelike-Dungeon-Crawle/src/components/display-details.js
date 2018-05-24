import React, { Component } from 'react';
class DisplayDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: this.props.allInfo.health,
            weapon: "",
            enemies: this.props.allInfo.enemies
        }
    }
    render() {
        return (
            <div className="container">
                <div>User</div>
                <div><span id="user">&#x25A9;</span></div>
                <div>DoorWay</div>
                <div><span id="doorway">&#9961;</span></div>
                <div>Enemies</div>
                <div><span id="enemy">&#x26C7;</span>: {this.props.allInfo.enemies.length}</div>
                <div>Weapon</div>
                <div><span id="weapon">&#9874;</span>: {this.props.allInfo.weapons.length === 0 ? this.props.allInfo.currentAvailableWeapon.title : ""}</div>
                <div>Health</div>
                <div><span id="health">&#9749;</span>: {this.props.allInfo.health.length}</div>
                <div>Life : {this.props.allInfo.currentLifeRemaining}</div>
                <div>Stage: {this.props.allInfo.stage}</div>
            </div>
        )
    }
}
export default DisplayDetails;