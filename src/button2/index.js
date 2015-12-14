import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    icon:      PropTypes.string,
    type:      PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
    onClick:   PropTypes.func.isRequired,
    disabled:  PropTypes.bool,
    inverse:   PropTypes.bool,
    isSubmit:  PropTypes.bool,
    style:     PropTypes.object,
    classList: PropTypes.string,
    theme:     PropTypes.object,
    sheet:     PropTypes.object
  }

  static defaultProps = {
    disabled:  false,
    inverse:   false,
    isSubmit:  false,
    classList: null,
    sheet: { classes: {} }
  }

  render() {
    const { style, disabled, type, onClick, children, isSubmit } = this.props;

    return <button type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      className={this.getClasses()}
      onClick={onClick}>
      {children}
    </button>;
  }

  getClasses = () => {
    const { disabled, inverse, type, children, classList, icon } = this.props;
    const { classes } = this.props.sheet;

    return classNames(
      'button',
      !disabled && type,
      {
        disabled:   disabled,
        iconButton: children && children.length === 0
      },
      icon && 'ic ic-' + icon,
      !disabled && {
        inverse: (type === 'secondary' || type === 'text') && inverse
      },
      classList,
      classes[type]
    );
  }
}

export default Button;