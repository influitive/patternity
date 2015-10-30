import React, { Component } from 'react';

import Button from '../src/button2';


import '../src/accordion/_accordion.scss';

class App extends Component {
  render() {
    return <Button disabled={false} inverse={true} icon="circle" type="primary" onClick={() => 'fart'}></Button>
  }
}

React.render(<App/>, document.getElementById('root'));