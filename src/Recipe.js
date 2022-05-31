import React from 'react'
import "./Recipe.css";
import { useState } from 'react';
import { Button } from 'react-bootstrap';

//------------------------------------------------------------------------------

export default function Recipe({ recipe }) {

    const [show, setshow] = useState(false);

    return (

        <div className="recipe">

            <img className="recipe__image" src={recipe["recipe"]["image"]} alt="" />

            <p className="recipe__description">{recipe["recipe"]["label"]}</p>

            {
                show ? <p className="recipe__description">{recipe["recipe"]["ingredientLines"]}</p> : null
            }
            {/* <p className="recipe__ingridient">{recipe["recipe"]["ingredientLines"]}</p> */}

            <Button className="recipe__button_show" variant="success" onClick={() => setshow(true)}>Show Recipe</Button>

            <Button className="recipe__button_hide" variant="secondary" onClick={() => setshow(false)}>Hide Recipe</Button>
        </div>
    )
}
