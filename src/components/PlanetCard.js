import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name" className="text">{planetName}</p>
        <img src={ planetImage } alt={ alt } className="planet-image" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
