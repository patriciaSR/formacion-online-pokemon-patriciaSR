import React from 'react';
import PokeCard from './../PokeCard/index';

const PokeList = (props) => {
  return (
    <div className="pokemons__container">
      <ol className="pokemon__list">
        {props.pokemons.map(pokemon => (
          <PokeCard pokemon={pokemon} />
        )
        )}
      </ol>
    </div>
  )
};

export default PokeList;