import React, { Component } from 'react';

import Header from './header.js'


export default class Layout extends Component {
  render() {
    return (
      <div id="layout-container">
      <Header></Header>
      <main>
        {this.props.children}

      </main>

      </div>
    )
  }
}
