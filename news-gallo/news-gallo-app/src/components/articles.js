import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/all-actions';
import axios from 'axios';
import '../App.css';

export class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: this.props.match.params.requestData,
            allArticles: []
        }
    }

    async componentDidMount() {
        this.props.changeLocation("articles");
        var requestData = this.props.match.params.requestData;
        const apiRes = await axios.get(`https://newsapi.org/v2/everything?q=${requestData}&from=2018-09-01&sortBy=publishedAt&apiKey=2de6578fa2744b27a5fa386d65a496fd`);
        this.setState({ allArticles: apiRes.data.articles })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="articles-page">
                    <h2>{this.state.subject} Articles</h2>
                    <div className="articles-list">{this.state.allArticles.map(item => {
                        return <div>
                            <h3><img src={item.urlToImage} className="articles-Image" alt="articles-Image" /> {item.title}</h3>
                        </div>
                    })}</div>
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
