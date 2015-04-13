var React = require('react');

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
      <span className={"pt-label " + this.props.layout + " " + this._multiInput()}>
        <label htmlFor={this._determineLabelFor()} ref="label">
          <span>{this.props.label + ":"}</span>
        </label>
        {this.props.children}
      </span>
    );
  },
  _multiInput : function(){
    return this.props.children.length > 0 ? "multi-input" : "";
  },
  _determineLabelFor : function(){
    if(this.props.children.length > 0){
      return this.props.children[0].props.name;
    } else {
      return this.props.children.props.name ? this.props.children.props.name : "";
    }
  }
});

module.exports = InputLabel;
