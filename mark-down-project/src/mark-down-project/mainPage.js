import React from 'react';
import marked from 'marked'
import TextBox from './textBox';
import MarkedText from './marked-text';
import Heading from './heading'

export default class MarkConvertor extends React.Component {
    constructor() {
        super();
        this.state = { input: "" };
    }
    changingState(item) {
        this.setState({ input: item })
    }
    markedConvertor() {
        return { __html: marked(this.state.input) };
    }
    render() {
        return (
            <div>
                <Heading />
                <div id="boxes">
                    <TextBox mark={this.changingState.bind(this)} />
                </div>
                <div id="boxes">
                    <MarkedText text={this.markedConvertor.bind(this)} />
                </div>
            </div >
        )
    }
}