import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super();
        this.state = { list: [], del: [] };
        this.hideOrShow = "true";
    }
    handleButter() {
        this.showAndHide();
    }
    showAndHide() {
        if (this.hideOrShow === "true") {
            this.setState({ list: this.props.product.map(element => { return <ul>{element}</ul> }) });
            this.setState({ del: <button onClick={() => this.deleteItem()}>Delete {this.props.item}</button> });
            this.hideOrShow = "false";
        } else {
            this.hideOrShow = "true";
            this.setState({ list: <div></div> });
            this.setState({ del: <div></div> })
        }
    }
    deleteItem() {
        this.props.deleteButton(this.props.item)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButter.bind(this)}>{this.props.item}</button>
                {this.state.list}
                {this.state.del}
            </div>
        )
    }
}