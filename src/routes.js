import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Layout from "./layout/layout.js"
import Landing from './layout/landing.js'
import Teams from "./pages/teams.js"
import Years from "./pages/years.js"


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>

      <IndexRoute component={Landing}/>
      <Route path="/teams(/:status)" component={Teams}/>
      <Route path="/years(/:status)"  component={Years}/>


    </Route>


  </Router>
)

export default Routes
