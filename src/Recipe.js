import React from 'react'
import "./Recipe.css";

//------------------------------------------------------------------------------

export default function Recipe({ recipe }) {
    return (

        <div className="recipe">

            <img className="recipe__image" src={recipe["recipe"]["image"]} />

            <p className="recipe__description">{recipe["recipe"]["label"]}</p>

        </div>
    )
}
