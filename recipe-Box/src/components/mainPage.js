import React from 'react';
import Item from './item';
import '../index.css';
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { allRecipes: [], recipeName: "", recipeIngredients: "" };
        this.deleteItem.bind(this);
        this.editList.bind(this)
        this.deleteItem.bind(this)
        this.addRecipeToList.bind(this)
        this.recipeNameRetriever.bind(this)
        this.recipeIngredientsRetriever.bind(this)
    }
    recipeNameRetriever(e) {
        var words = e.target.value;
        this.setState({ recipeName: words })
    }
    recipeIngredientsRetriever(e) {
        var words = e.target.value;
        this.setState({ recipeIngredients: words })
    }
    addRecipeToList() {
        if (this.state.recipeName === undefined) {
            alert("unable to add empty product")
        } else {
            var listWithNewRecipe = this.state.allRecipes;
            listWithNewRecipe.push({ recipeName: this.state.recipeName, recipeIngredients: this.state.recipeIngredients.split(",") })
            this.setState({ allRecipes: listWithNewRecipe, recipeName: "", recipeIngredients: "" })
            localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allRecipes));
        }
    }
    deleteItem(recipeTitle) {
        this.state.allRecipes.forEach(element => {
            if (element.recipeName === recipeTitle) {
                var positionOfTheRecipe = this.state.allRecipes.indexOf(element);
                this.state.allRecipes.splice(positionOfTheRecipe, positionOfTheRecipe + 1)
                this.setState({ allRecipes: this.state.allRecipes })
                localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allRecipes));
            }
        })
    }
    editList(recipeList, recipeTitle) {
        var newrecipeIngredients = prompt("You can change you Item", recipeList);
        this.state.allRecipes.forEach(element => {
            if (element.recipeName === recipeTitle) {
                try {
                    var positionOfRecipe = this.state.allRecipes.indexOf(element);
                    this.state.allRecipes.splice(positionOfRecipe, positionOfRecipe + 1);
                    this.singleRecipe = this.state.allRecipes.splice(positionOfRecipe, positionOfRecipe, { "recipeName": recipeTitle, recipeIngredients: newrecipeIngredients.split(",") });
                    localStorage.setItem("valuedRecipes", JSON.stringify(this.state.allRecipes));
                    window.location.reload(true)
                } catch (error) {
                }
            }
        })
    }
    componentDidMount() {
        var hint = JSON.parse(localStorage.getItem("valuedRecipes"));
        var listWithPreviousRecipes = [];
        try {
            hint.forEach(element => {
                listWithPreviousRecipes.push(element)
                this.setState({ allRecipes: listWithPreviousRecipes })
            });
        } catch (error) {
        }
    }
    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <div>
                    <h4>Recipe name</h4>
                    <input type="text" id="inputText" placeholder="e.g chocolate Cake" onChange={this.recipeNameRetriever.bind(this)} /> <br /><br />
                    <h4>Recipe recipeIngredients</h4>
                    <textarea placeholder="e.g baking Powder,chocolate flavouring,milk" onChange={this.recipeIngredientsRetriever.bind(this)} ></textarea><br />
                    <button className="btn btn-primary" onClick={this.addRecipeToList.bind(this)}>Add</button><br />
                </div>
                <div>
                    {this.state.allRecipes.map(element => {
                        return <div className="container-fluid" key={this.state.allRecipes.indexOf(element)}>
                            <Item key={this.state.allRecipes.indexOf(element)} name={element.recipeName} ingredients={element.recipeIngredients} deleteButton={this.deleteItem.bind(this)} editButton={this.editList.bind(this)} />
                        </div>
                    })}
                </div>
            </div >
        )
    }
}