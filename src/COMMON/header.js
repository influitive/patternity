import React, { Component, PropTypes } from 'react';

export default class ModalHeader extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render() {
    return (
      <div className='pt-header'>
        <h3>{this.props.title}</h3>
      </div>
    );
  }

}
