'use strict';

var React = require('react');

var hideInTimeout;

var AlertMixin = {
  getInitialState: function getInitialState() {
    return {
      showAlert: this.props.showAlert,
      closeable: this.props.closeable
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this._clearHideInTimeout();
    this.setState({
      showAlert: newProps.showAlert,
      closeable: newProps.closeable
    });
  },

  componentDidMount: function componentDidMount() {
    this._hideAlert(this.props.hideIn);
  },

  componentWillUpdate: function componentWillUpdate(nextProps) {
    this._clearHideInTimeout();
    this._hideAlert(nextProps.hideIn);
  },

  _clearHideInTimeout: function _clearHideInTimeout() {
    window.clearTimeout(hideInTimeout);
  },

  _hideAlert: function _hideAlert(hideIn) {
    if (hideIn > 0) {
      hideInTimeout = setTimeout(this._close, this._hideInMilliseconds(hideIn));
    }
  },

  _hideInMilliseconds: function _hideInMilliseconds(hideIn) {
    return hideIn * 1000;
  },

  _showAlert: function _showAlert() {
    return this.state.showAlert ? '' : 'hide';
  },

  _close: function _close() {
    this.setState({ showAlert: false });
    this.props.onClose();
  },

  _icon: function _icon() {
    return this.props.showIcon ? React.createElement('span', { className: 'alert-icon ic ' + this._determineIconType() }) : '';
  },

  _hasIconClass: function _hasIconClass() {
    return this.props.showIcon ? 'hasIcon' : '';
  },

  _determineIconType: function _determineIconType() {
    return ({
      success: 'ic-check-circle-o',
      error: 'ic-exclamation-circle-o',
      warning: 'ic-info-circle-o'
    })[this.props.type] || 'ic-alert-caution';
  },

  _closeable: function _closeable() {
    return this.state.closeable ? React.createElement('span', { className: 'close ic ic-times', onClick: this._close, ref: 'close' }) : '';
  }
};

module.exports = AlertMixin;