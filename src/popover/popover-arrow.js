import React, { Component, PropTypes } from 'react';
//import 'babel/polyfill';

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
    const { position, style, shouldHaveBorder } = this.props;
    let { borderColor, background } = style;

    if (!shouldHaveBorder) borderColor = 'transparent';

    const borderPos = position.charAt(0).toUpperCase() + position.substr(1);

    return (
      <div className={`pt-popover-arrow-container ${position}`} ref="arrowContainer">
        <span className="pt-popover-arrow" ref="arrow" style={{[`border${borderPos}Color`]: borderColor}}>
          <span className={`pt-popover-arrow inner ${shouldHaveBorder ? '' : 'no-border'}`}
            style={{[`border${borderPos}Color`]: background }}></span>
          </span>
      </div>
    );
  }

}

export default PopoverArrow;
