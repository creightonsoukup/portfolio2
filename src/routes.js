import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './containers/homepage'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Homepage}/>
    </Switch>
  </main>
)

export default Routes
