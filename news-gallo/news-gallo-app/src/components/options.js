import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/all-actions';
import '../App.css';

export class Options extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            selectedCategory: "none"
        }
        this.categorySelection = this.categorySelection.bind(this);
    }
    categorySelection(selectedCategory) {
        this.setState({ redirect: true, selectedCategory: selectedCategory });
        this.props.changeCategory(selectedCategory);
    }
    render() {
        if (this.state.redirect) {
            var location = `/articles/${this.state.selectedCategory}`
            return <Redirect to={location} />
        }
        return (
            <div className="options">
                <button onClick={() => this.categorySelection("Local")} className="option-btn">Local</button>
                <button onClick={() => this.categorySelection("Global")} className="option-btn">Global</button>
                <button onClick={() => this.categorySelection("Business")} className="option-btn">Business</button>
                <button onClick={() => this.categorySelection("Environment")} className="option-btn">Environment</button>
                <button onClick={() => this.categorySelection("Technology")} className="option-btn">Technology</button>
                <button onClick={() => this.categorySelection("Celebs")} className="option-btn">Celebs</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { location: state.userNavigationReducer.currentLocation };
}
const mapDispatchToProps = dispatch => ({
    changeCategory: (newCategory) => dispatch(actions.changeNewsCategory(newCategory))
})
export default connect(mapStateToProps, mapDispatchToProps)(Options);
