import React from "react";
import ReactDom from 'react-dom';
import Archives from './pagesReactRouter/archives';
import Featured from "./pagesReactRouter/featured";
import Layout from './pagesReactRouter/initail'
import Settings from './pagesReactRouter/settings'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IndexRoute } from 'react-router'

const app = document.getElementById("app")
ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={Layout} />
            <Route exact path="/archives" component={Archives} />
            <Route exact path="/settings" component={Settings} />
        </div>
    </Router>,
    app);