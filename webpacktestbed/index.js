import React, { Component } from 'react';

// Import webfonts
import '../infl-styles/_font_families_webpack.scss';

// Components
import Checkbox from '../src/checkbox'
// Styles
import '../infl-styles/_checkbox.scss';

class App extends Component {

  render() {
    return (
      <Checkbox id='checkbox1'
        enabled={true}
        isChecked={false}
        require={true}
        label='Label1'
        name='Name1'
        value='value1'
        indeterminate={true}
        />
    );
  }
}

React.render(<App/>, document.getElementById('root'));
