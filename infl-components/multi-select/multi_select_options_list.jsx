var React = require('react');

var SimplePopover = require('./simple_popover.jsx');
var MultiSelectOption = require('./multi_select_option.jsx');

var MultiSelectOptionsList = React.createClass({
  PropTypes : {
    options : React.PropTypes.array.isRequired,
    handleOptionSelect : React.PropTypes.func.isRequired,
    showOptions : React.PropTypes.bool.isRequired,
    onOptionHasFocus : React.PropTypes.func.isRequired,
    focusedOption : React.PropTypes.object.isRequired
  },

  render : function(){
    return (
      <SimplePopover isOpen={this.props.showOptions}>
        {this._buildMultiSelectOptions()}
      </SimplePopover>
    );
  },

  _buildMultiSelectOptions : function(){
    if(!this._anyOptionsToShow()){
      return (
        <span className="pt-multi-select-option">No Results Found</span>
      );
    }

    var that = this;
    return this.props.options.map(function(option, index){
      return (
        <MultiSelectOption
          key={index}
          name={option.name}
          value={option.value}
          optionIsSelected={option.optionIsSelected}
          filteredOption={option.filteredOption}
          onClick={that.props.handleOptionSelect}
          onOptionHasFocus={that.props.onOptionHasFocus}
          focusedOption={that.props.focusedOption} />
      );
    });
  },

  _anyOptionsToShow : function(){
    var optionsToShow = false;

    for(var i = 0; i < this.props.options.length; i++){
      if(this.props.options[i].optionIsSelected === false && this.props.options[i].filteredOption === false){
        optionsToShow = true;
        break;
      }
    }

    return optionsToShow;
  },
});

module.exports = MultiSelectOptionsList;
