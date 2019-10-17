import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import getPokemons from './services/getData';
import Header from './components/Header/index';
import Home from './components/Home/index';
import PokemonDetail from './components/PokemonDetail';
import Footer from './components/Footer/index';

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
        <Header />
    
        <main className="main">
          <Switch>
            <Route exact path="/" render={() => (
              <Home 
                getQuery={this.getQuery}
                pokemons={pokemons}
                queryName={queryName}
                isFetching={isFetching}
              />
            )}
            />
            <Route path="/pokemon/:id" render={(props) => (
              <PokemonDetail
                pokemons={pokemons}
                isFetching={isFetching}
                routeData={props}
              />
            )} 
            />
          </Switch>
        </main>

        <Footer />
      </div>
    )
  };
}

export default App;
