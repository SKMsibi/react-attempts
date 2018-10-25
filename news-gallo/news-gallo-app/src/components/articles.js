import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/all-actions';
import ArticleContent from './article-content';
import axios from 'axios';
import '../App.css';

export class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: this.props.match.params.requestData,
            allArticles: [],
            showArticleContent: false,
            ArticlesContent: ""
        }
        this.setArticleContent = this.setArticleContent.bind(this);
        this.HideDisplayContent = this.HideDisplayContent.bind(this);
    }

    async componentDidMount() {
        this.props.changeLocation("articles");
        var requestData = this.props.match.params.requestData;
        const apiRes = await axios.get(`https://newsapi.org/v2/everything?q=${requestData}&from=2018-09-05&sortBy=relevancy&apiKey=2de6578fa2744b27a5fa386d65a496fd`);
        console.log("apiRes", apiRes);

        this.setState({ allArticles: apiRes.data.articles })
    }
    setArticleContent(content) {
        this.setState({ showArticleContent: true, ArticleContent: content });
    }
    HideDisplayContent() {
        this.setState({ showArticleContent: false })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="articles-page">
                    <h2>{this.state.subject} Articles</h2>
                    {!this.state.showArticleContent && (
                        <div className="articles-list">{this.state.allArticles.map(item => {
                            return <div className="single-article" onClick={() => this.setArticleContent(item.content)} key={this.state.allArticles.indexOf(item)}>
                                <img src={item.urlToImage} className="articles-Image" alt="article" />
                                <h3>{item.title}</h3>
                            </div>
                        })}</div>
                    )}
                    {this.state.showArticleContent && (
                        <ArticleContent content={this.state.ArticleContent} backBtn={() => this.HideDisplayContent} />
                    )}
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
