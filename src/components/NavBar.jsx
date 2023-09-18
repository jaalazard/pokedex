function NavBar(props) {
  return (
    <div>
      {props.pokemonIndex > 0 ? (
        <button onClick={props.decrement}>Précédent</button>
      ) : (
        ""
      )}
      {props.pokemonIndex < props.pokemonList.length - 1 ? (
        <button onClick={props.increment}>Suivant</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
