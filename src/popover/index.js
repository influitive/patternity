import React, { Component, PropTypes } from 'react';
import TetherElement from 'react-tether'
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
      <span style={{position: 'relative', display: 'inline-block'}}>
        {this._getElement()}
        {this._getPopoverElement()}
      </span>
    );
  }

  _getElement = () => {
    return React.cloneElement(this.props.element, { ref: 'element' });
  }

  _getPopoverElement = () => {
    if ( !this.props.isOpen )
      return null;
    return (
      <span>
        {this._getBackDropElement()}
        {this._getArrowElement()}
        {this._getTetherElement()}
      </span>
    );
  }

  _getArrowElement = () => {
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
      <div className='pt-popover-backdrop'
        onClick={this._handleBackDropClick}>
      </div>
    );
  }

  _getTetherElement = () => {
    return (
      <TetherElement
        target={this.refs.element}
        options={this._getTetherOptions()}
      >
        {this._getPopoverContent()}
      </TetherElement>
    );
  }

  _getTetherOptions = () => {
    let attachment, targetAttachment;

    switch (this.props.position) {
    case 'top':
      attachment = 'bottom middle';
      targetAttachment = 'top middle';
      break;
    case 'bottom':
      attachment = 'top middle';
      targetAttachment = 'bottom middle';
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
