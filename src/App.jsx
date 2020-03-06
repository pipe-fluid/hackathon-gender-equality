import React, { Component } from 'react';
import './App.css';

import countrydata from './countrydata.json';
import FilterableCountryTable from './components/FilterableCountryTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Gender Salary Gap </h1>
        <FilterableCountryTable countries={countrydata} />
      </div>
    );
  }
}

export default App;
