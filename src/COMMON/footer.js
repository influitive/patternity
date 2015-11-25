import React, { Component } from 'react';

export default class ModalFooter extends Component {

  render() {
    return (
      <div className='pt-footer'>
        {this.props.children}
      </div>
    );
  }

}
