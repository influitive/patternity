import React, { Component } from 'react';

import SaveButton from '../src/save-button';

class App extends Component {
  state = {
    saveStatus: 'unsaved'
  }

  render() {
    var text = {
      unsaved: 'customUnsaved',
      saved:   'CustomSaved',
      saving:  'CustomSaving'
    };
    const { saveStatus } = this.state;
    return <SaveButton customText={text} saveStatus={saveStatus} onClick={this.saveHandler}/>
  }

  saveHandler = () => {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(() => { this.setState({saveStatus: 'error'}); }, 1000);
  }
}

React.render(<App/>, document.getElementById('root'));
