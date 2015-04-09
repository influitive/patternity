var React   = require('react');
var classNames = require('classnames');

var Loading = React.createClass({
  getDefaultProps : function(){
    return {
      size : "medium",
      type: "dark",
      isModal : false,
      inline : true
    };
  },
  propTypes : {
    size : React.PropTypes.oneOf(["small", "medium", "large"]),
    type : React.PropTypes.oneOf(["dark", "light"]),
    isModal : React.PropTypes.bool,
    inline : React.PropTypes.bool
  },
  render: function () {
    return (
      <span className={"loading-spinner " + this.props.size + " " + this.props.type + " " + this._isModal() + " " + this._isInline()}></span>
    );
  },
  _isModal: function(){
    return this.props.isModal ? "is-modal" : "";
  },
  _isInline : function(){
    return this.props.inline ? "" : "is-block";
  }
});

module.exports = Loading;
