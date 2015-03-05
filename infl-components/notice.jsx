var React = require('react');

var Notice = React.createClass({
  getDefaultProps: function() {
    return {
      type: "",
      showIcon: false,
      closeable : false
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'error', '']),
    body: React.PropTypes.node
  },
  getInitialState: function() {
    return {showNotice: true};
  },
  render : function(){
    return <div>{this._renderNotice()}</div>;
  },
  _renderNotice: function(){
    if(this.state.showNotice) {
      return this._noticeTemplate();
    } else {
      return "";
    }
  },
  _noticeTemplate: function(){
    return (
        <div className={"notice " + this.props.type} ref="notice">
          {this._closeable()}
          <h4 className="notice-title" ref="title">
            {this._icon()}
            <span>{this.props.title}</span>
          </h4>
          <div className="notice-body" ref="body">
            {this.props.body}
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
    this.setState({showNotice: false});
  },
  _icon: function(){
    if(this.props.showIcon) {
      return (<span className={"notice-icon fa " + this._determineIconType()}></span>);
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

module.exports = Notice;
window.Notice = Notice;
