import React, { Component } from 'react';

// Components
import Button2 from '../lib/button2';
import Confirmation from '../src/confirmation';

// Styles
import '../infl-styles/_modal_dialog.scss';
import '../infl-styles/_button.scss';

class App extends Component {
  state = {
    confirmation: false
  }

  constructor(props) {
    super(props);

    this._toggleConfirmation = this._toggleConfirmation.bind(this);
  }

  render() {
    const ConfirmationComponent = this.state.confirmation
      ? <Confirmation title='ALERT! 'no='Test' onNo={testNo} onYes={this._toggleConfirmation} />
      : null;

    return (
      <div>
        <Button2 onClick={this._toggleConfirmation}>Show Confirmation!</Button2>
        { ConfirmationComponent }
      </div>
    );
  }

  _toggleConfirmation() {
    this.setState({confirmation: !this.state.confirmation});
  }
}

React.render(<App/>, document.getElementById('root'));

function testYes(e) {
  e.preventDefault();
  console.log('Yes pressed');
}

function testNo(e) {
  e.preventDefault();
  console.log('No pressed');
}
