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
    style:    PropTypes.shape({
      borderColor: function(props, propName) {
        const { type } = props;
        if (type != 'secondary') {
          return new Error('Cannot use border with non-secondary type.');
        }
      }
    })
  }

  static defaultProps = {
    disabled: false,
    inverse:  false,
    isSubmit: false
  }


  render() {
    const { disabled, onClick, children } = this.props;
    return <button style={this.props.style}
      type={this.isSubmit ? 'submit' : 'button'}
      disabled={this.props.disabled}
      className={this.getClasses()}
      onClick={onClick}>
      {children}
    </button>;
  }

  getClasses = () => {
    const { disabled, inverse, type, children, className, icon } = this.props;

    return classNames(
      'button',
      type,
      icon && 'ic ic-' + icon,
      {
        disabled:   disabled,
        iconButton: children && children.length === 0
      },
      !disabled && {
        inverse: (type === 'secondary' || type === 'text') && inverse
      }
    );
  }
}

export default Button;
