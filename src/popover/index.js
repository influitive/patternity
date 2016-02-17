import React, { Component, PropTypes } from 'react';
import TetherComponent from 'react-tether'
import PopoverContent from './popover-content';
import PopoverArrow from './popover-arrow';
//import style from './_popover.scss';

class Popover extends Component {
  static propTypes = {
    isOpen:            PropTypes.bool.isRequired,
    position:          PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    containerSelector: PropTypes.string,
    element:           PropTypes.any.isRequired,
    onOpen:            PropTypes.func,

    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: function(props) {
        let borderColor = props.borderColor || '';
        if (borderColor.length > 0 && /rgba/.test(props.background)) {
          return new Error('Cannot use border with transparent background');
        }
      }
    }),
    className: PropTypes.string,
    hasShadow: PropTypes.bool,
    onClickOut: PropTypes.func
  }

  static defaultProps = {
    isOpen:            false,
    position:          'top',
    containerSelector: 'body',
    onOpen:            function() {},

    style: {
      borderColor: '#ccc',
      background:  'white'
    },
    className:          '',
    hasShadow:          false,
    onClickOut:         null
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && prevProps.isOpen !== this.props.isOpen) {
      this.props.onOpen();
    }
  }

  render() {
    return (
      <span style={{position: 'relative'}}>
        {this._getTetherElement()}
        {this._getArrowElement()}
      </span>
    );
  }

  _getElement = () => {
    return(
      <span>
        {this.props.element}
      </span>
    );
  }

  _getPopoverElement = () => {
    if ( !this.props.isOpen )
      return null;
    return (
        this._getPopoverContent()
    );
  }

  _getArrowElement = () => {
    if ( !this.props.isOpen )
      return null;
    return (
      <PopoverArrow
        position={this.props.position}
        shouldHaveBorder={this._shouldHaveBorder()}
        style={this.props.style}/>
    );
  }

  _getBackDropElement = () => {
    if ( !this.props.onClickOut )
      return null;
    return (
      null
    );
  }

  _getTetherElement = () => {
    const tetherOptions = this._getTetherOptions();
    return (
      <TetherComponent {...tetherOptions}>
        {this._getElement()}
        {this._getPopoverElement()}
      </TetherComponent>
    );
  }

  _getTetherOptions = () => {
    let attachment, targetAttachment;

    switch (this.props.position) {
    case 'top':
      attachment = 'bottom center';
      targetAttachment = 'top center';
      break;
    case 'bottom':
      attachment = 'top center';
      targetAttachment = 'bottom center';
      break;
    case 'left':
      attachment = 'middle right';
      targetAttachment = 'middle left';
      break;
    case 'right':
      attachment = 'middle left';
      targetAttachment = 'middle right';
      break;
    }

    return {
      attachment: attachment,
      targetAttachment: targetAttachment,
      constraints: [
        {
          to: 'window',
          pin: ['left','right']
        }
      ]
    };
  }

  _getPopoverContent = () => {
    let {position, style, hasShadow, children} = this.props;
    return (
      <PopoverContent
        position={position}
        shouldHaveBorder={this._shouldHaveBorder()}
        style={style}
        hasShadow={hasShadow}>
        {children}
      </PopoverContent>
    );
  }

  _shouldHaveBorder = () => {
    let borderColor = this.props.style.borderColor || '';
    return borderColor.length > 0 && /rgba/.test(this.props.style.background);
  }

  _handleBackDropClick = () => {
    this.props.onClickOut();
  }
}

export default Popover;
