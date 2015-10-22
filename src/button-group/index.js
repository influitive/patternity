var React = require('react');
var classNames = require('classnames');

var ButtonGroup = React.createClass({
  getDefaultProps: function() {
    return {
      layout:  'inline',
      grouped: false
    };
  },

  propTypes: {
    layout:  React.PropTypes.oneOf(['inline', 'stacked']),
    grouped: React.PropTypes.bool
  },

  render: function() {
    return <div className={'button-group ' + this.props.layout + ' ' + this.isGrouped()} ref='buttonGroup'>
      {this.props.children}
    </div>;
  },

  isGrouped: function() {
    return this.props.grouped ? 'grouped' : '';
  }
});

module.exports = ButtonGroup;
