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
      <Alert title="Success!" key="success" showIcon={true} closeable={true}>Success Alert!</Alert>
    );
  }
}

React.render(<App/>, document.getElementById('root'));
