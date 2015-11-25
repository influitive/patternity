import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class AccordionHeader extends Component {
  static propTypes = {
    open:      PropTypes.bool,
    isEnabled: PropTypes.bool
  }

  render() {
    const { open, isEnabled, header } = this.props;
    const classes = () => classNames('section-heading', {open: open, disabled: !isEnabled});

    return <h3 className={classes()} onClick={this._onClick}>
      {header}
    </h3>
  }


  _onClick = () => {
    if (this.props.isEnabled) {
      this.props.toggleOne(this.props.index);
    }

    // Invoke any callbacks on the toggle
    this.props.cb(e, this.props);
  }

}

export default AccordionHeader;
