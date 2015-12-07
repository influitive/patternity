import React, { Component } from 'react';

// Components
import Alert from '../src/alert';
import ButtonDropdown from '../src/button-dropdown';
import SplitButtonDropdown from '../src/split-button-dropdown';

// Styles
import '../infl-styles/_icon.scss';
import '../infl-styles/_font_families_webpack.scss';
import '../infl-styles/_button.scss';
import '../infl-styles/_alert.scss';

class App extends Component {

  render() {

    return (
      <SplitButtonDropdown
        title="Click me"
        type='primary'
        onPrimaryClick={()=>{}}
        buttonText='Testing here'
      >
        <a href="javascript://">
          <i className="ic ic-pencil" /> Edit
        </a>

        <a href="javascript://">
          <i className="ic ic-lock" /> Lock
        </a>

        <a href="javascript://">
          <i className="ic ic-arrow-left" /> Move
        </a>

        <a href="javascript://">
          <i className="ic ic-trash" /> Delete
        </a>
      </SplitButtonDropdown>
    );
  }
}

React.render(<App/>, document.getElementById('root'));
