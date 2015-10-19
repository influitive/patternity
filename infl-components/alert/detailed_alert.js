'use strict';

var React = require('react');
var AlertMixin = require('./alert_mixin.js');

var DetailedAlert = {};

var DetailedAlert = React.createClass({
  displayName: 'DetailedAlert',

  mixins: [AlertMixin],
  getDefaultProps: function getDefaultProps() {
    return {
      type: "",
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
  render: function render() {
    return React.createElement(
      'div',
      { className: "alert-msg " + this.props.type + " " + this._hasIconClass() + " " + this._showAlert(), ref: 'alert' },
      this._closeable(),
      React.createElement(
        'h4',
        { className: 'alert-title', ref: 'title' },
        this._icon(),
        React.createElement(
          'span',
          null,
          this.props.title
        )
      ),
      React.createElement(
        'div',
        { className: 'alert-body', ref: 'body' },
        this.props.children
      )
    );
  }
});

DetailedAlert.Detail = React.createClass({
  displayName: 'Detail',

  getDefaultProps: function getDefaultProps() {
    return {
      title: "",
      action: ""
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    action: React.PropTypes.node
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'pt-alert-detailed' },
      React.createElement(
        'h4',
        null,
        this.props.title
      ),
      React.createElement(
        'span',
        { className: 'pt-alert-detailed-action' },
        this.props.action
      ),
      React.createElement(
        'div',
        { className: 'pt-alert-detailed-body' },
        this.props.children
      )
    );
  }
});

module.exports = DetailedAlert;