import React from 'react';

export default class Input extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changingState(title)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}