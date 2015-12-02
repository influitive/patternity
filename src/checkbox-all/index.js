import React, { Component, PropTypes } from 'react';

// Component File Template
export default class CheckboxAll extends Component {

  static propTypes = {
    checkVal: React.PropTypes.oneOf(['-1', '0', '1']),
    onChange: React.func,
  };

  static defaultProps = {
    checkVal: '0',
    onChange: () => {}
  };

  render() {
    const { checkVal, onChange } = this.props;

    return (
      <label className="checkbox-all">
        <input type="checkbox" onChange={onChange} checked={this._isChecked(checkVal)} indeterminate={this._isIndeterminate(checkVal)}/>
      </label>
    );

  };

  _isChecked = (val) => {
    return parseInt(val) === 1;
  };

  _isIndeterminate = (val) => {
    return parseInt(val) === -1;
  };
}
