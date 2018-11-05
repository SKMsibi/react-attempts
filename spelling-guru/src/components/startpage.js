import React, { Component } from 'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faKeyboard, faQuestion } from '@fortawesome/free-solid-svg-icons'

class StartPage extends Component {
    routingFunction(route) {
        this.props.history.push(route);
    }
    render() {
        return (
            <div>
                <Header text={"Whats next "} icon={<FontAwesomeIcon icon={faQuestion} />} />
                <div className="grid-buttons">
                    <button onClick={() => this.routingFunction("/spell")} className="btn btn-info" id="spell-btn"> Spell It  <FontAwesomeIcon icon={faMicrophone} /></button>
                    <button onClick={() => this.routingFunction("/write")} className="btn btn-warning" id="write-btn">Write it <FontAwesomeIcon icon={faKeyboard} /></button>
                </div>
            </div>
        );
    }
}
export default StartPage;
