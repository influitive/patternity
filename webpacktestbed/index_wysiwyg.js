import React, { Component } from 'react';

import Wysiwyg from '../src/wysiwyg';
import styles from '../node_modules/quill/dist/quill.snow.css';
import s from '../src/wysiwyg/_wysiwyg.scss';

class App extends Component {
  render() {
    return <Wysiwyg />
  }
}

React.render(<App/>, document.getElementById('root'));
