import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'babel/polyfill';
import $ from 'jquery';

import { Overlay } from 'react-overlays';

import PopoverContent from './popover-content';

import style from './_popover.scss';

class Popover extends Component {
  static propTypes = {
    isOpen:            PropTypes.bool.isRequired,
    position:          PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    containerSelector: PropTypes.string,
    element:           PropTypes.any.isRequired,
    onOpen:            PropTypes.func,

    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: function(props, propName) {
        const { background, borderColor } = props;
        if (borderColor && background.includes('rgba')) {
          return new Error('Cannot use border with transparent background');
        }
      }
    })
  }

  static defaultProps = {
    isOpen:            false,
    position:          'top',
    containerSelector: 'body',
    onOpen:            function() {},

    style: {
      borderColor: '#ccc',
      background:  'white'
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.props.onOpen();
    }
  }

  render() {
    return (
      <div>
        <Overlay
          show={this.props.isOpen}
          placement={this.props.position}
          container={document.body}
          target={props => this.refs.element}
        >
          <PopoverContent
            position={this.props.position}
            shouldHaveBorder={this._shouldHaveBorder()}
            style={this.props.style}
          >
            {this.props.children}
          </PopoverContent>
        </Overlay>
        <div ref="element" style={{display: 'inline-block'}}>
          {this.props.element}
        </div>
      </div>
    );
  }

  _shouldHaveBorder() {
    const { borderColor, background } = this.props.style;
    return borderColor && !background.includes('rgba');
  }
}

export default Popover;
