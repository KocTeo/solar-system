import React, { Component } from 'react';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class MapMissions extends Component {
  render() {
    return (
      <div className="missions-list">
        { missions.map((mission) => (<MissionsCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />)) }
      </div>
    );
  }
}

export default MapMissions;
