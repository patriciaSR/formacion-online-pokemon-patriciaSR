import React from 'react';
import './styles.css';
import Filters from './../Filters/index';

const Header = (props) => {
  const {
    getQuery
  } = props;

  return (
    <header className="page__header">
      <h1 className="page__title">Pokedex</h1>
      <Filters getQuery={getQuery} />
    </header>
  )
};

export default Header;