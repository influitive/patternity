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
    type: React.PropTypes.string
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
        <div className={"notice " + this.props.type}>
          {this._closeable()}
          <h4>
            {this._icon()}
            <span>{this.props.title}</span>
          </h4>
          {this.props.body}
        </div>
      );
  },
  _closeable: function(){
    if(this.props.closeable) {
      return (<span className="close fa fa-times" onClick={this._close}></span>);
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
