import React from 'react';
import {render} from 'react-dom';
import Routes from './routes.js'

import 'jquery'
import 'materialize-css'
import 'materialize-loader'
import 'd3'


render(
  <Routes />,
  document.getElementById('baseball')
)
