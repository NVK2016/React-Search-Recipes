import React from "react";
// import Col from "react-bootstrap/Col";
import "../index.css"



const RecipeCard = (props) => {
    return (

            <div className="row">
                <div key={props.i} id={props.i}>

                    <h3>{props.label}</h3>
                    <img src={props.image} alt={props.labe} className="round-image" />

                    <a href={props.url} target="_blank" rel="noopener noreferrer">GET RECIPE!</a>
                    <br />
                    <h3>Yields: {props.yield}</h3>
                    <h5> Health Label(s): {props.healthLabels} </h5>
                    <span>Ingredients :{props.ingredients.map((ingredient, i) => {
                        // console.log("ingredient: ", ingredient.text);
                        return (
                            <ul>
                                <li key={i} className="ingredient">
                                    {ingredient.text}
                                </li>
                            </ul>
                        );
                    })}
                    </span>
                </div>
            </div>



    );
};




export default RecipeCard; 