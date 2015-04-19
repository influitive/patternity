var React = require('react');

var AlertMixin = {
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
  },
  _hideInMilliseconds : function(){
    return this.props.hideIn * 1000;
  },
  _showAlert: function(){
    return this.state.showAlert ? "" : "hide";
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
  _closeable: function(){
    if(this.state.closeable) {
      return (<span className="close ic ic-times" onClick={this._close} ref="close"></span>);
    } else {
      return "";
    }
  }
};

module.exports = AlertMixin;
