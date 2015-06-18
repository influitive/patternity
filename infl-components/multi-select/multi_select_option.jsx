var React = require('react');

var MultiSelectOption = React.createClass({
  PropTypes : {
    name : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    optionIsSelected : React.PropTypes.bool.isRequired
  },

  getDefaultProps : function(){
    return {
      value : ""
    };
  },

  render : function(){
    return (
      <span className={"pt-multi-select-option " + this._isOptionSelected()} onClick={this._handleClick}>{this.props.name}</span>
    );
  },

  _isOptionSelected : function(){
    return this.props.optionIsSelected ? "hide" : "";
  },

  _handleClick : function(event){
    this.props.onClick({
      name : this.props.name,
      value :this.props.value
    });
  }
});

module.exports = MultiSelectOption;
