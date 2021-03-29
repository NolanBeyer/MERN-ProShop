import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

export default (
  <Router>
    <Route exact path='/' component={HomeScreen} />
    <Route path='/product/:id' component={ProductScreen} />
  </Router>
)
