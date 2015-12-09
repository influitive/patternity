import React, { Component } from 'react';

// Components
import Alert from '../src/alert';
import Button from '../src/button2';
import ButtonGroup from '../src/button-group';

// Styles
import '../infl-styles/_icon.scss';
import '../infl-styles/_font_families_webpack.scss';
import '../infl-styles/_button.scss';
import '../infl-styles/_alert.scss';

class App extends Component {

  render() {

    return (
      <div>
        <ButtonGroup inline={true} grouped={true}>
          <Button type="important">First Button</Button>
          <Button type="important">Second Button</Button>
          <Button type="important">Third Button</Button>
          <Button type="important">Fourth Button</Button>
          <Button type="important">Fifth Button</Button>
        </ButtonGroup>
      </div>
    );
  }
}

React.render(<App/>, document.getElementById('root'));
