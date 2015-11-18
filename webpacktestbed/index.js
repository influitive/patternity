import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeComponent } from '../src/utils/themeable';

import Button from '../src/button2';
import ThemeButton from '../src/button2/theme-button';

require('../infl-styles/_button.scss');

const theme = {
  themeColorPrimary: 'orange'
};

const Theme = createTheme(theme);

class App extends Component {
  render() {
    return <div>
      <ThemeButton type="primary">Hello There Bob</ThemeButton>
      <Button type="primary">NonTheme</Button>
    </div>;
  }
}

React.render(React.createElement(Theme(App)), document.getElementById('root'))
