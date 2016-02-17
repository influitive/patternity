import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createTheme } from '../src/utils/themeable';
import ButtonDropdown from '../src/button-dropdown';

require('../infl-styles/_button.scss');

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

ReactDOM.render(React.createElement(App), document.getElementById('root'))
