import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class AccordionHeader extends Component {
  static propTypes = {
    open:      PropTypes.bool,
    isEnabled: PropTypes.bool,
    cb:        PropTypes.func
  }

  render() {
    const { open, isEnabled, header } = this.props;
    const classes = () => classNames('section-heading', {open: open, disabled: !isEnabled});

    return <h3 className={classes()} onClick={this._onClick}>
      {header}
    </h3>
  }


  _onClick = (e) => {
    if (this.props.isEnabled) {
      this.props.toggleOne(this.props.index);

      // Invoke any callbacks on the toggle
      if (this.props.cb) this.props.cb(e, this.props);
    }

  }

}

export default AccordionHeader;
