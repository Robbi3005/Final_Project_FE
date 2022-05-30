import './App.css';
import "./key.js";
import axios from "axios";
import { useState } from 'react';
import Recipe from "./Recipe";

//------------------------------------------------------

function App() {

  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])

  const YOUR_APP_ID = "0b8862fc";
  const YOUR_APP_KEY = "08e6e2b163266f8cff67232d4e384bb9";

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`

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
        
        />
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
