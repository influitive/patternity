import React, { Component, PropTypes, Addons } from 'react';
import flatten from 'lodash/array/flatten';

var TextInput = require('../../infl-components/text_input.jsx');
var Select    = require('../../infl-components/select_dropdown.jsx');

const CUSTOM = '__custom__';

export default class DropdownWithCustom extends Component {
  static defaultProps = {
    value: '',
    onChange: () => {}
  };

  state = { custom: this._values().indexOf(this.props.value) === -1 };

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    let { value } = this.props;
    if (this.state.custom) {
      value = value === CUSTOM ? '' : value;
      return <TextInput type="text" value={value}
                        placeholder="Enter a custom value"
                        clearable={true}
                        onChange={this.props.onChange}
                        onCleared={this._reset} autofocus={true} />;
    }
    return <Select title={false} value={value} onChange={this._onSelectChange}>
      {this._children()}
    </Select>;
  }

  _children() {
    const customOption = <option value={CUSTOM} key={CUSTOM}>Enter a custom value...</option>;
    let children = flatten([this.props.children || []]);
    return children.concat(customOption);
  }

  _values() {
    return this._children().slice(0, -1).map(option => option.props.value);
  }

  _reset = () => {
    this.setState({custom: false});
    this.props.onChange({target: {value: ''}});
  };

  _onSelectChange = (e) => {
    if (e.target.value === CUSTOM) {
      e.target.value = '';
      this.setState({custom: true});
    }
    this.props.onChange(e);
  };
}
