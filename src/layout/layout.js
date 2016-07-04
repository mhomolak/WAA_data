import React, { Component } from 'react';

import Header from './header.js'

let API;
console.log(process.env.NODE_ENV);

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
      team: {}
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
      url:`http://localhost:3000/api/teams/${id}`,
      type: "GET"
    }).then(res =>{
      this.setState({
        team: res
      })
      console.log("BALLS", res);
    })
  }
  render() {
    return (
      <div id="layout-container">
      <Header teams={this.state.teams} getTeam={this.getTeam.bind(this)}/>
      <h1>Home</h1>
      <h1>{API}</h1>
      <main>
        {React.cloneElement(this.props.children, {
          team: this.state.team
        })}

      </main>

      </div>
    )
  }
}
