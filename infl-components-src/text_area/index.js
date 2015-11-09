const React = require('react');
const classNames = require('classnames');
const Icon = require('../icon');
const InputIcon = require('../text/input_icon');
const InputMessage = require('../text/input_message');

class TextAreaContainer extends React.Component {
  static defaultProps = {
    id:       '',
    message:  '',
    required: false,
    error:    false,
    valid:    false,
    disabled: false
  }

  static propTypes = {
    id:       React.PropTypes.string,
    required: React.PropTypes.bool,
    error:    React.PropTypes.bool,
    valid:    React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    message:  React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
      React.PropTypes.array
    ])
  }

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


class TextArea extends React.Component {
  static defaultProps = {
    id:          '',
    value:       '',
    placeholder: '',
    readOnly:    false,
    disabled:    false,
    autofocus:   false,
    autoexpand:  true,

    style: {
      height: 'inherit'
    }
  }

  static propTypes = {
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
  }

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

export default TextArea;
