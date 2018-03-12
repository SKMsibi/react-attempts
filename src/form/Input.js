import React from 'react';

export default class Input extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changingState(this.props.value, title)
    }
    render() {
        console.log("props", this.props)
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}