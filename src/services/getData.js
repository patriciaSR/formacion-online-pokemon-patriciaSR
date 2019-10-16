// const ENDPOINT= "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25";
const ENDPOINT= "https://rickandmortyapi.com/api/character/";

const getPokemons = () => {
  return (
    fetch(ENDPOINT)
    .then(response => response.json())
  ); 
}

export default getPokemons;