import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = function({updateFilterCallback, selectedFilter, filters, fruit}){
  return (
    <div className="fruit-basket">
      <Filter
        updateFilterCallback={updateFilterCallback}
        filters={filters}
      />
      <FilteredFruitList
        filter={selectedFilter} fruit={fruit}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
