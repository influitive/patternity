import React, { Component } from 'react';

import { merge, uniq } from 'lodash';
import Tagger from '../src/tagger';
import styles from '../src/tagger/tagger.scss';

const containerStyles = {
  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  padding: '40px',
  width: '80%',
  margin: '0 auto'
}

class App extends Component {
  state = {
    tagTest: ['abcd@gmail.com', 'xyz1@gmail.com'],
  }

  render() {

    return (
      <div className="container" style={containerStyles}>
        <Tagger
          tags = {this.state.tagTest}
          placeholder = 'Hello world'
          onTagged = {this._onTagged}
          onUnTagged = {this._onUnTagged}
        />
      </div>
    );
  };

  _onTagged = (tags) => {
    const emails = this.state.tagTest.concat(tags).sort();
    this.setState({
      tagTest: uniq(emails)
    })
  };

  _onUnTagged = (tag) => {
    const index = this.state.tagTest.indexOf(tag);
    let emails = [].concat(...this.state.tagTest);
    emails.splice(index, 1);

    this.setState({
      tagTest: emails
    })
  };
}

React.render(<App/>, document.getElementById('root'));
