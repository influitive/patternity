var React   = require('react');
var classNames = require('classnames');

var Loading = React.createClass({
  displayName: 'Loading',
  getDefaultProps : function(){
    return {
      size : "medium",
      type: "dark",
      isModal : false,
      isBlock : false
    };
  },
  propTypes : {
    size : React.PropTypes.oneOf(["small", "medium", "large"]),
    type : React.PropTypes.oneOf(["dark", "light"]),
    isModal : React.PropTypes.bool,
    isBlock : React.PropTypes.bool
  },
  render: function () {
    return (
      <span className={"loading-spinner " + this.props.size + " " + this.props.type + " " + this._isModal() + " " + this._isInline()} ref="loading"></span>
    );
  },
  _isModal: function(){
    return this.props.isModal ? "is-modal" : "";
  },
  _isInline : function(){
    return this.props.isBlock ? "is-block" : "";
  }
});

module.exports = Loading;
