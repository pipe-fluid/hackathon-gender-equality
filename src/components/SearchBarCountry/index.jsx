import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SearchBarCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.startSearch = this.startSearch.bind(this);
  }

  startSearch(event) {
    const search = event.target.value;
    this.setState({
      search
    });
    this.props.search(search);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search per country..."
            name="searchQuery"
            value={this.state.search}
            onChange={this.startSearch}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBarCountry;

/* active-pink-3 active-pink-4 mb-4 */
