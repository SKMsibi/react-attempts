import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing-page';
import Articles from './components/articles';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/articles/:requestData" component={Articles} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
