import React from 'react';
export default class Title extends React.Component {
    render() {
        console.log("these are the props from Title", this.props)
        return (
            <h1>{this.props.title}</h1>
        );
    }
}