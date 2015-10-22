'use strict';

var React = require('react');
var classNames = require('classnames');

var ButtonGroup = React.createClass({
  displayName: 'ButtonGroup',

  getDefaultProps: function getDefaultProps() {
    return {
      layout: 'inline',
      grouped: false
    };
  },

  propTypes: {
    layout: React.PropTypes.oneOf(['inline', 'stacked']),
    grouped: React.PropTypes.bool
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'button-group ' + this.props.layout + ' ' + this.isGrouped(), ref: 'buttonGroup' },
      this.props.children
    );
  },

  isGrouped: function isGrouped() {
    return this.props.grouped ? 'grouped' : '';
  }
});

module.exports = ButtonGroup;