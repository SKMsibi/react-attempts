import React, { Component } from 'react';
import Header from './header';
import SpeechToText from 'speech-to-text';
import Loading from './loader';
import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faBullhorn, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import '../App.css';

class SpellIt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayWord: false,
            word: "",
            loading: false,
            recording: false,
            language: "en-ZA"
        };
        this.sayWord = this.sayWord.bind(this)
    }
    sayWord() {

        const onAnythingSaid = text => {
            this.setState({ loading: true })
            return `${text}`
        };
        const onFinalised = text => {
            if (text.length <= 0) {
            } else {
                var word = `${text}`;
                this.setState({ word: `${word.split(" ")[0]}`, loading: false, displayWord: true });
                return word[0];
            }
        }
        const listener = new SpeechToText(onAnythingSaid, onFinalised);

        this.setState({ recording: true })
        listener.startListening();
        setTimeout(() => {
            listener.stopListening();
            this.setState({ recording: false })
        }, 2500);
    }
    render() {
        return (
            <div>
                <Header text={"Record your word "} icon={<FontAwesomeIcon icon={faBullhorn} />} />
                <div className="spell-it">
                    {this.state.loading && (
                        <Loading />
                    )}
                    {!this.state.loading && this.state.displayWord && (
                        <h3 className="word">your word is: <u>{this.state.word}</u></h3>
                    )}
                    <button className={this.state.recording ? "btn btn-success" : "btn btn-primary"} id="record-btn" onClick={this.sayWord}>{this.state.recording ? "Recording..." : "Record"} <FontAwesomeIcon icon={faMicrophone} /></button>
                    <Link to="/startpage"><button className="btn btn-danger" id="back-btn">back <FontAwesomeIcon icon={faSignOutAlt} /></button></Link>
                </div>
            </div>

        );
    }
}

export default SpellIt;
