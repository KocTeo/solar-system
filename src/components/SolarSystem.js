import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName="Nome do Planeta" planetImage="imagem do planeta" />
      </div>
    );
  }
}

export default SolarSystem;
