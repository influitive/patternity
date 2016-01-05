import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Checkbox extends Component {
  static propTypes = {
    id:            PropTypes.string,
    enabled:       PropTypes.bool,
    isChecked:     PropTypes.bool,
    required:      PropTypes.bool,
    error:         PropTypes.bool,
    onChange:      PropTypes.func,
    label:         PropTypes.string,
    name:          PropTypes.string,
    value:         PropTypes.string,
    indeterminate: PropTypes.bool
  };

  static defaultProps = {
    id:            '',
    enabled:       true,
    isChecked:     false,
    onChange:      () => {},
    label:         null,
    value:         '',
    indeterminate: false
  };

  state = {
    isChecked: this.props.isChecked
  };

  componentDidMount() {
    React.findDOMNode(this).indeterminate = this.props.indeterminate && !this._isChecked();
  }

  render() {
    const { id, value, enabled, label, name } = this.props;

    return(
      <span
        id={id}
        className={this._checkboxCSSClasses()}
        ref='checkbox'
        onClick={this._clickCheckBox}
        onTouchStart={this._toggleCheck}>

        <span
          className='stylized-checkbox'
          ref='stylizedCheckbox' />

        <label
          htmlFor={id}
          className="pt-checkbox-label"
          ref="label">
          {label}
          {this._icon()}
        </label>

        <input
          id={id}
          ref='nativeCheckbox'
          name={name}
          value={value}
          type="checkbox"
          disabled={!enabled}
          className="pt-native-checkbox"
          checked={this._isChecked()}
          onChange={this._handleChange}
          />
      </span>
    );

  }

  _isChecked = () => {
    return this.props.isChecked;
  };

  _checkboxCSSClasses = () => {
    return classNames({
      'pt-checkbox':   true,
      'is-error':      this.props.error,
      'is-required':   this.props.required,
      'isChecked':     this.state.isChecked,
      'disabled':      !this.props.enabled,
      'indeterminate': this.props.indeterminate && !this.state.isChecked
    });
  };

  _clickCheckBox = () => {
    if (!this.props.enabled) return;
    React.findDOMNode(this.refs.nativeCheckbox).click();
  };

  _handleChange = (event) => {
    this.setState({isChecked: !this.state.isChecked});
    this.props.onChange(event);
  };

  _icon = () => {
    if (!this.props.required) return;
    return <span className='required-icon ic ic-asterisk'></span>
  };
}
