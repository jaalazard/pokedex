function NavBar(props)  {
  const handleClick = (index) => {
    props.setPokemonIndex(index);
}
  return (
    props.pokemonList.map((pokemon, index) => (
      <button key={pokemon.name} onClick={() => handleClick(index)}>{pokemon.name}</button>
    )
    )
  );
    }

export default NavBar;
