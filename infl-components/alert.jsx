var React = require('react');
var AlertMixin = require('./alert/alert_mixin.jsx');

var DetailedAlert = {};

var Alert = React.createClass({
  mixins: [AlertMixin],
  getDefaultProps: function() {
    return {
      type: "",
      showIcon: false,
      closeable : false,
      showAlert : true,
      onClose : function(){},
      hideIn  : 0
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    closeable : React.PropTypes.bool,
    showAlert : React.PropTypes.bool,
    onClose: React.PropTypes.func,
    hideIn: React.PropTypes.number
  },
  render : function(){
    return (
      <div className={"alert-msg " + this.props.type + " " + this._hasIconClass() + " " + this._showAlert()} ref="alert">
        {this._closeable()}
        <h4 className="alert-title" ref="title">
          {this._icon()}
          <span>{this.props.title}</span>
        </h4>
        <div className="alert-body" ref="body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Alert;
