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
    $.ajax({
      url:`${API}/api/years/${year}`,
      type: "GET"
    }).then(res =>{
      this.setState({
        season: res
      })
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
      <img className="bgImage" src="http://stuffled.com/vector/wp-content/uploads/sites/5/2014/04/Major-League-Baseball-Logo-Vector-Image.png"/>
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
