import React from 'react';
import PokeCard from './../PokeCard/index';
import './styles.css';
import pikachuSad from './../../images/pika-sad.gif';


const NoResults = () => (
  <>
    <p className="no-results__text">No hay resultados para esa búsqueda</p>
    <img className="no-results__img" src={pikachuSad} alt="sorry-pokemon"/>
  </>
);

const Loading = () => (
  <>
    <p className="loading__text">Cargando pokemons ...</p>
  </>
)

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
          <PokeCard pokemon={pokemon} key={pokemon.id} />
        )
        )}
      </ol>
    </div>
  )
};

export default PokeList;