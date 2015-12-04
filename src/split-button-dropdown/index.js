import React, { Component, PropTypes } from 'react';
import Button from '../button2';
import ButtonGroup from '../button-group';
import Dropdown from '../dropdown';

import classnames from 'classnames';

class SplitButtonDropdown extends Component {
  static defaultProps = {
    title:               '',
    icon:                '',
    type:                'primary',
    disabled:            false,
    style:               {},
    options:             [],
    onDropdownItemClick: () => {}
  }

  static propTypes = {
    title:               PropTypes.string,
    icon:                PropTypes.string,
    type:                PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger']),
    onButtonClick:       PropTypes.func.isRequired,
    disabled:            PropTypes.bool,
    options:             PropTypes.array,
    onDropdownItemClick: PropTypes.func,
    style:               PropTypes.shape({
      borderColor: function(props, propName) {
        const { type } = props;
        if (type != 'secondary') {
          return new Error('Cannot use border with non-secondary type.');
        }
      }
    }),
  }

  state = {
    isDropdownOpen: false,
  };

  render() {
    const { icon, type, onButtonClick, disabled, onDropdownItemClick, title, children } = this.props;

    return (
      <ButtonGroup grouped={true} classList='button-split button-dropdown'>
        <Button icon={icon}
          type={type}
          onClick={onButtonClick}
          classList='main'
          disabled={disabled}>
          {title}
        </Button>

        <Button type={type}
          classList={this._getDropdownButtonClasses()}
          onClick={this._toggleDropdownOpen}
          disabled={disabled}>
          <i className="ic ic-chevron-down"></i>
        </Button>

        { this._getDropdown() }
      </ButtonGroup>
    );
  };

  _getDropdown = () => {
    if (this.props.disabled || !this.state.isDropdownOpen) return null;

    return (
      <Dropdown
        type={this.props.type}
        onChange={this.props.onChange}>
        {this._populateOptions(this.props.children)}
      </Dropdown>
    );
  };

  _getDropdownButtonClasses = () => {
    let isActive = this.state.isDropdownOpen
        ? 'active'
        : '';
    return classnames(
      'dropdown',
      isActive
    );
  };

  _toggleDropdownOpen = (event) => {
    event.preventDefault();
    if (this.props.disabled) return;
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }.bind(this);

  _populateOptions = (options) => {
    return [...options].map( (opt, i) => {
      return <li ref={opt} className="option" onClick={this.props.onDropdownItemClick}>{opt}</li>
    })
  };
}

export default SplitButtonDropdown;
