import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SaveButton from '../src/save-button';
// import Accordion from '../src/accordion';

import Popover from '../src/popover';

// class App extends Component {
//   state = {
//     ind: 0,
//     saveStatus: 'unsaved',
//     sections: [{
//       "header" : "Section Header One",
//       "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       "key" : "test-2",
//       "isEnabled" : true
//     },{
//       "header" : "Section Header Two",
//       "body" : "Section Body Two",
//       "key" : "test-3",
//       "isEnabled" : false
//     },{
//       "header" : "Section Header Three",
//       "body" : "Section Body Three",
//       "key" : "test-1",
//       "isEnabled" : true
//     }]
//   }
//   componentDidMount() {
//     var sections = [{
//       "header" : "Section Header One",
//       "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       "key" : "test-2",
//       "isEnabled" : true
//     },{
//       "header" : "Section Header Two",
//       "body" : "Section Body Two",
//       "key" : "test-3",
//       "isEnabled" : false
//     },{
//       "header" : "Section Header Three",
//       "body" : "Section Body Three",
//       "key" : "test-1",
//       "isEnabled" : true
//     }];
//
//     window.setInterval(() => {
//       sections[0].body += 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n';
//       this.setState({sections: sections});
//     }, 1000);
//   }
//   render() {
//     var text = {
//       unsaved: 'customUnsaved',
//       saved:   'CustomSaved',
//       saving:  'CustomSaving'
//     };
//     const { sections, ind } = this.state;
//
//     return <div>
//       <button onClick={() => this.setState({ind: ind ? 0 : 2})}/>
//       <Accordion sections={sections} openSectionIndex={ind}/>
//     </div>
//   }
//
//   saveHandler = () => {
//     if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
//     setTimeout(() => { this.setState({saveStatus: 'error'}); }, 1000);
//   }
// }

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div style={{margin: '200px'}}>
        <Popover element={this._popoverElement()} isOpen={this.state.isOpen}>
          <p>awesome popover yeah!</p>
        </Popover>
      </div>
    );
  }

  _popoverElement() {
    return (
      <span onClick={this._showPopover}>show popover</span>
    );
  }

  _showPopover = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
