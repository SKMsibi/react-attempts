import React, { Component } from 'react';
import '../App.css';

export default class ArticleContent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.backBtn()}>Back</button>
                <div className="article-content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}
