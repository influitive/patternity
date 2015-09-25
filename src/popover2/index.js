import React, { Component, PropTypes } from 'react';
import _, { includes } from 'lodash';
import $ from 'jquery';

import { default as pos } from './position-popover';

import style from './_popover2.scss';

class Popover extends Component {
  static propTypes = {
    isOpen:            PropTypes.bool,
    position:          PropTypes.oneOf(['top', 'bottom']),
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
      pos(this.getPopoverElements(), this.props.position);
      this.props.onOpen();
    }
  }

  render() {
    const { element, style, isOpen, position, children } = this.props;
    const contentBorder = this.shouldHaveBorder() ? style.borderColor : 'transparent';

    return <div className="pt-popover2" ref="popover">
      {!isOpen ? null : <div>
        {this.createArrow()}
        <div className="content" ref="content" style={{...style, borderColor: contentBorder}}>
          {children}
        </div>
      </div>}
      <div className="element" ref="element">
        {element}
      </div>
    </div>;
  }

  shouldHaveBorder() {
    const { borderColor, background } = this.props.style;
    return borderColor && !background.includes('rgba');
  }

  createArrow() {
    const { position, style } = this.props;
    let { borderColor, background } = style;

    if (!this.shouldHaveBorder()) borderColor = 'transparent';

    const borderPos = position === 'bottom' ? 'Bottom' : 'Top';
    return <div className={`arrow-container ${position}`}>
      <span className="arrow" style={{[`border${borderPos}Color`]: borderColor}}>
        <span className={`arrow inner ${this.shouldHaveBorder() ? '' : 'no-border'}`}
          style={{[`border${borderPos}Color`]: background }}></span>
        </span>
    </div>;
  }

  getPopoverElements() {
    return {
      element:   React.findDOMNode(this.refs.element),
      content:   React.findDOMNode(this.refs.content),
      container: $(this.props.containerSelector).get(0)
    };
  }
}

export default Popover;
