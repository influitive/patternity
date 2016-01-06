import React, { Component, PropTypes } from 'react';

class PopoverContent extends Component {
  static propTypes = {
    position: PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right'
    ]),
    shouldHaveBorder: PropTypes.bool.isRequired,

    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    position: 'top',
    style:    {
      borderColor: '#ccc',
      background:  'white',
      top:         null,
      left:        null
    },
    className: ''
  }

  render() {
    return (
      <div className={`pt-popover ${this.props.position}`} ref="popover" style={this._popoverPositioningStyle()}>
        <div className="pt-popover-content" ref="content" style={this._contentStyle()}>
          {this.props.children}
        </div>
      </div>
    );
  }

  _popoverPositioningStyle() {
    return {
      left: this.props.style.left,
      top:  this.props.style.top
    };
  }

  _contentStyle() {
    const borderColor = this.props.shouldHaveBorder ? this.props.style.borderColor : 'transparent';

    return {
      borderColor: borderColor,
      background:  this.props.style.background
    };
  }
}

export default PopoverContent;
