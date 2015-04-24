var React = require('react');
var AlertMixin = require('./alert_mixin');

var ActionAlert = React.createClass({
  mixins: [AlertMixin],
  getDefaultProps: function() {
    return {
      type: "info",
      showIcon: false,
      showAlert : true,
      onClose : function(){},
      hideIn  : 0,
      action : {
        onClick : function(){},
        title : ""
      }
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    showAlert : React.PropTypes.bool,
    onClose: React.PropTypes.func,
    hideIn: React.PropTypes.number,
    action: React.PropTypes.object
  },
  componentWillMount : function(){
    delete AlertMixin._closeable;
  },
  render : function(){
    return (
      <div className={"alert-msg " + this.props.type + " " + this._hasIconClass() + " " + this._showAlert()} ref="alert">
        <h4 className="alert-title" ref="title">
          {this._icon()}
          <span>{this.props.title}</span>
        </h4>
        <AlertAction onClick={this.props.action.onClick} title={this.props.action.title} />
        <div className="alert-body" ref="body">
          {this.props.children}
        </div>
      </div>
    );
  },
});

var AlertAction = React.createClass({
  displayName : 'Alert.Action',
  getDefaultProps: function() {
    return {
      title: "",
      onClick : function(){}
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    onClick : React.PropTypes.func
  },
  render : function(){
    return (
      <div className="pt-alert-action">
        <button className="secondary" onClick={this.props.onClick}>
          {this.props.title}
        </button>
      </div>
    );
  }
});

module.exports = ActionAlert;
