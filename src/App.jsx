import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const increment = () => {
    setPokemonIndex(pokemonIndex+1);
  };
  const decrement = () => {
    setPokemonIndex(pokemonIndex-1);
  };

  return (
    <div>
      <MyTitle />
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <NavBar increment ={increment} decrement={decrement} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

export default App;
