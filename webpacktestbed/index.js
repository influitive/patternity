import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createTheme } from '../src/utils/themeable';

import Button from '../lib/button2';

require('../infl-styles/_button.scss');

const theme = {
  themeColorPrimary: 'orange'
};

const Theme = createTheme(theme);

class App extends Component {
  render() {
    return <div>
      <Button type="primary">Hello There Bob</Button>
      <Button type="primary">NonTheme</Button>
    </div>;
  }
}

React.render(React.createElement(App), document.getElementById('root'))

