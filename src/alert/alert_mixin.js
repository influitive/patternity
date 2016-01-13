// TODO: Stop using mixins, convert to es6
var React = require('react');

var hideInTimeout;

var AlertMixin = {
  getInitialState: function() {
    return {
      showAlert: this.props.showAlert,
      closeable: this.props.closeable
    };
  },

  componentWillReceiveProps: function(newProps) {
    this._clearHideInTimeout();
    this.setState({
      showAlert: newProps.showAlert,
      closeable: newProps.closeable
    });
  },

  componentDidMount: function() {
    this._hideAlert(this.props.hideIn);
  },

  componentWillUpdate: function(nextProps) {
    this._clearHideInTimeout();
    this._hideAlert(nextProps.hideIn);
  },

  _clearHideInTimeout: function() {
    window.clearTimeout(hideInTimeout);
  },

  _hideAlert: function(hideIn) {
    if (hideIn > 0) {
      hideInTimeout = setTimeout(this._close, this._hideInMilliseconds(hideIn));
    }
  },

  _hideInMilliseconds: function(hideIn) {
    return hideIn * 1000;
  },

  _showAlert: function() {
    return this.state.showAlert ? '' : 'hide';
  },

  _close: function() {
    this.setState({showAlert: false});
    this.props.onClose();
  },

  _icon: function() {
    return this.props.showIcon
      ? <span className={'alert-icon ic ' + this._determineIconType()}></span>
      : '';
  },

  _hasIconClass: function() {
    return this.props.showIcon ? 'hasIcon' : '';
  },

  _determineIconType: function() {
    return {
      success: 'ic-check-circle-o',
      error:   'ic-exclamation-circle-o',
      warning: 'ic-info-circle-o'
    }[this.props.type] || 'ic-alert-caution';
  },

  _closeable: function() {
    return this.state.closeable
      ? <span className='close ic ic-times' onClick={this._close} ref='close'></span>
      : '';
  }
};

module.exports = AlertMixin;
