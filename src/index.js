'use strict'

import Title from './app'
import React from 'react'
import { render } from 'react-dom'

// var React = require('react')
// var ReactDOM = require('react-dom')

render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)