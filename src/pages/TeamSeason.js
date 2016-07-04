import React from 'react';

const TeamSeason = (props) => {
  if (props.season.wins) {
    return (
      <ul>
        <li>{props.season.year}</li>
        <li>{props.season.wins}</li>
        <li>{props.season.losses}</li>
        <li>{props.season.payroll}</li>
        <li>{props.season.team_waa}</li>
        <li>Made the playoffs? {props.season.playoffs ? "Yes" : "No"}</li>
        <li>Won the championship? {props.season.championship ? "Yes" : "No"}</li>
      </ul>
  )}
  else{
    return <p>k</p>
  }
}

export default TeamSeason
