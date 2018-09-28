import React, { Component } from 'react';
import Header from './Header';
import Option from './options';
import { connect } from 'react-redux';
import '../App.css';
export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="landing-page">
                    <label>search</label>
                    <input type="text" />
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