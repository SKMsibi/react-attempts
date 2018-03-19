import React from 'react';

export default class Input extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        var hint = this.props.category;
        this.props.changingState(hint, title)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}