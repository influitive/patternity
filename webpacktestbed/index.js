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

let selectedRows = [0, 2];

class App extends Component {
  render() {
    return <div>

      <ButtonDropdown title="test" options={[<a>fdsf</a>, <a>fdsf</a>]}>
      </ButtonDropdown>
    </div>;
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
