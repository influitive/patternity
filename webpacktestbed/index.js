import React, { Component } from 'react';

import Popover from '../src/popover2';

const style = {
  background:  'blue',
  borderColor: 'red'
}

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return <div style={{textAlign: 'center', background: 'white'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Popover position="bottom" isOpen={this.state.isOpen}
        element={<span onClick={() => this.setState({isOpen: !this.state.isOpen})}>HOWDY JOE</span>}
        style={style}>
        <div style={{padding: '15px', width: 300}}>
          <span>
            Hello Shaneciw! There are a lot of things going on here.
            Lots of things yes sir.
          </span>
        </div>
      </Popover>
    </div>;
  }
}

React.render(<App/>, document.getElementById('root'));
