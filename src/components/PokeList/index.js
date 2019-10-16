import React from 'react';
import PokeCard from './../PokeCard/index';

const PokeList = (props) => {
  const {
    queryName,
    pokemons,
    isFetching
  } = props;

  const filterPokemons = pokemons.filter(pokemon => pokemon.name.includes(queryName))

  if(isFetching){
    return "Cargando"

  }
  if (!filterPokemons.length) {
    return "No hay resultados para esa búsqueda"
  }

  return (
    <div className="pokemons__container">
      <ol className="pokemon__list">
        {filterPokemons.map(pokemon => (
          <PokeCard pokemon={pokemon} />
        )
        )}
      </ol>
    </div>
  )
};

export default PokeList;