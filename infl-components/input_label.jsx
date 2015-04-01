var React = require('react');
var classNames = require('classnames');

var InputLabel = React.createClass({
  getDefaultProps: function() {
    return {
      layout: "inline",
      label : "",
    };
  },
  propTypes : {
    layout: React.PropTypes.oneOf(['stacked', 'inline']),
    label : React.PropTypes.string,
  },
  render : function(){
    return (
      <span className={"pt-label " + this.props.layout}>
        <label htmlFor={this.props.children.props.name}>
          <span>{this.props.label + ":"}</span>
        </label>
        {this.props.children}
      </span>
    );
  }
});

module.exports = InputLabel;
