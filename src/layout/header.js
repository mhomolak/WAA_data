import React from 'react'
import { Link } from 'react-router'

import {Button, Dropdown, NavItem} from 'react-materialize';

import '../style/header.scss'


function yearLinks(num, arr) {
  for (var i = 1996; i <= 2015; i++) {
    arr.push(i)
  }
  return arr
}

const Header = (props) => (
  <nav className="test">
    <a href="#" className="home">Home</a>
    <Dropdown trigger={<Button>Teams</Button>}>
      {props.teams.map((x,i) => (
        <div key={x.team_name} onClick={() => props.getTeam(x.id)}>
          <NavItem href={`/#/teams/${x.id}`}>
          {x.team_name}
          </NavItem>
        </div>
      ))}
    </Dropdown>
    <Dropdown trigger={<Button>Seasons</Button>}>
      {yearLinks(20, []).map((x,i) => (
        <div key={i} onClick={() => props.getSeason(x)}>
          <NavItem href={`/#/years/${[x]}`}>
          {x}
          </NavItem>
        </div>
      ))}
    </Dropdown>
  </nav>
)

export default Header
