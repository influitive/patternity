var React = require('react');

var Alert = React.createClass({
  getDefaultProps: function() {
    return {
      type: "",
      showIcon: false,
      closeable : false,
      showAlert : true,
      onClose : function(){}
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', 'warning', '']),
    closeable : React.PropTypes.bool,
    showAlert : React.PropTypes.bool,
    onClose: React.PropTypes.func
  },
  getInitialState: function() {
    return {showAlert: this.props.showAlert};
  },
  componentWillReceiveProps : function(newProps){
    this.setState({showAlert: newProps.showAlert});
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
  _showAlert: function(){
    return this.state.showAlert ? "" : "hide";
  },
  _closeable: function(){
    if(this.props.closeable) {
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
      <div className="detailed">
        <h4>{this.props.title}</h4>
        <span className="detailed-action">{this.props.action}</span>
        <div className="detailed-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Alert;
