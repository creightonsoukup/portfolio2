import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Homepage from './containers/homepage'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/hello" component={Homepage}/>
        </Provider>
      </Router>
    )
  }
}

export default App
