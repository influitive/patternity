'use strict';

var React = require('react');
var AlertMixin = require('./alert_mixin.js');

var ActionAlert = React.createClass({
  displayName: 'ActionAlert',

  mixins: [AlertMixin],
  getDefaultProps: function getDefaultProps() {
    return {
      type: "info",
      showIcon: false,
      showAlert: true,
      onClose: function onClose() {},
      hideIn: 0,
      action: {
        onClick: function onClick() {},
        title: ""
      }
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    showAlert: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    hideIn: React.PropTypes.number,
    action: React.PropTypes.object
  },
  componentWillMount: function componentWillMount() {
    delete AlertMixin._closeable;
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: "alert-msg " + this.props.type + " " + this._hasIconClass() + " " + this._showAlert(), ref: 'alert' },
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
      React.createElement(AlertAction, { onClick: this.props.action.onClick, title: this.props.action.title }),
      React.createElement(
        'div',
        { className: 'alert-body', ref: 'body' },
        this.props.children
      )
    );
  }
});

var AlertAction = React.createClass({
  displayName: 'Alert.Action',
  getDefaultProps: function getDefaultProps() {
    return {
      title: "",
      onClick: function onClick() {}
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'pt-alert-action' },
      React.createElement(
        'button',
        { className: 'secondary', onClick: this.props.onClick },
        this.props.title
      )
    );
  }
});

module.exports = ActionAlert;