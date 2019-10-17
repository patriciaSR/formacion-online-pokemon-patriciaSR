import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './../Loading/index';
import NoResults from './../NoResults/index';
import './styles.css';

const PokemonDetail = (props) => {
  const {
    pokemons,
    isFetching,
    routeData
  } = props;

  const pokemonId = parseInt(routeData.match.params.id);
  const selectedPokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
  
  if (isFetching) {
    return <Loading />
  } else {
    if (pokemonId > pokemons.length || pokemonId < 0) {
      return (
        <NoResults />
        )
      }
    };
  
  const {
    name,
    id,
    sprites,
    abilities,
    types,
    moves
  } = selectedPokemon;
    
    return (
      <div className="pokemonDetail__containter">
        <div className="pokemonCard__container">
          <Link to='/' className="app__back" >Volver</Link>
          <div className="pokemonDetail__card">
            <img src={sprites.front_default} alt={name} className="pokemonDetail__image" />
            <div className="pokemonDetail__data">
              <h2 className="pokemonDetail__name">{name}</h2>
              <p className="pokemonDetail__id pokemon__id">id/{id}</p>
              <h3 className="pokemonDetail__moves__title">moves nº:</h3>
              <p className="pokemonDetail__moves">{moves.length}</p>
              <div className="pokemonDetail-abilities"> 
                <h3 className="pokemonDetail-abilities__title">Abilities:</h3>
                <ol className="pokemonDetail-abilities__list"> 
                  {abilities.map(ability => (
                    <li className="pokemonDetail-abilities__item">{ability.ability.name}</li>
                  ))}
                </ol>
              </div>
              <div className="pokemonDetail-types">
              <h3 className="pokemonDetail-types__title">Abilities:</h3>
                <ol className="pokemonDetail-types__list"> 
                  {types.map(type => (
                    <li className="pokemonDetail-types__item">{type.type.name}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    };
    
    export default PokemonDetail;
    