import React, { Component } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

class IndustryData extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }
  render() {
    return (
      <div className="App">
        <Button variant="outline-secondary" onClick={this.show} style={{ margin: 4 }}>
          Industries
        </Button>{' '}
        {this.state.active && (
          <div className="industry-card-info">
            <h4 className="image-graphic">Administration</h4>

            <img
              className="image-graphic"
              src={this.props.industries[0].administration}
              width="40%"
            />
            <h4>Education</h4>
            <img className="image-graphic" src={this.props.industries[1].education} width="40%" />
            <h4>Finance ad Insurance</h4>
            <img
              className="image-graphic"
              src={this.props.industries[2].financeAndInsurance}
              width="40%"
            />
            <h4>Information and Communication</h4>
            <img
              className="image-graphic"
              src={this.props.industries[3].informationAndCommunication}
              width="40%"
            />
            <h4>Scientific Consultancy</h4>
            <img
              className="image-graphic"
              src={this.props.industries[4].scientificConsultancy}
              width="40%"
            />
          </div>
        )}
      </div>
    );
  }
}

export default IndustryData;
