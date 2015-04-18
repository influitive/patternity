var React = require('react');

var Alert = React.createClass({
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
  getInitialState: function() {
    return {
      showAlert: this.props.showAlert,
      closeable: this.props.closeable
    };
  },
  componentWillReceiveProps : function(newProps){
    this.setState({
      showAlert: newProps.showAlert
    });
  },
  componentDidMount : function(){
    if(this.props.hideIn > 0) {
      setTimeout(this._close, this._hideInMilliseconds());
    }

    this._alertAction();
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
  },
  _hideInMilliseconds : function(){
    return this.props.hideIn * 1000;
  },
  _showAlert: function(){
    return this.state.showAlert ? "" : "hide";
  },
  _closeable: function(){
    if(this.state.closeable) {
      return (<span className="close ic ic-times" onClick={this._close} ref="close"></span>);
    } else {
      return "";
    }
  },
  _close: function(){
    this.setState({showAlert: false});
    this.props.onClose();
  },
  _icon: function(){
    if(this.props.showIcon) {
      return (<span className={"alert-icon ic " + this._determineIconType()}></span>);
    } else {
      return "";
    }
  },
  _hasIconClass: function(){
    return this.props.showIcon ? "hasIcon" : "";
  },
  _determineIconType: function(){
    if(this.props.type === "success") {
      return "ic-check-circle-o";
    } else if(this.props.type === "error") {
      return "ic-exclamation-circle-o";
    } else if(this.props.type === "warning") {
      return "ic-info-circle-o"
    } else {
      return "ic-question-circle-o";
    }
  },
  _alertAction : function() {
    var hasDetailed = false,
        actionElement = null;

    for(var i = 0; i < this.refs.body.getDOMNode().children.length; i++) {
      var child = this.refs.body.getDOMNode().children[i];
      if(this._isAlertAction(child)) {
        actionElement = child;
      } else if(this._isAlertDetailed(child)){
        hasDetailed = true;
      }
    }

    this._updateAlertWithAction(hasDetailed, actionElement);
  },
  _isAlertAction : function(child) {
   return child.className.indexOf('pt-alert-action') > -1;
  },
  _isAlertDetailed : function(child) {
    return child.className.indexOf('pt-alert-detailed') > -1;
  },
  _updateAlertWithAction : function(hasDetailed, actionElement){
    if(actionElement){
      this._removeActionFormBody(actionElement);
      this._determineIfAlertActionShouldExist(hasDetailed, actionElement);
    }
  },
  _removeActionFormBody : function(actionElement){
    this.refs.body.getDOMNode().removeChild(actionElement);
  },
  _determineIfAlertActionShouldExist : function(hasDetailed, actionElement) {
    if(!hasDetailed){
      this._addActionToAlert(actionElement);
      this.setState({closeable : false});
    }
  },
  _addActionToAlert : function(actionElement) {
    this.refs.alert.getDOMNode().insertBefore(actionElement, this.refs.body.getDOMNode());
  }
});

Alert.Detailed = React.createClass({
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

Alert.Action = React.createClass({
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

module.exports = Alert;
