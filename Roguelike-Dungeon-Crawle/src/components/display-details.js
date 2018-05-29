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
                <div>User : <span id="user">&#x25A9;</span></div>
                <div>Life : {this.props.allInfo.currentLifeRemaining}</div>
                <div>Game points : {this.props.allInfo.currentGamePoints}xp</div>
                <div>Stage : {this.props.allInfo.stage}</div>
                <div>Enemies : <span id="enemy">&#x26C7;</span> {this.props.allInfo.enemies.length}</div>
                <div>Weapon : <span id="weapon">&#9874;</span> {this.props.allInfo.weapons.length === 0 ? this.props.allInfo.currentAvailableWeapon.title : ""}</div>
                <div>Health : <span id="health">&#9749;</span> {this.props.allInfo.health.length}</div>
                <div>DoorWay : <span id="doorway">&#9961;</span></div>
            </div>
        )
    }
}
export default DisplayDetails;