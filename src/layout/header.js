import React from 'react'
import { Link } from 'react-router'

import {Button, Dropdown, NavItem} from 'react-materialize';


function yearLinks(num, arr) {
  for (var i = 1996; i <= 2015; i++) {
    arr[i] = (
      <div key={i}>
        <NavItem href={`/#/years/${[i]}`}>
        {i}
        </NavItem>
      </div>
    )
  }
  return arr
}

const Header = (props) => (
  <nav>
    <Dropdown trigger={<Button>Teams</Button>}>
      {props.teams.map((x,i) => (
        <div key={x.team_name} onClick={() => props.getTeam(x.id)}>
          <NavItem href={`/#/teams/${x.id}`}>
          {x.team_name}
          </NavItem>
        </div>
      ))}
    </Dropdown>
    <Dropdown trigger={<Button>Years</Button>}>
      {yearLinks(20, []).map(link => link)}
    </Dropdown>
  </nav>
)

export default Header
