import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Filters = (props) => {
  const {
    getQuery
  } = props;

  return (
    <div className="filters">
      <label htmlFor="filter-name" className="filter-name__label">
        <input type="text" className="filter-name__input" onChange={getQuery} placeholder="e.g. charmander" />
      </label>
    </div>
  )
};

Filters.propTypes = {
  getQuery: PropTypes.func.isRequired
};

export default Filters;