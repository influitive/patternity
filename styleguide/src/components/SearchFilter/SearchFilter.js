import React, { Component, PropTypes } from 'react';

import s from './SearchFilter.css';

export default class SearchFilter extends Component {
  static defaultProps = {
    filter: ''
  }

  static propTypes = {
    components: PropTypes.array.isRequired,
    onChange:   PropTypes.func.isRequired,
    filter:     PropTypes.string
  }

  getComponentNames() {
    return this.props.components.map((component) => {
      return component.name;
    });
  }

  _onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  _onClear = () => {
    React.findDOMNode(this.refs.input).value = '';
    this.props.onChange('');
  }

  _renderClear() {
    var style = {
      visibility: this.props.filter.length > 0 ? 'visible' : 'hidden'
    }
    return <div style={style} className={s.clear} onClick={this._onClear}>+</div>;
  }

  render() {
    return (
      <div className={s.inputBox}>
        <input type='text' ref='input' onChange={this._onChange}/>
        {this._renderClear()}
      </div>
    );
  }
}
