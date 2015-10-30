import React, { Component, PropTypes } from 'react';

// import styles from './_button.scss';

class ButtonDropdown extends Component {
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
      borderColor: function(props, propName) {
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
    const { style, disabled, type, title } = this.props;
    return <div style={style} className={'button-dropdown ' + this._isDropdownOpen()} disabled={disabled} ref='buttonDropdown'>
      <button className={type} onClick={this._toggleDropdownOptions} ref='button'>
        <span ref='title'>{title}</span>
        <span className='arrow ic ic-chevron-down' ref='icon'></span>
      </button>
      <ul className={this._getOptionsClasses()} ref='options'>
        {this._buildDropdown()}
      </ul>
    </div>;
  }

  _toggleDropdownOptions = (event)  => {
    if (this.props.disabled)
      return;
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  _isDropdownOpen = () => {
    return this.state.isDropdownOpen
      ? 'show'
      : '';
  }

  _buildDropdown = () => {
    return this._populateOptions().map(this._buildOption);
  }

  _populateOptions = () => {
    return this.props.children.length > 0
      ? this.props.children
      : this.props.options;
  }

  _buildOption = (option, index) => {
    return <li className='option' key={'option-' + index} onClick={this._handleChange}>{option}</li>;
  }

  _handleChange = (key) => {
    this.props.onChange(key);
    this.setState({
      isDropdownOpen: false
    });
  }

  _getOptionsClasses = () => {
    var classes = 'options options-aligned-' + this.props.alignDropdown;
    return classes;
  }
}

export default ButtonDropdown;
