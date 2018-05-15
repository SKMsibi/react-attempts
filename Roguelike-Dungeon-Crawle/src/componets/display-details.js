import React, { Component } from 'react';
class DisplayDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapons: [],
            health: [],
            enemies: []
        }
    }

    render() {
        return (
            <div className="container">
            </div>
        )
    }
}
export default DisplayDetails;