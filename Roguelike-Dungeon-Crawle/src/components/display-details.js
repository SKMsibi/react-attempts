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
            <div   id="GameDetails">
                <div>User : <span id="user"><i className="em em-male-detective"></i></span></div>
                <div>Life : {this.props.allInfo.currentLifeRemaining}</div>
                <div>Game points : {this.props.allInfo.currentGamePoints}xp</div>
                <div>level : {this.props.allInfo.level}</div>
                <div>Stage : {this.props.allInfo.stage}</div>
                <div>Enemies : <span id="enemy"><i className="em em-skull"></i></span> {this.props.allInfo.enemies.length}</div>
                <div>Weapon : <span id="weapon"><i className={this.props.allInfo.weapons.length === 0 ? this.props.weapon : null}></i></span> {this.props.allInfo.weapons.length === 0 ? this.props.allInfo.currentAvailableWeapon.title : ""}</div>
                <div>Health : <span id="health"><i className="em em-hamburger"></i></span> {this.props.allInfo.health.length}</div>
                <div>DoorWay : <span id="doorway"><i className="em em-door"></i></span></div>
                <div>Boss(stage 4) : <span id="doorway"><i className="em em-japanese_ogre"></i></span></div>
            </div>
        )
    }
}
export default DisplayDetails;