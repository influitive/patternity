import React, { Component } from 'react';

import SaveButton from '../src/save-button';
import Accordion from '../src/accordion2';

class App extends Component {
  state = {
    saveStatus: 'unsaved',
    sections: [{
      "header" : "Section Header One",
      "body" : "Section Body One",
      "key" : "test-2",
      "isEnabled" : true
    },{
      "header" : "Section Header Two",
      "body" : "Section Body Two",
      "key" : "test-3",
      "isEnabled" : false
    },{
      "header" : "Section Header Three",
      "body" : "Section Body Three",
      "key" : "test-1",
      "isEnabled" : true
    }]
  }

  render() {
    var text = {
      unsaved: 'customUnsaved',
      saved:   'CustomSaved',
      saving:  'CustomSaving'
    };
    const { sections } = this.state;
    return <Accordion sections={sections}/>
  }

  saveHandler = () => {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(() => { this.setState({saveStatus: 'error'}); }, 1000);
  }
}

React.render(<App/>, document.getElementById('root'));
