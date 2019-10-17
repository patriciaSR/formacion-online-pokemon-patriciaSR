import React from 'react';
import { Link } from 'react-router-dom';
import PokeCard from './../PokeCard/index';
import Loading from './../Loading/index';
import NoResults from './../NoResults/index';
import './styles.css';

const PokeList = (props) => {
  const {
    queryName,
    pokemons,
    isFetching
  } = props;

  const filterPokemons = pokemons.filter(pokemon => pokemon.name.includes(queryName))

  if(isFetching){
    return <Loading />

  }
  
  if (!filterPokemons.length) {
    return <NoResults />
  }

  return (
    <div className="pokemons__container">
      <ol className="pokemon__list">
        {filterPokemons.map(pokemon => (
          <Link to={`/pokemon/${pokemon.id}`} className="pokemon__card-link">
            <PokeCard pokemon={pokemon} key={pokemon.id} />
          </Link>
        )
        )}
      </ol>
    </div>
  )
};

export default PokeList;