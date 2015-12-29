import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SplitButtonDropdown from '../src/split-button-dropdown';
import '../infl-styles/_button.scss';
import '../infl-styles/_icon.scss';

class App extends Component {
  render() {
    return <div>
      <SplitButtonDropdown title="hello">
        <a href="$">Hell</a>
        <a href="$">Hell</a>
        <a href="$">Hell</a>
        <a href="$">Hell</a>
        <a href="$">Hell</a>
      </SplitButtonDropdown>
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

