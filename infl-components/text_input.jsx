var React = require('react');
var classNames = require('classnames');
var InputIcon = require('./text/input_icon.jsx');
var InputMessage = require('./text/input_message.jsx');
var InputAction = require('./text/input_action.jsx');

var TextInput = React.createClass({
  displayName: 'TextInput',
  getDefaultProps: function() {
    return {
      type:        'text',
      placeholder: '',
      name:        '',
      id:          '',
      pattern:     '',
      message:     '',
      value:       '',
      required:    false,
      error:       false,
      valid:       false,
      readOnly:    false,
      disabled:    false,
      onChange:    function() {},
      clearable:   false,
      onCleared:   function() {},
      autofocus:   false,
      key:         '',
      help:        null
    };
  },

  propTypes: {
    type:        React.PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
    placeholder: React.PropTypes.string,
    name:        React.PropTypes.string,
    id:          React.PropTypes.string,
    pattern:     React.PropTypes.string,
    message:     React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
      React.PropTypes.array
    ]),
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    required:       React.PropTypes.bool,
    error:          React.PropTypes.bool,
    valid:          React.PropTypes.bool,
    readOnly:       React.PropTypes.bool,
    disabled:       React.PropTypes.bool,
    onChange:       React.PropTypes.func,
    clearable:      React.PropTypes.bool,
    onCleared:      React.PropTypes.func,
    autofocus:      React.PropTypes.bool,
    key:            React.PropTypes.string,
    help:           React.PropTypes.any
  },

  getInitialState: function() {
    return {value: this.props.value};
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ value: newProps.value });
    this._setInputFocus(newProps.autofocus);
  },

  componentDidMount: function() {
    this._setInputFocus(this.props.autofocus);
  },

  render: function() {
    return <span className={this._determineInputStyling()}>
        <InputIcon type={this.props.type} required={this.props.required}/>
        <input readOnly={this.props.readOnly} required={this.props.required} type={this.props.type} value={this.state.value}
               placeholder={this.props.placeholder} name={this.props.name} id={this.props.id}
               pattern={this.props.pattern} disabled={this.props.disabled} onChange={this._handleChange} ref="input"/>
        <InputAction clearable={this.props.clearable} help={this.props.help} onCleared={this._clearInputValue}/>
        <InputMessage message={this.props.message}/>
      </span>;
  },

  _setInputFocus: function(autofocus) {
    if (autofocus) {
      React.findDOMNode(this.refs.input).focus();
    }
  },

  _determineInputStyling: function() {
    return classNames({
      'is-required':  this.props.required,
      'is-error':     this.props.error,
      'is-valid':     this.props.valid,
      'search-input': this.props.type === 'search',
      'pt-input':     true,
      'is-disabled':  this.props.disabled,
      'is-clearable': this.props.clearable,
      'has-help':     this.props.help !== null
    });
  },

  _handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event);
  },

  _clearInputValue: function() {
    this.setState({
      value: ''
    }, this.props.onCleared());
  }
});

module.exports = TextInput;
