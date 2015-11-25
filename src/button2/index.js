import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// Will need to break this style up between dropdown button a
// import styles from './_button.scss';

class Button extends Component {
  static propTypes = {
    icon:     PropTypes.string,
    type:     PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text']),
    onClick:  PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    inverse:  PropTypes.bool,
    isSubmit: PropTypes.bool,
    style:    PropTypes.object
  }

  static defaultProps = {
    disabled: false,
    inverse:  false,
    isSubmit: false
  }

  render() {
    const { style, disabled, onClick, children, isSubmit } = this.props;

    return <button style={style}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      className={this.getClasses()}
      onClick={onClick}>
      {children}
    </button>;
  }

  getClasses = () => {
    const { disabled, inverse, type, children, className, icon } = this.props;

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
      }
    );
  }
}

export default Button;
