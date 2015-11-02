// Based on https://github.com/joelburget/react-live-editor/blob/master/live-compile.jsx

import React, { Component, PropTypes } from 'react';
import reactTools from 'react-tools';

export default class Preview extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  state = {}

  compileCode = () => {
    return reactTools.transform(
        this.props.code,
      {
        harmony: true
      }
    );
  }

  executeCode = () => {
    var compiledCode = this.compileCode();
    try{
      let val = eval(compiledCode);
      return val;
    } catch(e){
      return <div className="playgroundError">{e.toString()}</div>
    }
  }

  render() {
    return (
      <div className='PreviewArea'>
        {this.executeCode()}
      </div>
    );
  }
}
