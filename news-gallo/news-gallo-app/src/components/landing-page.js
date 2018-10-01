import React, { Component } from 'react';
import Header from './Header';
import Option from './options';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            shouldRedirect: false
        }
        this.eventHandler = this.eventHandler.bind(this);
        this.getNewFeed = this.getNewFeed.bind(this);
    }
    getNewFeed() {
        this.setState({ shouldRedirect: true });
    }
    eventHandler(event) {
        this.setState({ searchText: event.target.value });
    }
    render() {
        if (this.state.shouldRedirect) {
            var location = `/articles/${this.state.searchText}`
            return <Redirect to={location} />
        }
        return (
            <div>
                <Header />
                <div className="landing-page">
                    <input type="text" onChange={this.eventHandler} value={this.state.searchText} />
                    <label><button onClick={this.getNewFeed}>Search</button></label>
                </div>
                <Option />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { location: state.userNavigationReducer.currentLocation };
}
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);