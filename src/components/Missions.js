import React, { Component } from 'react';
import MapMissions from './MapMissions';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MapMissions />
      </div>
    );
  }
}

export default Missions;
