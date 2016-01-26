import React, { Component, PropTypes } from 'react';
import Button from '../button2';
import ButtonGroup from '../button-group';
import Dropdown from '../dropdown';

export default class ButtonDropdown extends Component {
  static defaultProps = {
    title:         '',
    type:          '',
    options:       [],
    children:      [],
    alignDropdown: 'left',
    onChange:      () => {},
    style:         {},
    disabled:      false
  }

  static propTypes = {
    title:         PropTypes.string,
    type:          PropTypes.oneOf([ 'success', 'danger', 'primary', 'important', 'secondary', '' ]),
    options:       PropTypes.array,
    children:      PropTypes.array,
    alignDropdown: PropTypes.oneOf([ 'left', 'right' ]),
    onChange:      PropTypes.func,
    disabled:      PropTypes.bool,

    style: PropTypes.shape({
      borderColor: function(props) {
        // Not required.
        if (!props.borderColor)
          return;
        const { type } = props;
        if (type != 'secondary') {
          return new Error('Cannot use border with non-secondary type.');
        }
      }
    })
  }

  state = {
    isDropdownOpen: false
  }

  render() {
    const { disabled, type, title } = this.props;

    const buttonDropClasses = this.state.isDropdownOpen
      ? 'button-dropdown show'
      : 'button-dropdown';

    return (
      <ButtonGroup classList={buttonDropClasses}>
        <Button
          classList={this._getButtonClasses(type)}
          onClick={this._toggleDropdownOptions}
          ref='button'
          disabled={disabled}>
          {title}
          <i className='arrow ic ic-chevron-down' ref='icon'></i>
        </Button>

        { this._getDropdown() }
      </ButtonGroup>
    );
  }

  _getDropdown = () => {
    if (this.props.disabled || !this.state.isDropdownOpen) return null;

    return (
      <Dropdown
        type={this.props.type}
        onChange={this.props.onChange}>
        {this._populateOptions()}
      </Dropdown>
    );
  };

  _getButtonClasses = (classList) => {
    if (this.props.title.trim().length > 0) {
      classList += ' button-with-text single';
    }
    return classList;
  };

  _toggleDropdownOptions = (event)  => {
    event.preventDefault();
    if (this.props.disabled) return;
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  _populateOptions = () => {
    return this.props.children.length > 0
      ? [...this.props.children]
      : [...this.props.options];
  };

  _handleChange = (key) => {
    this.props.onChange(key);
    this.setState({
      isDropdownOpen: false
    });
  };

}
