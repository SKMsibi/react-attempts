import React from 'react';
import Item from './item';
import '../index.css';
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { allItems: [], buttons: [] };
        this.singleItem = {};
        this.deleteItem.bind(this);
    }
    recipeNameRetriever(e) {
        var words = e.target.value;
        this.singleItem.item = words;
    }
    recipeIngredientsRetriever(e) {
        var words = e.target.value;
        this.singleItem.product = words.split(",");
    }
    handleButton() {
        if (this.singleItem.item === undefined) {
            alert("unable to add empty product")
        } else {
            this.state.allItems.push(this.singleItem);
            this.setState({ allItems: this.state.allItems })
            this.singleItem = {};
            localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allItems));
        }
    }
    componentDidMount() {
        var item = localStorage.getItem("valuedRecipes");
        var hint = JSON.parse(item);
        var list = [];
        try {
            hint.forEach(element => {
                list.push(element)
                this.setState({ allItems: list })
            });
        } catch (error) {
        }
    }
    deleteItem(itemName) {
        this.state.allItems.forEach(element => {
            if (element.item === itemName) {
                this.state.allItems.splice(this.state.allItems.indexOf(element), this.state.allItems.indexOf(element) + 1)
                this.setState({ allItems: this.state.allItems })
                localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allItems));
            }
        })
    }
    editList(itemList, item) {
        var newItems = prompt("You can change you Item", itemList);
        this.state.allItems.forEach(element => {
            if (element.item === item) {
                try {
                    var index = this.state.allItems.indexOf(element);
                    this.state.allItems.splice(index, index + 1);
                    this.singleItem = this.state.allItems.splice(index, index, { "item": item, product: newItems.split(",") });
                    localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allItems));
                    window.location.reload(true)
                } catch (error) {

                }
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <div>
                    <h4>Recipe name</h4>
                    <input type="text" id="inputText" placeholder="e.g chocolate Cake" onChange={this.recipeNameRetriever.bind(this)} /> <br /><br />
                    <h4>Recipe items</h4>
                    <textarea placeholder="e.g baking Powder,chocolate flavouring,milk" onChange={this.recipeIngredientsRetriever.bind(this)} ></textarea><br />
                    <button class="btn btn-primary" onClick={this.handleButton.bind(this)}>Add</button><br />
                </div>
                <div>
                    {this.state.allItems.map(element => {
                        return <div className="container-fluid">
                            <Item key={this.state.allItems.indexOf(element)} item={element.item} test="this is a test" product={element.product} status={element.status} deleteButton={this.deleteItem.bind(this)} editButton={this.editList.bind(this)} />
                        </div>
                    })}
                </div>
            </div >
        )
    }
}