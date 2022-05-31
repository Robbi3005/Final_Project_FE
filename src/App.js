import './App.css';
import "./key.js";
import axios from "axios";
import { useState } from 'react';
import Recipe from "./Recipe";

//------------------------------------------------------

function App() {

  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])
  const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "764df5ff";
  const YOUR_APP_KEY = "983d0a745875a16074dcc3daeb046021";

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {

    let result = await axios.get(url);

    setrecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (

    <div className="app">

      <h1 onClick={getRecipes}> Resep Enak 🍔 </h1>

      <form
        className="app__searchForm"
        onSubmit={onSubmit}>

        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />

        <input
          className="app__submit"
          type="submit"
          value="Search"
        />

        <select
          className='app__healthLabels'
        >

          <option
            onClick={() => sethealthLabels("vegan")}>
            Vegan
          </option>

          <option
            onClick={() => sethealthLabels("vegetarian")}>
            vegetarian
          </option>

          <option
            onClick={() => sethealthLabels("paleo")}>
            paleo
          </option>

          <option
            onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>

          <option
            onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>

          <option
            onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>

          <option
            onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>

          <option
            onClick={() => sethealthLabels("egg-free")}>
            egg-free
          </option>

          <option
            onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>

          <option
            onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>

          <option
            onClick={() => sethealthLabels("soy-free")}>
            soy-free
          </option>

          <option
            onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>

          <option
            onClick={() => sethealthLabels("selfish-free")}>
            selfish-free
          </option>


        </select>


      </form>

      <div className='app__recipe'>

        {recipes.map(recipe => {
          return <Recipe recipe={recipe} />
        })}

      </div>

    </div>
  );
}

export default App;
