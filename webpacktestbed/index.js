import React, { Component } from 'react';

// Confirmation
import Confirmation from '../src/confirmation';

class App extends Component {
  render() {

    return (
      <Confirmation title='Testing this stuff 'no='Test' onNo={testNo} onYes={testYes} /> );
  }
}

React.render(<App/>, document.getElementById('root'));

function testYes(e) {
  e.preventDefault();
  console.log('Yes pressed');
}

function testNo(e) {
  e.preventDefault();
  console.log('No pressed');
}
