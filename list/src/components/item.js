import React from 'react';
import '../index.css';

export default class Item extends React.Component {
    constructor(props) {
        super();
        this.state = { list: [], del: [], edit: [] };
        this.hideOrShow = "true";
    }
    handleButter() {
        this.showAndHide();
    }
    showAndHide() {
        if (this.hideOrShow === "true") {
            try {
                this.setState({ list: this.props.product.map(element => { return <li>{element}</li> }) });
                this.setState({ del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete {this.props.item}</button> });
                this.setState({ edit: <button id="editButton" onClick={() => this.editItem()}>Edit Items</button> })

                this.hideOrShow = "false";
            } catch (error) {
                this.setState({ list: "this list is empty" });
                this.setState({ del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete</button> });
                this.setState({ edit: <button id="editButton" onClick={() => this.editItem()}>Edit Items</button> })

            }
        } else {
            this.hideOrShow = "true";
            this.setState({ list: <div></div> });
            this.setState({ del: <div></div> })
            this.setState({ edit: <div></div> })
        }
    }
    deleteItem() {
        this.props.deleteButton(this.props.item)
    }
    editItem() {
        this.props.editButton(this.props.product, this.props.item);

    }
    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={this.handleButter.bind(this)} id="ItemButton">{this.props.item}</button>
                <div className="container">
                    <ul>
                        {this.state.list}
                    </ul>
                </div>
                {this.state.del}
                {this.state.edit}
            </div>
        )
    }
}