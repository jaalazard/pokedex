import PropTypes from "prop-types";

function PokemonCard(props) {
  console.log(props);
  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="{props.pokemon.name}"
        />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name.toUpperCase()}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;
