import React, { Component } from 'react';

import Header from './header.js'

let API;

if(process.env.NODE_ENV==='development'){
  API = 'http://localhost:3000'
}
if(process.env.NODE_ENV==='production'){
  API = window.location.origin
}

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      team: {},
      season: []
    }
  }
  componentWillMount() {
    $.ajax({
      url:`${API}/api/teams`,
      type: "GET",
    }).then(res =>{
      this.setState({
        teams: res
      })
    })
  }
  getTeam(id) {
    $.ajax({
      url:`${API}/api/teams/${id}`,
      type: "GET"
    }).then(res =>{
      this.setState({
        team: res
      })
    })
  }
  getSeason(year) {
    console.log("year", year);
    $.ajax({
      url:`${API}/api/years/${year}`,
      type: "GET"
    }).then(res =>{
      this.setState({
        season: res
      })
      console.log("balls", res);
    })
  }
  render() {
    return (
      <div id="layout-container">
      <Header
        teams={this.state.teams}
        getTeam={this.getTeam.bind(this)}
        getSeason={this.getSeason.bind(this)}
      />
      <h1>Home</h1>
      <main>
        {React.cloneElement(this.props.children, {
          team: this.state.team,
          season: this.state.season
        })}
      </main>

      </div>
    )
  }
}
