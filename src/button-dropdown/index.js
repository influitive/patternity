import React, { Component, PropTypes } from 'react';

// import styles from './_button.scss';

class ButtonDropdown extends Component {
  constructor() {
    super();

    this.state = {
      isDropdownOpen: false
    };
  }

  static defaultProps = {
    title:         '',
    type:          '',
    options:       [],
    children:      [],
    alignDropdown: 'left'
  }

  static propTypes = {
    title: PropTypes.string,
    type:  PropTypes.oneOf([
      'success', 'danger', 'primary', 'important', 'secondary', ''
    ]),
    options:       PropTypes.array,
    children:      PropTypes.array,
    alignDropdown: PropTypes.oneOf([
      'left', 'right'
    ])
  }

  render() {
    return <div className={'button-dropdown ' + this._isDropdownOpen()} ref='buttonDropdown'>
      <button className={this.props.type} onClick={this._toggleDropdownOptions} ref='button'>
        <span ref='title'>{this.props.title}</span>
        <span className='arrow ic ic-chevron-down' ref='icon'></span>
      </button>
      <ul className={this._getOptionsClasses()} ref='options'>
        {this._buildDropdown()}
      </ul>
    </div>;
  }

  _toggleDropdownOptions = (event)  => {
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
  }

  _getOptionsClasses = () => {
    var classes = 'options options-aligned-'+this.props.alignDropdown;
    return classes;
  }
}

export default ButtonDropdown;
