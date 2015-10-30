var React = require('react');

var NativeSelect = React.createClass({
  displayName: 'NativeSelect',
  propTypes : {
    selectedOptions : React.PropTypes.array.isRequired,
    name : React.PropTypes.string.isRequired
  },

  render : function(){
    return (
      <select name={this.props.name} multiple="multiple" className="pt-multi-select-native default" value={this._buildSelectedValues()}>
        {this._buildOptions()}
      </select>
    );
  },

  _buildOptions : function(){
    return this.props.selectedOptions.map(function(option, index){
      return (
        <option key={index} value={option.value}>{option.name}</option>
      );
    });
  },

  _buildSelectedValues : function(){
    return this.props.selectedOptions.map(function(option, index){
      return option.value;
    });
  }
});

module.exports = NativeSelect;
