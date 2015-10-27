var React = require('react');

var MultiSelectOption = React.createClass({
  displayName: 'MultiSelectOption',
  propTypes : {
    name : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    optionIsSelected : React.PropTypes.bool.isRequired,
    filteredOption : React.PropTypes.bool.isRequired,
    onOptionHasFocus : React.PropTypes.func.isRequired,
    focusedOption : React.PropTypes.object.isRequired
  },

  getDefaultProps : function(){
    return {
      value : ""
    };
  },

  render : function(){
    return (
      <span
        className={"pt-multi-select-option " + this._isOptionSelected() + " " + this._doesOptionHaveFocus()}
        onClick={this._handleClick}
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handleMouseOut} >
          {this.props.name}
      </span>
    );
  },

  _isOptionSelected : function(){
    return this.props.optionIsSelected || this.props.filteredOption ? "hide" : "";
  },

  _doesOptionHaveFocus : function(){
    if(this.props.name === this.props.focusedOption.name && this.props.value === this.props.focusedOption.value){
      return "has-focus";
    } else {
      return "";
    }
  },

  _handleClick : function(event){
    event.stopPropagation();

    this.props.onClick({
      name : this.props.name,
      value :this.props.value
    });
  },

  _handleMouseOver : function(event){
    this.props.onOptionHasFocus({
      name : this.props.name,
      value :this.props.value
    });
  },

  _handleMouseOut : function(event){
    this.props.onOptionHasFocus({});
  }
});

module.exports = MultiSelectOption;
