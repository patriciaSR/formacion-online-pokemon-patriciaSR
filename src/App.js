import React from 'react';
import './App.css';
import getPokemons from './services/getData';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import PokeList from './components/PokeList/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      queryName: '',
      isFetching: true
    };

    this.getQuery = this.getQuery.bind(this);
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
          pokemons: info,
          isFetching: false
        });
      })
  };

  getQuery(e) {
    const inputName = e.currentTarget.value;
    console.log(inputName);
    this.setState({
      queryName: inputName
    })
  };

  componentDidMount() {
    this.getPokemonsData();
  };

  render() {
    const {
      pokemons,
      queryName,
      isFetching
    } = this.state;

    return (
      <div className="app">
        <Header getQuery={this.getQuery} />

        <main>

          <PokeList
            pokemons={pokemons}
            queryName={queryName}
            isFetching={isFetching}
          />

        </main>

        <Footer />
      </div>
    )
  };
}

export default App;
