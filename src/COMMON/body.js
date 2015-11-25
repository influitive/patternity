import React, { Component } from 'react';

export default class Body extends Component {

  render() {
    const classes = this.props.children
      ? 'pt-body'
      : null;

    return (
      <div className={ classes }>
        {this.props.children}
      </div>
    );
  }

}
