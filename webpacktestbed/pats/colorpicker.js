import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {StatefulColorPicker} from '../src/color-picker';

class App extends Component {
  render() {
    return (
      <StatefulColorPicker
        initialColor='purple'/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
