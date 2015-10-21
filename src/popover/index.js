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
    position:          PropTypes.oneOf(['top', 'bottom']),
    containerSelector: PropTypes.string,
    element:           PropTypes.any.isRequired,
    onOpen:            PropTypes.func,

    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: this._determineBorderColour()
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
      <div className="pt-popover" ref="popover">
        <Overlay
          show={this.props.isOpen}
          placement={this.props.position}
          container={document.body}
          target={props => ReactDOM.findDOMNode(this.refs.element)}
        >
          <PopoverContent
            position={this.props.position}
            shouldHaveBorder={this._shouldHaveBorder()}
            style={this.props.style}
          >
            {this.props.children}
          </PopoverContent>
        </Overlay>
        <div className="pt-popover-element" ref="element">
          {this.props.element}
        </div>
      </div>
    );
  }

  _determineBorderColour: function(props, propName) {
    const { background, borderColor } = props;
    if (borderColor && background.includes('rgba')) {
      return new Error('Cannot use border with transparent background');
    }
  }

  _shouldHaveBorder() {
    const { borderColor, background } = this.props.style;
    return borderColor && !background.includes('rgba');
  }
}

export default Popover;
