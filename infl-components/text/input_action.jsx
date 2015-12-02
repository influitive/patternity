var React = require('react');
var HelpTooltip = require('../help_tooltip.jsx');

var InputAction = React.createClass({
  getDefaultProps: function() {
    return {
      clearable: false,
      help:      null,
      onCleared: function() {},
      value:     ''
    };
  },

  propTypes: {
    clearable: React.PropTypes.bool,
    help:      React.PropTypes.any,
    onCleared: React.PropTypes.func,
    value:     React.PropTypes.string
  },

  render: function() {
    if (this.props.help !== null) {
      return <HelpTooltip>{this.props.help}</HelpTooltip>
    }
    else if (this.props.clearable && this.props.value.length > 0) {
      return <span className="clear-input ic ic-close" onClick={this.props.onCleared}></span>;
    }
    else {
      return null;
    }
  }
});

module.exports = InputAction;
