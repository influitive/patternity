import React, { Component } from 'react';

import Popover from '../src/popover';
import styles from './test.scss';

const style = {
  background:  'blue',
  borderColor: 'red'
}

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return <div style={{textAlign: 'left', background: 'white'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{position: 'absolute', top: 10, left: 50, width: 25, bottom: 0, background: 'lightblue',
        zIndex: 100}}>
      </div>
      <Popover position="bottom" isOpen={this.state.isOpen}
        element={<span onClick={() => this.setState({isOpen: !this.state.isOpen})}>HOWDY JOE</span>}
        style={style}>
        <div className="injected" style={{padding: '15px'}}>
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
