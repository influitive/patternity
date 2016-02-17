import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createTheme } from '../src/utils/themeable';
import ButtonDropdown from '../src/button-dropdown';

// Import webfonts
// import '../infl-styles/_font_families_webpack.scss';

require('../infl-styles/_button.scss');

const theme = {
  themeColorPrimary: 'orange'
};

const Theme = createTheme(theme);

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return <div>
      <ButtonDropdown title="test" onClick={this._handleClick} isOpen={this.state.isOpen}>
        <a>fdsf</a>
        <a>fdsf</a>
      </ButtonDropdown>
    </div>;
  }

  _handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
