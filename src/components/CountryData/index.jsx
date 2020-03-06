import React, { Component } from 'react';
import CountryRow from './../CountryRow';

class CountryData extends Component {
  render() {
    const countries = this.props.countries;
    return (
      <div>
        {' '}
        {countries
          .filter(country => country.country.toLowerCase().includes(this.props.search))
          .map(country => (
            <CountryRow key={country.country} {...country} />
          ))}
      </div>
    );
  }
}

export default CountryData;
