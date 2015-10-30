var React = require('react');

var isArray = require('lodash/lang/isArray');

var InputMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
      React.PropTypes.array
    ])
  },

  getDefaultProps: function() {
    return {
      message: null
    };
  },

  render: function() {
    if (this.props.message === null) return null;

    return (
      <div>{ this._message() }</div>
    );
  },

  _message: function() {
    if (isArray(this.props.message)) {
      return this.props.message.map(function(message, i) {
        return (
          <div key={i} className="input-message">{message}</div>
        );
      });
    } else {
      return (
        <div className="input-message">{this.props.message}</div>
      );
    }
  }
});

module.exports = InputMessage;
