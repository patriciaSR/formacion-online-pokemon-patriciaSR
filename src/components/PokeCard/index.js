import React from 'react';

const PokeCard = (props) => {
  const {
    pokemon
  } = props;
  return (
    <li className="pokemon__item" key={pokemon.id}>
      <p className="pokemon__id">{`id/${pokemon.id}`}</p>
      <h2 className="pokemon__name">{pokemon.name}</h2>
      <ul className="pokemon-type__list">
        {pokemon.types.map((type, index) => (
          <li className="pokemon__type" key={index}>{type.type.name}</li>
        ))}
      </ul>
      <img className="pokemon__image" src={pokemon.sprites.front_default} alt={pokemon.name} />
    </li>
  )
};

export default PokeCard;