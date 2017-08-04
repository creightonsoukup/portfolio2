import React, { Component } from 'react';
import Homepage from '../containers/homepage'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

export default App
