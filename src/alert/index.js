// TODO: Stop using mixins, convert to es6
var React = require('react');
var AlertMixin = require('./alert_mixin.js');

require('./alert.scss');

var Alert = React.createClass({
  mixins:          [AlertMixin],
  displayName:     'Alert',
  getDefaultProps: function() {
    return {
      title:     '',
      type:      '',
      showIcon:  false,
      closeable: false,
      showAlert: true,
      onClose:   function() {},
      hideIn:    0
    };
  },

  propTypes: {
    title:     React.PropTypes.string,
    type:      React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    showIcon:  React.PropTypes.bool,
    closeable: React.PropTypes.bool,
    showAlert: React.PropTypes.bool,
    onClose:   React.PropTypes.func,
    hideIn:    React.PropTypes.number
  },

  _getTitleRender: function() {
    if (this.props.title) {
      return (
        <h4 className='alert-title' ref='title'>
          {this._icon()}
          <span>{this.props.title}</span>
        </h4>
      );
    }
    else {
      return null;
    }
  },

  render: function() {
    return <div className={`alert-msg ${this.props.type} ${this._hasIconClass()} ${this._showAlert()}`}
      ref="alert">
      {this._closeable()}
      {this._getTitleRender()}
      <div className='alert-body' ref='body'>
        {this.props.children}
      </div>
    </div>;
  }
});

module.exports = Alert;
