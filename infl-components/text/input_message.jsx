var React = require('react');

var InputMessage = React.createClass({
  PropTypes: {
    message : React.PropTypes.string.isRequired
  },

  render: function () {
    if ( ! this.props.message || ! this.props.message.length) {
      return null;
    }

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

module.exports = InputMessage;
