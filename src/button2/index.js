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
    type:     'primary',
    disabled: false,
    inverse:  false,
    isSubmit: false
  }


  render() {
    const { disabled, onClick, children } = this.props;
    return <button style={this.props.style} type={this._buttonType()} disabled={this.props.disabled} className={this.getClasses()} onClick={onClick}>
      {children}
    </button>;
  }


  _buttonType = () =>{
    if(this.isSubmit)
      return 'submit';
    else
      return 'button';
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
      icon && 'ic ic-' + icon,
      !disabled && {
        [type]:  true,
        inverse: (type === 'secondary' || type === 'text') && inverse
      }
    );
  }
}

export default Button;
