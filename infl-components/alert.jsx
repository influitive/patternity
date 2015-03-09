var React = require('react');

var Alert = React.createClass({
  getDefaultProps: function() {
    return {
      type: "",
      showIcon: false,
      closeable : false
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', 'info', '']),
    body: React.PropTypes.node
  },
  getInitialState: function() {
    return {showAlert: true};
  },
  render : function(){
    return <div>{this._renderAlert()}</div>;
  },
  _renderAlert: function(){
    if(this.state.showAlert) {
      return this._alertTemplate();
    } else {
      return "";
    }
  },
  _alertTemplate: function(){
    return (
        <div className={"alert " + this.props.type} ref="alert">
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
  _closeable: function(){
    if(this.props.closeable) {
      return (<span className="close fa fa-times" onClick={this._close} ref="close"></span>);
    } else {
      return "";
    }
  },
  _close: function(){
    this.setState({showAlert: false});
  },
  _icon: function(){
    if(this.props.showIcon) {
      return (<span className={"alert-icon fa " + this._determineIconType()}></span>);
    } else {
      return "";
    }
  },
  _determineIconType: function(){
    if(this.props.type === "success") {
      return "fa-check-circle";
    } else if(this.props.type === "error") {
      return "fa-exclamation-circle";
    } else {
      return "fa-exclamation-triangle";
    }
  }
});

module.exports = Alert;
