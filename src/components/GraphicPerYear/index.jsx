import React, { Component } from 'react';
import './style.css';

class GraphicPerYear extends Component {
  render() {
    return (
      <div>
        {/* <h1>{JSON.stringify(this.props.total, null, 2)}</h1>
        <table>
          <thead>
            <tr>
              <td>Year</td>
              <td>Gap</td>
            </tr>
          </thead>
          <tbody>
            {this.props.total.map(total => {
              return (
                <tr>
                  <td>{Object.keys(total)[0]}</td>
                  <td>{Object.values(total)[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <h2 className="h2">Graphic Average Gap (2007-2017):</h2>
        <img className="image" src={this.props.total} width="40%" />
      </div>
    );
  }
}

export default GraphicPerYear;
