import React from 'react';
import './App.css';
import getPokemons from './services/getData';
import Header from './components/Header/index';
import Filters from './components/Filters/index';
import Footer from './components/Footer/index';
import PokeList from './components/PokeList/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      queryName: ''
    };
  };

  getPokemonsData() {
    getPokemons()
      .then(data => {
        const pokemonsArr = data.results.map((item) => {
          return fetch(item.url)
            .then(response => response.json());
        });

        return Promise.all(pokemonsArr);
      })
      .then(info => {
        this.setState({
          pokemons: info
        });
      })
  };

  componentDidMount() {
    this.getPokemonsData();
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Filters />
          <PokeList pokemons={this.state.pokemons}/>
          
        </main>
        <Footer />
      </>
    )
  };
}

  export default App;
