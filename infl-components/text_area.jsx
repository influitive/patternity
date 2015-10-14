var React = require('react');
var classNames = require('classnames');
var Icon = require('./icon.jsx');
var InputIcon = require('./text/input_icon.jsx');
var InputMessage = require('./text/input_message.jsx');

var TextAreaContainer = React.createClass({
  getDefaultProps: function() {
    return {
      id:       '',
      message:  '',
      required: false,
      error:    false,
      valid:    false,
      disabled: false
    };
  },
  propTypes: {
    id:       React.PropTypes.string,
    message:  React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
      React.PropTypes.array
    ]),
    required: React.PropTypes.bool,
    error:    React.PropTypes.bool,
    valid:    React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },

  render: function() {
    return (
      <span className={ this._classNames() }>
        <InputIcon type={this.props.type} required={this.props.required} />

        { this.props.children }

        <InputMessage message={this.props.message} />
      </span>
    );
  },

  _classNames: function() {
    return classNames({
      'is-required':  this.props.required,
      'is-error':     this.props.error,
      'is-valid':     this.props.valid,
      'is-disabled':  this.props.disabled,
      'is-clearable': this.props.clearable
    }, this.props.classNames);
  }
});

var TextArea = React.createClass({
  propTypes: {
    id:          React.PropTypes.string,
    name:        React.PropTypes.string.isRequired,
    value:       React.PropTypes.string,
    placeholder: React.PropTypes.string,
    readOnly:    React.PropTypes.bool,
    disabled:    React.PropTypes.bool,
    autofocus:   React.PropTypes.bool,
    autoexpand:  React.PropTypes.bool,
    onChange:    React.PropTypes.func.isRequired,
    style:       React.PropTypes.shape({
      height: React.PropTypes.string
    })
  },

  getDefaultProps: function() {
    return {
      autoexpand: true,
      style: {
        height: 'inherit'
      }
    };
  },

  componentWillReceiveProps: function(newProps) {
    this._setInputFocus( newProps.autofocus );
  },

  componentDidMount: function() {
    this._setInputFocus( this.props.autofocus );
  },

  render: function() {
    return (
      <TextAreaContainer {...this.props} classNames={this._classNames()}>
        <textarea {...this.props} ref="input" />
      </TextAreaContainer>
    );
  },

  _setInputFocus: function(autofocus) {
    if ( autofocus ) { React.findDOMNode(this.refs.input).focus(); }
  },

  _classNames: function() {
    return {
      'pt-textarea': true,
      'autoexpand':  this.props.autoexpand
    };
  }
});

module.exports = TextArea;
