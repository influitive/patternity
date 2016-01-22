import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Icon extends Component {
  static propTypes = {
    icon:      PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    return (
      <span ref="icon" className={this._getClassNames()} />
    );
  }

  _getClassNames() {
    const influitiveIconName = 'ic-' + this.props.icon;
    let classes = classNames('ic', influitiveIconName);
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return classes;
  }
}

export default Icon;
