import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/all-actions';
import '../App.css';

export class Articles extends Component {
    componentDidMount() {
        this.props.changeLocation("articles");
    }
    render() {
        return (
            <div>
                <Header />
                <div className="articles-page">
                    <h2>{this.props.category} Articles</h2>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        location: state.userNavigationReducer.currentLocation,
        category: state.readerDataReducer.selectedCategory
    };
}
const mapDispatchToProps = dispatch => ({
    changeLocation: (location) => dispatch(actions.changeLocation(location)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
