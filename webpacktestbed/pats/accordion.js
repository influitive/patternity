import React, { Component } from 'react';

import Accordion from '../accordion';
import '../../infl-styles/_accordion.scss';

class Add extends Component {
  state = {
    list: []
  }
  render() {
    return <div>
      {this.state.list.map((item, key) => <div key={key}>{item}</div>)}
      <button onClick={this.click}>CLICK ME</button>
    </div>;
  }
  click = () => {
    this.setState({list: this.state.list.concat('HELLO THERE GOOD BUDDY')});
  }
}

export default class AccordionPat extends Component {
  state = {
    sections: [{
      'header':    'Section Header One',
      'body':      <Add/>,
      'key':       'test-2',
      'isEnabled': true
    },{
      'header':    'Section Header Two',
      'body':      'Section Body Two',
      'key':       'test-3',
      'isEnabled': false
    },{
      'header':    'Section Header Three',
      'body':      'Section Body Three',
      'key':       'test-1',
      'isEnabled': true
    }]
  }
  render() {
    return <Accordion initialSectionIndex={0} sections={this.state.sections}/>
  }
}
