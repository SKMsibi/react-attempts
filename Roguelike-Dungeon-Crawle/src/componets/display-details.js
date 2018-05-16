import React, { Component } from 'react';
class DisplayDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: props.health,
            weapons: props.weapons,
            enemies: props.enemies
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6">User</div>
                <div className="col-md-6"><p id="user">&#x25A9;</p></div>


                <div className="col-md-6">Enemies</div>
                <div className="col-md-6"><p id="enemy">&#x26C7;</p></div>

                <div className="col-md-6">Weapon</div>
                <div className="col-md-6"><p id="weapon">&#9874;</p></div>

                <div className="col-md-6">Health</div>
                <div className="col-md-6"><p id="health">&#9749;</p></div>

            </div>
        )
    }
}
export default DisplayDetails;