import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  };

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  componentWillMount(){
    this.fetchFilters();
    fetch('/api/fruit')
      .then(res => res.json())
      .then(items => this.setState({ fruit: items}));
  }

  render(){
    return (
      <div>
        <FruitBasket updateFilterCallback={this.handleFilterChange} selectedFilter={this.state.currentFilter} filters={this.state.filters} fruit={this.state.fruit} />
      </div>
    )
  }
};
