const ENDPOINT= "https://pokeapi.co/api/v2/pokemon/?limit=25";

const getPokemons = () => {
  return (
    fetch(ENDPOINT)
    .then(response => response.json())
  ); 
}

export default getPokemons;