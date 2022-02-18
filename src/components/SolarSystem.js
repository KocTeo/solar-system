import React, { Component } from 'react';
import MapPlanets from './MapPlanets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetario">
        <Title headline="Planetas" />
        <MapPlanets />
      </div>
    );
  }
}

export default SolarSystem;
