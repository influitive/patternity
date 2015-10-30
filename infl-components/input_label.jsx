var React = require('react');

var InputLabel = React.createClass({
  displayName: 'InputLabel',
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
      <span className={"pt-label " + this.props.layout + " " + this._multiInput()} ref="inputLabel">
        <label htmlFor={this._determineLabelFor()} ref="label">
          <span>{this.props.label + ":"}</span>
          {this._requiredInput()}
        </label>
        {this.props.children}
      </span>
    );
  },
  _multiInput : function(){
    return this.props.children.length > 0 ? "multi-input" : "";
  },
  _determineLabelFor : function(){
    return this.props.children.length > 0 ? this._getNameForMultipleInputs() : this._getNameForSingleInput();
  },
  _getNameForSingleInput : function(){
    return this.props.children.props.name ? this.props.children.props.name : "";
  },
  _getNameForMultipleInputs : function(){
    return this.props.children[0].props.name ? this.props.children[0].props.name : "";
  },
  _requiredInput : function(){
    if(this._isRequiredInput()) {
      return (<span className="ic ic-asterisk required-icon"></span>);
    }
  },
  _isRequiredInput : function(){
    var foundRequired = false;
    React.Children.map(this.props.children, function(child){
      if(child.props.required && !foundRequired) {
        foundRequired = true;
      }
    });
    return foundRequired;
  }
});

module.exports = InputLabel;
