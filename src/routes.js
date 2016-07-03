import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Layout from "./layout/layout.js"
import Teams from "./pages/teams.js"
import Years from "./pages/years.js"


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>

      <Route path="/teams" component={Teams}/>
      <Route path="/years" component={Years}/>


    </Route>


  </Router>
)

export default Routes
