import React from "react";
import { Icon, Button } from 'semantic-ui-react'; 
import  "./RecipeCard.css"


const RecipeCard = (props) => {
    return (
        
            <div className="recipe-card">
                <h3 className="recipe-label">{props.title}</h3>
                <img src={props.image} alt={props.label} className="round-image col-md-4" />
                <br/>
                <div className="col-md-8 recipe-info">
                    <a href={props.url} target="_blank" rel="noopener noreferrer">GET RECIPE!</a>
                    <br />
                    <h3>Yields: {props.yield}</h3>
                    <h3>Source: {props.source}</h3>
                    <h5> Health Label(s): {props.healthLabels.map((label, i)=>{
                        return <span id={i}> {label} / </span>
                    })} </h5>

                </div>
            </div>



    );
};




export default RecipeCard; 