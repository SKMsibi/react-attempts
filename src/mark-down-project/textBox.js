import React from 'react';

export default class TextBox extends React.Component {
    handleChange(e) {
        const item = e.target.value;
        this.props.mark(item);
    }
    render() {
        return (
            <div>
                <h3>Your mark down text</h3>
                <textarea placeholder="Your text here..." style={{ width: 500 }} onChange={this.handleChange.bind(this)}></textarea>
            </div>
        )
    }
}