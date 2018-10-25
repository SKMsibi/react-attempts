import React, { Component } from 'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faKeyboard, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Link } from "react-router-dom";

class StartPage extends Component {
    render() {
        return (
            <div>
                <Header text={"Whats next "} icon={<FontAwesomeIcon icon={faQuestion} />} />
                <div className="grid-buttons">
                    <Link to="/spell"><button className="btn btn-info" id="spell-btn"> Spell It  <FontAwesomeIcon icon={faMicrophone} /></button></Link>
                    <Link to="/write"><button className="btn btn-warning" id="write-btn">Write it <FontAwesomeIcon icon={faKeyboard} /></button></Link>
                </div>
            </div>
        );
    }
}
export default StartPage;
