import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import positionPopover from './position-popover';

// import style from './_popover2.scss';

class Popover extends Component {
  static propTypes = {
    isOpen:            PropTypes.bool.isRequired,
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
      positionPopover(this.getPopoverElements(), this.props.position);
      this.props.onOpen();
    }
  }

  render() {
    const { element, style, isOpen, position, children } = this.props;
    const contentBorder = this.shouldHaveBorder() ? style.borderColor : 'transparent';

    return <div className="pt-popover" ref="popover">
      {!isOpen ? null : <div>
        {this.createArrow()}
        <div className="popover-content" ref="content" style={{...style, borderColor: contentBorder}}>
          {children}
        </div>
      </div>}
      <div className="popover-element" ref="element">
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
    return <div className={`popover-arrow-container ${position}`} ref="arrow">
      <span className="popover-arrow" style={{[`border${borderPos}Color`]: borderColor}}>
        <span className={`popover-arrow inner ${this.shouldHaveBorder() ? '' : 'no-border'}`}
          style={{[`border${borderPos}Color`]: background }}></span>
        </span>
    </div>;
  }

  getPopoverElements() {
    return {
      arrow:     React.findDOMNode(this.refs.arrow),
      element:   React.findDOMNode(this.refs.element),
      content:   React.findDOMNode(this.refs.content),
      container: $(this.props.containerSelector).get(0)
    };
  }
}

export default Popover;
