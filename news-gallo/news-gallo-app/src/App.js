import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}
// https://newsapi.org/v2/everything?q=tranding&from=2018-08-25&sortBy=publishedAt&apiKey=2de6578fa2744b27a5fa386d65a496fd

export default App;
