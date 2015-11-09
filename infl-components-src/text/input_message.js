const React = require('react');

const isArray = require('lodash/lang/isArray');

class InputMessage extends React.Component {
  static defaultProps = {
    message: null
  }

  static propTypes = {
    message: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
      React.PropTypes.array
    ])
  }

  render() {
    if (this.props.message === null) return null;

    return <div>{this._message()}</div>;
  }

  _message() {
    const messages = isArray(this.props.message) ? this.props.message : [this.props.message];

    return messages.map(function(message, i) {
      return <div key={i} className="input-message">{message}</div>;
    });
  }
}

module.exports = InputMessage;
