import React, { Component, PropTypes } from 'react';
import 'babel/polyfill';

class PopoverArrow extends Component {
  static propTypes = {
    position:          PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right'
    ]),
    shouldHaveBorder:  PropTypes.bool.isRequired,
    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    }),
    arrowOffsetLeft: PropTypes.string,
    arrowOffsetTop:  PropTypes.string
  }

  static defaultProps = {
    position: 'top',
    style:    {
      borderColor: '#ccc',
      background:  'white'
    },
    arrowOffsetLeft: undefined,
    arrowOffsetTop:  undefined
  }

  render() {
    const { position, style, shouldHaveBorder } = this.props;
    let { borderColor, background } = style;

    if (!shouldHaveBorder) borderColor = 'transparent';

    const borderPos = position.charAt(0).toUpperCase() + position.substr(1);

    return (
      <div className={`pt-popover-arrow-container ${position}`} style={{
          left: "calc(" + this.props.arrowOffsetLeft + " - 10px)",
          top: "calc(" + this.props.arrowOffsetTop + " - 10px)",
        }}>
        <span className="pt-popover-arrow" style={{[`border${borderPos}Color`]: borderColor}}>
          <span className={`pt-popover-arrow inner ${shouldHaveBorder ? '' : 'no-border'}`}
            style={{[`border${borderPos}Color`]: background }}></span>
          </span>
      </div>
    );
  }
}

export default PopoverArrow;
