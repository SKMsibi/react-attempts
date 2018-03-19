import React from 'react';
import Title from './header/Title';

export default class header extends React.Component {
    handleChange(e){
        const item = e.target.value;
        this.props.changingState(item);
    }
    render() {
        return (
            <div>
                <header>header</header>
                <Title title={this.props.title} />
                <input  onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
} 