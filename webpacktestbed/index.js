import React, { Component } from 'react';

import SaveButton from '../src/save-button';

class App extends Component {
  state = {
    saveStatus: 'unsaved'
  }

  render() {
    const { saveStatus } = this.state;
    return <SaveButton saveStatus={saveStatus} onClick={this.saveHandler}/>
  }

  saveHandler = () => {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(() => { this.setState({saveStatus: 'saved'}); }, 1000);
  }
}

React.render(<App/>, document.getElementById('root'));
