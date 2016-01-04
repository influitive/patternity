const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');
const InputIcon = require('../text/input_icon');
const InputMessage = require('../text/input_message');
const InputAction = require('../text/input_action');

class TextInput extends React.Component {
  static propTypes = {
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
  }

  static defaultProps = {
    type:        'text',
    placeholder: '',
    name:        '',
    id:          '',
    pattern:     null,
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
  }

  constructor(props, context) {
    super(props, context);
    this._clearInputValue = this._clearInputValue.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {value: props.value};
  }

  componentWillReceiveProps(newProps) {
    this.setState({ value: newProps.value });
    this._setInputFocus(newProps.autofocus);
  }

  componentDidMount() {
    this._setInputFocus(this.props.autofocus);
  }

  render() {
    return <span className={this._determineInputStyling()}>
      <InputIcon type={this.props.type} required={this.props.required}/>
      <input readOnly={this.props.readOnly} required={this.props.required} type={this.props.type} value={this.state.value}
             placeholder={this.props.placeholder} name={this.props.name} id={this.props.id}
             pattern={this.props.pattern} disabled={this.props.disabled} onChange={this._handleChange} ref="input"/>
      <InputAction clearable={this.props.clearable} help={this.props.help} onCleared={this._clearInputValue}/>
      <InputMessage message={this.props.message}/>
    </span>;
  }

  _setInputFocus(autofocus) {
    if (autofocus) {
      ReactDOM.findDOMNode(this.refs.input).focus();
    }
  }

  _determineInputStyling() {
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
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event);
  }

  _clearInputValue() {
    this.setState({
      value: ''
    }, this.props.onCleared());
  }
}

TextInput.defaultProps = {
  type:        'text',
  placeholder: '',
  name:        '',
  id:          '',
  pattern:     null,
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

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
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
  required:  React.PropTypes.bool,
  error:     React.PropTypes.bool,
  valid:     React.PropTypes.bool,
  readOnly:  React.PropTypes.bool,
  disabled:  React.PropTypes.bool,
  onChange:  React.PropTypes.func,
  clearable: React.PropTypes.bool,
  onCleared: React.PropTypes.func,
  autofocus: React.PropTypes.bool,
  key:       React.PropTypes.string,
  help:      React.PropTypes.any
};

module.exports = TextInput;
