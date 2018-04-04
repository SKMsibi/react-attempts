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
    eventHandler(e) {
        var words = e.target.value;
        this.singleItem.item = words;
    }
    eventHandlerT(e) {
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
            localStorage.setItem("data", JSON.stringify(this.state.allItems));
        }
    }
    componentDidMount() {
        var item = localStorage.getItem("data");
        var hint = JSON.parse(item);
        var list = [];
        try {
            hint.forEach(element => {
                this.setState()
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
                localStorage.setItem("data", JSON.stringify(this.state.allItems));
            }
        })
    }
    render() {
        return (
            <div>
                <h1>This is the main page</h1>
                <div>
                    <input type="text" placeholder="final Product e.g Cake" onChange={this.eventHandler.bind(this)} /> |||
                    <input type="text" placeholder="Ingredients e.g milk,eggs" onChange={this.eventHandlerT.bind(this)} /><br />
                    <button onClick={this.handleButton.bind(this)}>Add</button><br />
                </div>
                <div>
                    {this.state.allItems.map(element => {
                        return <div class="container">
                            <Item item={element.item} product={element.product} status={element.status} deleteButton={this.deleteItem.bind(this)} />
                        </div>
                    })}
                </div>
            </div >
        )
    }
}