var React = require('react');
var Icon = require('../icon.jsx')

var InputIcon = React.createClass({
  getDefaultProps: function() {
    return {
      type:        'text',
      required:     false
    }
  },

  propTypes: {
    type:        React.PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
    required:    React.PropTypes.bool
  },

  render: function () {
    if (this.props.type === 'search') {
      return (
        <span className="search-input">
          <Icon icon='search' />
        </span>
      );
    } else if(this.props.required) {
      return (
        <span className="required-input">
          <Icon icon='asterisk' />
        </span>
      );
    } else {
      return null;
    }
  }
});

module.exports = InputIcon;
