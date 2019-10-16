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
          return fetch('https://swapi.co/api/people/1/?format=json')
            .then(response => response.json());
        });

        return Promise.all(pokemonsArr);
      })
      .then(info => {
        this.setState({
          pokemons: info
        });
      })
  }

  componentDidMount() {
    this.getPokemonsData();
  };

  render() {
    if (this.state.pokemons.length > 0) {
      return (
        <div className="App">
          {this.state.pokemons[0].name}
      </div>
      );
    } else {
      return (
        <div className="App">
          :)
        </div>
      );
    }

  }
}

export default App;
