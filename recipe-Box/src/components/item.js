import React from 'react';
import '../index.css';

export default class Item extends React.Component {
    constructor(props) {
        super();
        this.state = { list: [], del: [], edit: [], hideOrShow: true };
        this.showAndHide.bind(this);
    }
    showAndHide() {
        if (this.hideOrShow) {
            try {
                this.setState({ list: this.props.ingredients.map(element => { return <li key={this.props.ingredients.indexOf(element)}>{element}</li> }), del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete {this.props.name}</button>, edit: <button id="editButton" onClick={() => this.editItem()}>Edit {this.props.name}</button> });
                this.hideOrShow = false;
            } catch (error) {
                this.setState({ list: "this list is empty", del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete</button>, edit: <button id="editButton" onClick={() => this.editItem()}>Edit {this.props.name}</button> });
            }
        } else {
            this.hideOrShow = true;
            this.setState({ list: <div></div>, del: <div></div>, edit: <div></div> });
        }
    }
    deleteItem() {
        this.props.deleteButton(this.props.name)
    }
    editItem() {
        this.props.editButton(this.props.ingredients, this.props.name);

    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.showAndHide.bind(this)} id="ItemButton">{this.props.name}</button>
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