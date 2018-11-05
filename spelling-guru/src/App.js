import React, { Component } from 'react';
import Header from './components/header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faBook, faSmile } from '@fortawesome/free-solid-svg-icons';
import './App.css';
library.add(faMagic, faBook, faSmile)
class App extends Component {
  moveToStartPage() {
    console.log("object")
    this.props.history.push("/startpage");
  }
  render() {
    return (
      <div className="App">
        <Header text={"Welcome to Spelling Guru"} />
        <h2 className="quote">Where spelling is made to be easy and simple.</h2>
        <div className="art">
          <span className="spelling-icons"><FontAwesomeIcon icon={faMagic} /></span>
          <span className="spelling-icons"><FontAwesomeIcon icon={faBook} /></span>
          <span className="spelling-icons"><FontAwesomeIcon icon={faSmile} /></span>
        </div>
        <button onClick={() => this.moveToStartPage()} className="btn btn-primary" id="startBtn">Start</button>
      </div>

    );
  }
}

export default App;
