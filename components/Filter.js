import React from 'react';
import { Component } from 'react';

const Filter = function({handleChange, filters}){
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: null
}

export default Filter;
