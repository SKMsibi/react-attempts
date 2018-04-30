import React from 'react';
import '../index.css';

export default class Recipe extends React.Component {
    constructor(props) {
        super();
        this.state = { list: [], del: [], edit: [], recipe: "", ingredients: [], hideOrShow: true, editOrNot: null };
        this.showAndHide.bind(this);
    }
    showAndHide() {
        if (this.hideOrShow) {
            try {
                this.setState({ recipe: this.props.name, ingredients: this.props.ingredients, list: this.props.ingredients.map(element => { return <li key={this.props.ingredients.indexOf(element)}>{element}</li> }), del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete {this.props.name}</button>, edit: <button id="editButton" onClick={() => this.editItem()}>Edit {this.props.name}</button> });
            } catch (error) {
                this.setState({ list: "this list is empty", del: <button id="deleteButton" onClick={() => this.deleteItem()}>Delete</button>, edit: <button id="editButton" onClick={() => this.editItem()}>Edit {this.props.name}</button> });
            }
            this.hideOrShow = false;
        } else {
            this.hideOrShow = true;
            this.setState({ list: null, del: null, edit: null });
        }
    }
    editRecipeName(e) {
        this.setState({ recipe: e.target.value })
    }
    editIngredients(e) {
        this.setState({ ingredients: e.target.value })
    }
    deleteItem() {
        this.props.deleteButton(this.props.name)
    }
    editItem() {
        this.setState({
            editOrNot: <div id="editIngredients">
                <h4>Recipe name</h4>
                <input type="text" id="inputText" placeholder="e.g chocolate Cake" onChange={this.editRecipeName.bind(this)} /> <br /><br />
                <h4>Recipe recipeIngredients</h4>
                <textarea placeholder="e.g baking Powder,chocolate flavouring,milk" onChange={this.editIngredients.bind(this)} ></textarea><br />
                <button onClick={this.saveEditedItems.bind(this)}>Save</button>
            </div>
        })
    }
    saveEditedItems() {
        this.props.editButton(this.state.recipe, this.state.ingredients, this.props.name, this.props.ingredients);
        this.setState({ editOrNot: null, list: null, del: null, edit: null })
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.showAndHide.bind(this)} id="ItemButton">{this.props.name}</button>
                <div className="container" id="listContainer">
                    <ul>
                        {this.state.list}
                    </ul>
                </div>
                {this.state.editOrNot}
                {this.state.del}
                {this.state.edit}
            </div>
        )
    }
}