import React, { Component } from 'react';
import TeamSeason from './TeamSeason'


export default class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teamSeason: {}
    }
  }
  getTeamSeason(year) {
    this.setState({
      teamSeason: this.props.team.seasons.find(x => x.year === year)
    })

  }
  render() {
    if (this.props.team.team_name) {
      return (
        <div >
        <h1>Teams</h1>
        <p>{this.props.team.team_name}</p>
        <ul>{this.props.team.seasons.map((x, i) => (
          <li key={i} onClick={() => this.getTeamSeason(x.year)}>{x.year}</li>
        ))}
        </ul>
        <TeamSeason season={this.state.teamSeason}/>
        </div>
      )
    }
    else{
      return <div>hi</div>
    }
  }
}
