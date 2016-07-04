import React, { Component } from 'react';

import Header from './header.js'


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
      url:'http://localhost:3000/api/teams',
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
      <main>
        {React.cloneElement(this.props.children, {
          teams: this.teams,
          team: this.state.team
        })}

      </main>

      </div>
    )
  }
}
