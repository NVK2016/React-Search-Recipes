import React, { Component } from "react";
import axios from "axios";
const api_Key = "fa3502941336b2865937f7efea9a0b60";
const api_ID = "3aaa0d6e";

class Recipes extends Component {
    state = {
        recipeTitle: "",
        recipeDetail: {},
        gotRecipe: false,
    };
    //Define onclick method to display recipes
    getRecipe = async () => {
        // event.preventDefault();
        console.log(api_Key, api_ID)
        try {
            const { data } = await axios.get(
                `https://api.edamam.com/search?q=${this.state.recipeTitle}&app_id=${api_ID}&app_key=${api_Key}`
            );

            this.setState({
                recipeDetail: data.hits,
                gotRecipe: true
            });
            console.log("Recipe", this.state.gotRecipe, this.state.recipeDetail)
        } catch (e) {
            console.log(e);
        }

    };
    handleInput = (event) => {
        const { value, name } = event.target;
        console.log(name, value);
        this.setState({ [name]: value });
    };
    // componentDidMount() {
    //   console.log("i mounted");
    //   // const recipe = this.state.recipeDetail;
    // }
    render() {
        return (
            <div className="mt-4">
                <div>
                    <div id="app" className="container">

                        {/* <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>  */}
                        <input
                            type="text"
                            name="recipeTitle"
                            value={this.state.recipeTitle}
                            onChange={this.handleInput}
                        />

                        <button
                            className="btn btn-lg btn-primary btn-block"
                            onClick={this.getRecipe}
                            type="button">Get Recipes</button>
                    </div>
                </div>
                <div>
                   
                    {this.state.recipeDetail.length ? (
                        this.state.recipeDetail.map((item, i) => {
                            return (<div key={i} id={i}>
                                
                                <h3>{item.recipe.label}</h3>
                                <img src={item.recipe.image} alt={item.recipe.labe} />
                                <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">{item.recipe.url}</a>
                                <p className="recipe-card__detail-text">{ item.recipe.ingredients}</p>
                            </div>
                            );

                        })
                    ) :
                        (<h3>No results display!!</h3>)
                    }
                </div>
            </div>
        );
    }
}
//DOMRouter
// render(
//   <Router history={hashHistory}>
//     <Route component={RenderRecipes} path="/"></Route>
//   </Router>,
//   document.getElementById("app")
// );
//add a container DIV in HTML to render RenderRecipes Component

export default Recipes;
