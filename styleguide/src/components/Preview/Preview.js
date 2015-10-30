// Based on https://github.com/joelburget/react-live-editor/blob/master/live-compile.jsx

import React, { Component, PropTypes } from 'react';
import reactTools from 'react-tools';
import merge from 'merge';

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
    // This is hacky but unfortunately react swallows invalid props provided to eval
    // so we need to catch any errors output to console and show them here.
    // let errorHandler = console.error;
    // let error = null;
    // console.error = (errorObject) => {
    //   error = errorObject;
    // };
    console.log('hey');
    var compiledCode = this.compileCode();
    try{
      let val = eval(compiledCode);
      console.log(val);
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
