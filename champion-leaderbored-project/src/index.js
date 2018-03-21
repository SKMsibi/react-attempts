import React from "react";
import ReactDom from 'react-dom';
import MainLayout from './Camper-Leaderboard/mainLayout';
import AllTimeData from './Camper-Leaderboard/allTimeData'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IndexRoute } from 'react-router'

const app = document.getElementById("app")
ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={MainLayout} />
            <Route exact path="/AllTimeData" component={AllTimeData} />
        </div>
    </Router>,
    app);