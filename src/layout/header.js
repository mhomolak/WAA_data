import React from 'react'
import { Link } from 'react-router'

import {Button, Dropdown, NavItem} from 'react-materialize';


function yearLinks(num, arr) {
  for (var i = 1996; i <= 2015; i++) {
    arr[i] = (
      <div key={i}>
        <NavItem>
        {i}
        </NavItem>
      </div>
    )
  }
  return arr
}

const Header = () => (
  <nav>
    <Dropdown trigger={<Button>Teams</Button>}>
      <NavItem>one</NavItem>
      <NavItem>two</NavItem>
      <NavItem>three</NavItem>
    </Dropdown>
    <Dropdown trigger={<Button>Years</Button>}>
      {yearLinks(20, []).map(link => link)}
    </Dropdown>
  </nav>
)

export default Header
