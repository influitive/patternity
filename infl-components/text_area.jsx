var React = require('react');
var classNames = require('classnames');
var Icon = require('./icon.jsx');
var InputIcon = require('./text/input_icon.jsx');
var InputMessage = require('./text/input_message.jsx');

class TextAreaContainer extends React.Component {
  render() {
    return (
      <span className={ this._classNames() }>
        <InputIcon type={this.props.type} required={this.props.required} />

        { this.props.children }

        <InputMessage message={this.props.message} />
      </span>
    );
  }

  _classNames() {
    return classNames({
      'is-required':  this.props.required,
      'is-error':     this.props.error,
      'is-valid':     this.props.valid,
      'is-disabled':  this.props.disabled,
      'is-clearable': this.props.clearable
    }, this.props.classNames);
  }
}

var TextArea = React.createClass({
  displayName: 'TextArea',

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

TextAreaContainer.defaultProps = {
  id:       '',
  message:  '',
  required: false,
  error:    false,
  valid:    false,
  disabled: false
};

TextAreaContainer.propTypes = {
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
};

class TextArea extends React.Component {
  componentWillReceiveProps(newProps) {
    this._setInputFocus( newProps.autofocus );
  }

  componentDidMount() {
    this._setInputFocus( this.props.autofocus );
  }

  render() {
    return (
      <TextAreaContainer {...this.props} classNames={this._classNames()}>
        <textarea {...this.props} ref="input" />
      </TextAreaContainer>
    );
  }

  _setInputFocus(autofocus) {
    if ( autofocus ) { React.findDOMNode(this.refs.input).focus(); }
  }

  _classNames() {
    return {
      'pt-textarea': true,
      'autoexpand':  this.props.autoexpand
    };
  }
}

TextArea.defaultProps = {
  autoexpand: true,
  style: {
    height: 'inherit'
  }
};

TextArea.propTypes = {
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
};

module.exports = TextArea;
