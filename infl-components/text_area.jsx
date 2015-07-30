var React = require('react');
var classNames = require('classnames');

var Message = React.createClass({
  render: function () {
    if ( ! this.props.message || ! this.props.message.length) { return <span />; }

    return (
      <span>{ this._message() }</span>
    );
  },

  _message: function () {
    if (typeof this.props.message === "string") {
      return (
        <span className="input-message">{this.props.message}</span>
      );
    } else {
      return this.props.message.map(function (message, i) {
        return (
          <span key={i} className="input-message">{message}</span>
        );
      });
    }
  }
});

var Icon = React.createClass({
  render: function () {
    if (this.props.type === 'search') {
      return (
        <span className="search-input ic ic-search"></span>
      );
    } else if(this.props.required) {
      return (
        <span className="required-input ic ic-asterisk"></span>
      );
    } else {
      return <span />;
    }
  }
});

var Container = React.createClass({
  getDefaultProps: function () {
    return {
      id:       "",
      message:  "",
      required: false,
      error:    false,
      valid:    false,
      disabled: false
    };
  },
  propTypes : {
    id:       React.PropTypes.string,
    message:  React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.array ]),
    required: React.PropTypes.bool,
    error:    React.PropTypes.bool,
    valid:    React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },

  render: function () {
    return (
      <span className={ this._classNames() }>
        <Icon {...this.props} />

        { this.props.children }

        <Message message={this.props.message} />
      </span>
    );
  },

  _classNames: function () {
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
    onChange:    React.PropTypes.func.isRequired
  },

  componentWillReceiveProps: function (newProps) {
    this._setInputFocus( newProps.autofocus );
  },

  componentDidMount: function () {
    this._setInputFocus( this.props.autofocus );
  },

  render: function () {
    return (
      <Container {...this.props} classNames={this._classNames()}>
        <textarea {...this.props} ref="input" />
      </Container>
    );
  },

  _setInputFocus: function (autofocus) {
    if ( autofocus ) { React.findDOMNode(this.refs.input).focus(); }
  },

  _classNames: function () {
    return {
      "pt-textarea": true
    };
  }
});

module.exports = TextArea;
