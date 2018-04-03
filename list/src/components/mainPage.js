import React from 'react';
import Item from './item';
import '../index.css'
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { allItems: [], buttons: [] };
        this.singleItem = {};
    }
    eventHandler(e) {
        var words = e.target.value;
        this.singleItem.item = words;
    }
    eventHandlerT(e) {
        var words = e.target.value;
        this.singleItem.product = words.split(",");
        this.singleItem.status = "false";
    }
    handleButton() {
        this.state.buttons.push(this.singleItem)
        this.singleItem = {};
        this.display();
    }
    display() {
        if (this.state.allItems.length > 0) {
            this.state.allItems.forEach(element => { this.state.buttons.push(element) })
            localStorage.setItem("data", JSON.stringify(this.state.buttons));
        }
        this.setState({ allItems: this.state.buttons });

    }
    getLocalStorage() {
        var item = localStorage.getItem("data");
        var hint = JSON.parse(item);
        try {
            if (this.state.buttons.length <= 0) {
                hint.forEach(element => {
                    this.state.allItems.push(element)
                });
            }
        } catch (error) {
            this.state.allItems.push({ item: "e.g Cake", product: ["eggs", "milk", "butter"] })
        }
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
                    {this.getLocalStorage()}
                    {this.state.allItems.map(element => {
                        return <Item item={element.item} product={element.product} status={element.status} />
                    })}
                </div>
            </div >
        )
    }
}