'use strict';

var React = require('react');
var AlertMixin = require('./alert_mixin.js');

var DetailedAlert = {};

var Alert = React.createClass({
  displayName: 'Alert',

  mixins: [AlertMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      type: '',
      showIcon: false,
      closeable: false,
      showAlert: true,
      onClose: function onClose() {},
      hideIn: 0
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    closeable: React.PropTypes.bool,
    showAlert: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    hideIn: React.PropTypes.number
  },

  _getTitleRender: function _getTitleRender() {
    if (this.props.title) {
      return React.createElement(
        'h4',
        { className: 'alert-title', ref: 'title' },
        this._icon(),
        React.createElement(
          'span',
          null,
          this.props.title
        )
      );
    } else {
      return null;
    }
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'alert-msg ' + this.props.type + ' ' + this._hasIconClass() + ' ' + this._showAlert(), ref: 'alert' },
      this._closeable(),
      this._getTitleRender(),
      React.createElement(
        'div',
        { className: 'alert-body', ref: 'body' },
        this.props.children
      )
    );
  }
});

module.exports = Alert;