import React, { Component } from 'react';
import SearchBarCountry from './../SearchBarCountry';
import CountryData from './../CountryData';

import { Form } from 'react-bootstrap';
import './style.css';

class FilterableCountryTable extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };

    this.searchCountry = this.searchCountry.bind(this);
  }

  searchCountry(e) {
    const value = e.target.value;
    this.setState({
      search: value
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="search-form"
              type="text"
              placeholder="Search a country..."
              name="searchQuery"
              value={this.state.search}
              onChange={this.searchCountry}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>

        {this.state.search.length && (
          <CountryData countries={this.props.countries} search={this.state.search} />
        )}
      </div>
    );
  }
}

export default FilterableCountryTable;
