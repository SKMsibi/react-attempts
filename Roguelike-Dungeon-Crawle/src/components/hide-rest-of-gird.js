import React, { Component } from 'react';
export default class HideRestOfGrid extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="secondGrid">{this.props.grid.map(element => {
                    if (element.occupied === "User") {
                        element.displayPart = <span id="user"><i className="em em-male-detective"></i></span>;
                    } else if (element.occupied === "Enemy") {
                        element.displayPart = <span id="enemy"><i className="em em-skull"></i></span>;
                    } else if (element.occupied === "Weapon") {
                        element.displayPart = <span id="weapon"><i className={this.props.weapon}></i></span>;
                    } else if (element.occupied === "Health") {
                        element.displayPart = <span id="health"><i class="em em-ambulance"></i></span>;
                    } else if (element.occupied === "DoorWay") {
                        element.displayPart = <span id="doorway"><i className="em em-door"></i></span>;
                    } else if (element.occupied === "Boss") {
                        element.displayPart = <span><i className="em em-japanese_ogre"></i> </span>
                    }
                    return <span key={this.props.grid.indexOf(element)} id={`${element.pathWay}`} className={element.view}><p>{element.displayPart}</p></span>
                })}</div>
            </div>
        )
    }
}