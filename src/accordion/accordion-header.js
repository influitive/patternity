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

    return <h3 className={classes()} onClick={this._toggleContent}>
      {header}
    </h3>
  }

  _toggleContent = () => {
    if (this.props.isEnabled) {
      this.props.toggleOne(this.props.index);
    }
  }

}

export default AccordionHeader;
