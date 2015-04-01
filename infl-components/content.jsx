var React = require('react');

var Content = React.createClass({
  getDefaultProps : function(){
    return {
      hasInnerPanel : true,
      hasBackgroundColour : true
    };
  },
  propTypes : {
    hasInnerPanel: React.PropTypes.bool,
    hasBackgroundColour: React.PropTypes.bool
  },
  render: function () {
    return (
      <div className={"panel-content " + this._doesContentHaveBackgroundColour()}>
        {this._contentHasInnerPanel()}
      </div>
    );
  },
  _doesContentHaveBackgroundColour : function(){
    return this.props.hasBackgroundColour ? "" : "no-colour";
  },
  _contentHasInnerPanel : function(){
    if(this.props.hasInnerPanel){
      return (
        <div className="panel-content-inner">
          {this.props.children}
        </div>
      );
    } else {
      return (this.props.children);
    }
  }
});

module.exports = Content;
