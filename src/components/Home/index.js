import React from 'react';
import Filters from '../Filters/index';
import PokeList from '../PokeList/index';

const Home = (props) => {
  const {
    getQuery,
    pokemons,
    queryName,
    isFetching
  } = props;
  
  return (
    <>
      <Filters getQuery={getQuery} />
      
      <PokeList
      pokemons={pokemons}
      queryName={queryName}
      isFetching={isFetching}
      />
    </>
  )
  }
  
  export default Home;
  