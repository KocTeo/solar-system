import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class MapPlanets extends Component {
  render() {
    return (
      <div className="planetario">
        { planets.map((planet) => (<PlanetCard
          planetName={ planet.name }
          planetImage={ planet.image }
          key={ planet.name }
        />)) }
      </div>
    );
  }
}

export default MapPlanets;
