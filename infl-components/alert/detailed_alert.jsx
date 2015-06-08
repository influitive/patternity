var React = require('react');
var AlertMixin = require('./alert_mixin.jsx');

var DetailedAlert = {};

var DetailedAlert = React.createClass({
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

DetailedAlert.Detail = React.createClass({
    getDefaultProps: function() {
    return {
      title: "",
      action: "",
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    action: React.PropTypes.node
  },
  render : function(){
    return (
      <div className="pt-alert-detailed">
        <h4>{this.props.title}</h4>
        <span className="pt-alert-detailed-action">{this.props.action}</span>
        <div className="pt-alert-detailed-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = DetailedAlert;
