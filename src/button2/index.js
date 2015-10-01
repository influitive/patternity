import React, { Component, PropTypes } from 'react';
import classNames from 'classNames';

class Button extends Component {
  static propTypes = {
    icon:      PropTypes.string,
    className: PropTypes.string,
    type:      PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
    onClick:   PropTypes.func.isRequired,
    disabled:  PropTypes.bool,
    inverse:   PropTypes.bool
  }

  static defaultProps = {
    type:    'primary',
    disable: false,
    inverse: false,
  }


  render() {
    const { disabled, onClick, children } = this.props;
    return <button disabled={disabled} className={this.getClasses()} onClick={onClick}>
      {children}
    </button>;
  }

  getClasses = () => {
    const buttonTypes = ['primary', 'secondary', 'important', 'success', 'danger', 'text'];
    const { disabled, inverse, type, children, className, icon } = this.props;

    return classNames(
      {
        button:     true,
        disabled:   disabled,
        iconButton: children && children.length === 0
      },
      className,
      icon && 'ic ic-' + icon,
      !disabled && {
        [type]:  true,
        inverse: (type === 'secondary' || type === 'text') && inverse
      }
    );
  }
}

export default Button;
