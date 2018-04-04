import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super();
        this.state = { list: [] };
        this.hideOrShow = "true";
    }
    handleButter() {
        this.showAndHide();
    }
    showAndHide() {
        if (this.hideOrShow === "true") {
            this.setState({ list: this.props.product.map(element => { return <ul>{element}</ul> }) });
            this.hideOrShow = "false";
        } else {
            this.hideOrShow = "true";
            this.setState({ list: <div></div> });
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButter.bind(this)}>{this.props.item}</button>

                {this.state.list}
            </div>
        )
    }
}