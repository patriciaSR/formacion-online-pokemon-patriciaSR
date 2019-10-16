import React from 'react';
import './App.css';
import getPokemons from './services/getData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      queryName: ''
    };
  }

  getPokemonsData() {
    getPokemons()
      .then(data => {
        const pokemonsArr = data.results.map((item) => {
          let pokemon = {};
          fetch('https://swapi.co/api/people/1/?format=json')
            .then(response => response.json())
            .then(data => {
              pokemon = data;
              return pokemon;
            });
        });
        return Promise.all(pokemonsArr);
      })
      .then(info => {
        console.log(info);
        this.setState({
          pokemons: info
        });
      })
  }

  componentDidMount() {
    this.getPokemonsData();
  };

  render() {
    return (
      <div className="App">
        :)
      </div>
    );
  }
}

export default App;
