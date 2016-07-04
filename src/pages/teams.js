import React from 'react';


const Teams = (props) => {
  console.log("p", props);
  if (props.team.team_name) {
      return (
      <div >
        <h1>Teams</h1>
        <p>{props.team.team_name}</p>
        <ul>{props.team.seasons.map((x, i) => (
            <li key={i}>{x.year}</li>
            ))}
        </ul>

      </div>
    )
  }
  else{
    return <div>hi</div>
  }
}

export default Teams
