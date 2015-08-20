var React = require('react');
var classNames = require('classnames');

var ToggleSwitch = React.createClass({
  getDefaultProps: function() {
    return {
      id:        '',
      enabled:   true,
      isOn:      false,
      onChange:  function() {},
      inputName: ''
    };
  },

  propTypes: {
    id:        React.PropTypes.string,
    enabled:   React.PropTypes.bool,
    isOn:      React.PropTypes.bool,
    onChange:  React.PropTypes.func,
    inputName: React.PropTypes.string
  },

  render: function() {
    return <span id={this.props.id} className={this._switchCSSClasses()} onClick={this._handleClick} >
      <span className='toggle-text' ref='text'>{this._toggleText()}</span>
      <span className='switch'>
        <span className='switch-line'></span>
        <span className='switch-line'></span>
        <span className='switch-line'></span>
      </span>
      <input type="checkbox" ref="checkbox" className="toggle-checkbox"
        checked={this.props.isOn}
        name={this.props.inputName}
        id={this.props.id}
        readOnly />
    </span>;
  },

  _toggleText: function() {
    return this.props.isOn ? 'On' : 'Off';
  },

  _switchCSSClasses: function() {
    return classNames({
      'toggle-switch': true,
      'on':            this.props.isOn,
      'off':           !this.props.isOn,
      'disabled':      !this.props.enabled
    });
  },

  _handleClick: function() {
    if (this.props.enabled) this.props.onChange();
  }
});

module.exports = ToggleSwitch;
