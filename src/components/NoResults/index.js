import React from 'react';
import pikachuSad from './../../images/pika-sad.gif';
import './styles.css';

const NoResults = () => (
    <>
      <p className="no-results__text">No results for that search</p>
      <img className="no-results__img" src={pikachuSad} alt="sorry-pokemon"/>
    </>
  );

  export default NoResults;