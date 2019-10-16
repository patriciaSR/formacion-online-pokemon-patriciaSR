import React from 'react';
import './App.css';
import getPokemons from './services/getData';
import Header from './components/Header/index';
import Filters from './components/Filters/index';
import Footer from './components/Footer/index';

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
          {(this.state.pokemons.length > 0) ? (
            <div className="App">
              {this.state.pokemons[0].name}
            </div>
          ) : (
              <div className="App">
                :D
        </div>
            )
          }
        </main>
        <Footer />
      </>
    )
  };
}

  export default App;
