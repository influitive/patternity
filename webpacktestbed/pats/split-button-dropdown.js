import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SplitButtonDropdown from '../src/split-button-dropdown';

import '../infl-styles/_button.scss';
import '../infl-styles/_icon.scss';

const handleDropdownItemClick = e => { e.preventDefault(); console.log(e); };

class App extends Component {
  render() {
    return <div>
      <SplitButtonDropdown title="hello" 
        onButtonClick={() => console.log('clicked')}>
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


