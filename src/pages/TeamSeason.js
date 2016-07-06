import React from 'react';

const TeamSeason = (props) => {
  if (props.season.wins) {
    return (
      <ul className = "teamSeason">
        <li className="bigFont"><strong>Year: </strong>{props.season.year}</li>
        <li className="bigFont"><strong>Wins: </strong>{props.season.wins}</li>
        <li className="bigFont"><strong>Losses: </strong>{props.season.losses}</li>
        <li className="bigFont"><strong>Payroll: </strong>{props.season.payroll}</li>
        <li className="bigFont"><strong>WAA: </strong>{props.season.team_waa}</li>
        <li className="bigFont"><strong>Made the playoffs? </strong>{props.season.playoffs ? "Yes" : "No"}</li>
        <li className="bigFont"><strong>Won the championship? </strong>{props.season.championship ? "Yes" : "No"}</li>
      </ul>
  )}
  else{
    return <p></p>
  }
}

export default TeamSeason
