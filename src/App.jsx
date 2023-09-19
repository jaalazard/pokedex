import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("Welcome Pokemon trainer !");
  });
  useEffect(() => {
    pokemonList[pokemonIndex].name === "pikachu"
      ? alert("Pika Pikachu !!!")
      : "";
  });

  const [pokemonIndex, setPokemonIndex] = useState(0);
  

  return (
    <div>
      <MyTitle />
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <NavBar
        setPokemonIndex={setPokemonIndex}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
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
