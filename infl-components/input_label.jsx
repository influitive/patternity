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
      <span className={"pt-label " + this.props.layout}>
        <label htmlFor={this._determineFor()}>
          <span>{this.props.label + ":"}</span>
        </label>
        {this.props.children}
      </span>
    );
  },
  _determineFor : function(){
    if(this.props.children.length > 0){
      return this.props.children[0].props.name;
    } else {
      return this.props.children.props.name ? this.props.children.props.name : "";
    }
  }
});

module.exports = InputLabel;
