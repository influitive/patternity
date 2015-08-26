var React = require('react');
var Icon = require('../../icon.jsx');

var ChallengeLabel = React.createClass({
  getDefaultProps : function(){
    return {
      label : "",
      onClick : function(){}
    };
  },
  PropTypes : {
    label : React.PropTypes.string,
    onClick : React.PropTypes.func
  },
  render : function(){
    return (
      <span className={"pt-challenge-label " + this._formatChallengeTypeClassName()} onClick={this.props.onClick}>
        {this.props.label.toLowerCase()}
      </span>
    );
  },

  _formatChallengeTypeClassName : function(){
    var labelArray = this.props.label.split(' ');
    var labelClassName = "";
    for( var i = 0; i < labelArray.length; i++){
      labelClassName += labelArray[i].toLowerCase() + "-";
    }
    return labelClassName.substring(0, labelClassName.length - 1);
  }
});

module.exports = ChallengeLabel;
