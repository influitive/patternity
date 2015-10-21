import React, { Component, PropTypes } from 'react';
import 'babel/polyfill';
import { Overlay } from 'react-overlays';

import PopoverArrow from './popover-arrow';

class PopoverContent extends Component {
  static propTypes = {
    position:          PropTypes.oneOf([
      'top',
      'bottom'
    ]),
    shouldHaveBorder:  PropTypes.bool.isRequired,
    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    position: 'top',
    style:    {
      borderColor: '#ccc',
      background:  'white'
    }
  }

  render() {
    const borderColor = this.props.shouldHaveBorder ? this.props.style.borderColor : 'transparent';

    return (
      <div>
        <PopoverArrow
            position={this.props.position}
            shouldHaveBorder={this.props.shouldHaveBorder}
            style={this.props.style}
            ref="arrow" />
        <div className="pt-popover-content" ref="content" style={{...this.props.style, borderColor: borderColor}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PopoverContent;
