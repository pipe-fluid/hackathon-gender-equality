import React, { Component } from 'react';

import GraphicPerYear from './../GraphicPerYear';
import IndustryData from './../IndustryData';

import './style.css';

class CountryRow extends Component {
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
      <div className="country-card">
        <h2>{this.props.country}</h2>
        <img onClick={this.show} src={this.props.img} alt={this.props.country} width="20%" />
        {this.state.active && (
          <div className="country-card-info">
            <h4 className="prediction">
              Prediction year to reach <strong>ZERO</strong> gender pay gap:{' '}
            </h4>
            <h2 className="prediction-number">{this.props.prediction}</h2>
            <br />
            <h4>Country's Life Expectancy: {this.props.lifeExpectancy} </h4>

            <p>Will you be alive to see it? Do the math :)</p>

            <hr />

            <GraphicPerYear total={this.props.total} />
            <IndustryData industries={this.props.industries} />
          </div>
        )}
      </div>
    );
  }
}

export default CountryRow;
