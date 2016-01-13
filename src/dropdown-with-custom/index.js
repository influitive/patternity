import React, { Component, PropTypes } from 'react';
import flatten from 'lodash/array/flatten';

import TextInput from '../text_input';
import Select    from '../select_dropdown';

const CUSTOM = '__custom__';

export default class DropdownWithCustom extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '',
    onChange: () => {}
  }

  state = { custom: this._values().indexOf(this.props.value) === -1 }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    let { value } = this.props;
    if (this.state.custom) {
      value = value === CUSTOM ? '' : value;
      return <TextInput placeholder="Enter a custom value"
                        {...this.props}
                        value={value}
                        clearable={true}
                        onChange={this.props.onChange}
                        onCleared={this._reset} autofocus={true} />;
    }
    return <Select {...this.props} value={value} onChange={this._onSelectChange}>
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
