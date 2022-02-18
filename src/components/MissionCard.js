import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missions-card">
        <p data-testid="mission-name" className="text">{name}</p>
        <p data-testid="mission-year" className="text">{year}</p>
        <p data-testid="mission-country" className="text">{country}</p>
        <p data-testid="mission-destination" className="text">{destination}</p>
      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionsCard;
