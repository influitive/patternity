import React, { Component } from 'react';

import SaveButton from '../infl-components/save-button';
import Accordion from '../infl-components/accordion.jsx';
import Popover from '../infl-components/popover';
import Alert from '../infl-components/alert.jsx';
import ButtonDropdown from '../infl-components/button_dropdown.jsx';
import ButtonGroup from '../infl-components/button_group.jsx';



import '../src/accordion/_accordion.scss';

class App extends Component {
  state = {
    ind: 0,
    saveStatus: 'unsaved',
    sections: [{
      "header" : "Section Header One",
      "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "key" : "test-2",
      "isEnabled" : true
    },{
      "header" : "Section Header Two",
      "body" : "Section Body Two",
      "key" : "test-3",
      "isEnabled" : true
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
    const { sections, ind } = this.state;
    const style = {
      background: 'rgba(0, 0, 0, 0)',
      borderColor: 'blue'
    };
    return <div>
      <Popover style={style} element={<span>hi!</span>}>
        hello
      </Popover>
      <button onClick={() => this.setState({ind: (ind + 1 ) % 3})}/>
      <Accordion sections={sections} initialSectionIndex={ind} />
    </div>
  }

  saveHandler = () => {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(() => { this.setState({saveStatus: 'error'}); }, 1000);
  }
}

React.render(<App/>, document.getElementById('root'));
