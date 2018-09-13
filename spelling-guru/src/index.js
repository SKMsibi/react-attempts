import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import StartPage from './components/startpage';
import SpellIt from './components/spell-it';
import WriteIt from './components/write-it';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/startpage" component={StartPage} />
            <Route path="/spell" component={SpellIt} />
            <Route path="/write" component={WriteIt} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
