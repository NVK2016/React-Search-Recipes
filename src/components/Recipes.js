import React, { Component } from "react";
import axios from "axios";
import RecipeCard from '../components/RecipeCard';

class Recipes extends Component {
    state = {
        recipeTitle: "",
        recipeDetail: {},
        gotRecipe: false,
    };
    //Define onclick method to display recipes
    getRecipe = async () => {
        // event.preventDefault();
        // console.log(process.env.REACT_APP_API_ID, process.env.REACT_APP_API_KEY)
        try {
            const { data } = await axios.get(
                `https://api.edamam.com/search?q=${this.state.recipeTitle}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
            );

            this.setState({
                recipeDetail: data.hits,
                gotRecipe: true
            });
            // console.log("Recipe", this.state.gotRecipe, this.state.recipeDetail)
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
                            return (
                               <div>
                                    <RecipeCard
                                        image={item.recipe.image}
                                        url={item.recipe.url}
                                        yields={item.recipe.yield}
                                        title={item.recipe.label}
                                        ingredients={item.recipe.ingredients}
                                    />
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
