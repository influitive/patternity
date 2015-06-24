var React = require('react');
var $ = require('jquery');

var ClearAll = require('./clear_all.jsx');
var NativeSelect = require('./native_select.jsx');
var SelectedOptions = require('./selected_options.jsx');
var MultiSelectOptionsList = require('./multi_select_options_list.jsx');

var MultiSelectKeyCodeMixin = require('./multi_select_key_code_mixin.jsx');
var MultiSelectArrow = require('./multi_select_arrow.jsx');

var MultiSelect = React.createClass({
  mixins: [
    MultiSelectKeyCodeMixin,
  ],

  propTypes: {
    options: React.PropTypes.array,
    name : React.PropTypes.string,
    onOptionChange : React.PropTypes.func,
    onTypeAheadChange : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      options : [],
      name : "multiSelect",
      onOptionChange : function(){},
      onTypeAheadChange : function(){}
    };
  },

  getInitialState : function(){
    return {
      typeAhead : "",
      options : [],
      selectedOptions : [],
      showOptions : false,
      placeholder : true,
      focusedOption : {}
    };
  },

  componentWillReceiveProps : function(nextProps){
    this._preProcessOptions(nextProps.options);
  },

  componentWillMount : function(){
    this._preProcessOptions(this.props.options);
    this._addHideEvent();
  },

  componentWillUnmount : function(){
    this._removeHideEvent();
  },

  componentDidMount : function(){
    this._adjustPopoverSize();
    this._adjustPopoverPosition();
  },

  componentDidUpdate : function(){
    this._adjustPopoverSize();
    this._adjustPopoverPosition();
    this._handleOptionChange();
  },

  render: function() {
    return (
      <span ref="multiSelectContainer" className="pt-multi-select" onKeyDown={this._handleKeyDown}>
        <span className="multi-select" onClick={this._showOptions}>
          <SelectedOptions
            options={this.state.selectedOptions}
            removeSelectedOption={this._handleSelectedOptionRemoved}
            showPlaceholder={this.state.placeholder}
            typeAhead={this.state.typeAhead}
            handleTypeAheadChange={this._handleTypeAheadChange} />
        </span>

        <NativeSelect
          selectedOptions={this.state.selectedOptions}
          name={this.props.name} />

        <MultiSelectOptionsList
          ref="popover"
          handleOptionSelect={this._handleOptionSelect}
          options={this.state.options}
          showOptions={this.state.showOptions}
          onOptionHasFocus={this._handleOptionHasFocus}
          focusedOption={this.state.focusedOption}
          anyOptionsToShow={this._anyOptionsToShow} />

          <ClearAll hasSelectedOptions={this._hasSelectedOptions()} onClearAll={this._handleClearAll}/>
          <MultiSelectArrow
            hideOptions={this._hideOptions}
            showOptions={this._showOptions}
            areOptionsOpen={this.state.showOptions} />
      </span>
    );
  },

  _handleOptionHasFocus : function(option){
    this.setState({
      focusedOption : option
    });
  },

  _anyOptionsToShow : function(){
    var optionsToShow = false;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].optionIsSelected === false && this.state.options[i].filteredOption === false){
        optionsToShow = true;
        break;
      }
    }

    return optionsToShow;
  },

  _addHideEvent : function(){
    var that = this;
    $(window).click(function(){
      that._hideOptions();
    });
  },

  _hideOptions : function(){
    this.setState({
      showOptions : false,
      typeAhead : ""
    });

    this._resetInputWidth();
  },

  _removeHideEvent : function(){
    $(window).unbind("click");
  },

  _preProcessOptions : function(options){
    var modifiedOptions = options;

    for(var i = 0; i < modifiedOptions.length; i++){
      modifiedOptions[i].optionIsSelected = false;
      modifiedOptions[i].filteredOption = false;
    }

    var that = this;
    this.setState({
      options : modifiedOptions,
      focusedOption : modifiedOptions[0]
    });
  },

  _adjustPopoverSize : function(){
    var popover = React.findDOMNode(this.refs.popover);
    var multiSelectContainer = React.findDOMNode(this.refs.multiSelectContainer);
    popover.style.width = multiSelectContainer.offsetWidth + "px";
  },

  _adjustPopoverPosition : function(){
    var popover = React.findDOMNode(this.refs.popover);
    var multiSelectContainer = React.findDOMNode(this.refs.multiSelectContainer);
    popover.style.top = (multiSelectContainer.clientHeight - 1) + "px";
  },

  _handleOptionChange : function(){
    var newlyAddedOption = this.state.selectedOptions[this.state.selectedOptions.length - 1];
    this.props.onOptionChange(newlyAddedOption, this.state.selectedOptions);
  },

  _hasSelectedOptions : function(){
    return this.state.selectedOptions.length > 0;
  },

  _handleClearAll : function(event){
    event.stopPropagation();

    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i ++){
      currentOptions[i].optionIsSelected =  false;
      currentOptions[i].filteredOption =  false;
    }

    this.setState({
      options : currentOptions,
      selectedOptions : [],
      placeholder : true,
      typeAhead : "",
      focusedOption : this._findOptionToGiveFocusToNext(currentOptions)
    }, function(){
      document.getElementById("type-ahead").focus();
    });
  },

  _showOptions : function(event){
    event.stopPropagation();

    document.getElementById("type-ahead").focus();

    this.setState({
      showOptions : true
    });
  },

  _handleTypeAheadChange : function(event){
    event.stopPropagation();

    this.props.onTypeAheadChange(event.target.value);
    this._adjustInputWidth(event.target);

    if(event.target.value.length === 0){
      this._resetInputWidth();
    }

    this.setState({
      typeAhead : event.target.value,
      options : this._filterOptions(event.target.value.toLowerCase()),
      placeholder : this._showPlaceholder(event.target.value),
      focusedOption : this._findOptionToGiveFocusToNext(this.state.options)
    });
  },

  _showPlaceholder : function(filterText){
    if(filterText.length === 0 && this.state.selectedOptions.length === 0){
      return true;
    }
    return false;
  },

  _adjustInputWidth : function(input){
    input.style.width = (input.value.length + 1) * 8 + "px";
  },

  _resetInputWidth : function(){
    document.getElementById("type-ahead").style.width = "";
  },

  _filterOptions : function(filterText){
    if(filterText.length === 0){
      return this._resetFilteredOptions(this.state.options);
    }

    return this._filterOptionsBasedOnText(filterText);
  },

  _resetFilteredOptions : function(options){
    for(var i = 0; i < this.state.options.length; i++){
      options[i].filteredOption = false;
    }
    return options;
  },

  _filterOptionsBasedOnText : function(filterText){
    var filteredOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].name.toLowerCase().indexOf(filterText) > -1){
        filteredOptions[i].filteredOption = false;
      } else {
        filteredOptions[i].filteredOption = true;
      }
    }

    return filteredOptions;
  },

  _handleOptionSelect : function(option){
    var currentSelectedOptions = this.state.selectedOptions;
    currentSelectedOptions.push(option);

    this._resetInputWidth();

    var that = this;
    this.setState({
      selectedOptions : currentSelectedOptions,
      typeAhead : "",
      placeholder : false,
      options : this._resetFilteredOptions(this.state.options)
    }, function(){
      document.getElementById("type-ahead").focus();
      that._hideSelectedOptionFromOptions(option);
    });
  },

  _hideSelectedOptionFromOptions : function(option){
    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].name === option.name && this.state.options[i].value === option.value){
        currentOptions[i].optionIsSelected = true;
        break;
      }
    }

    this.setState({
      options : currentOptions,
      focusedOption : this._findOptionToGiveFocusToNext(currentOptions)
    });
  },

  _handleSelectedOptionRemoved : function(option){
    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].name === option.name && this.state.options[i].value === option.value){
        currentOptions[i].optionIsSelected = false;
        break;
      }
    }

    this.setState({
      options : this._resetFilteredOptions(currentOptions),
      typeAhead : "",
      focusedOption : this._findOptionToGiveFocusToNext(currentOptions)
    });

    this._removeOptionFromSelectedOptions(option);
  },

  _findOptionToGiveFocusToNext : function(options){
    var focusedOption = {};

    for(var i = 0; i < options.length; i++){
      if(this._optionCanHaveFocus(options[i])) {
        focusedOption = options[i];
        break;
      }
    }

    return focusedOption;
  },

  _optionCanHaveFocus : function(option){
    return option.optionIsSelected === false && option.filteredOption === false
  },

  _removeOptionFromSelectedOptions : function(option){
    var currentSelectedOptions = this.state.selectedOptions;

    for(var i = 0; i < currentSelectedOptions.length; i++){
      if(currentSelectedOptions[i].name === option.name && currentSelectedOptions[i].value === option.value){
        currentSelectedOptions.splice(i, 1);
        break;
      }
    }

    this.setState({
      selectedOptions : currentSelectedOptions,
      placeholder : this._showPlaceholder("")
    }, function(){
      document.getElementById("type-ahead").focus();
    });
  }
});

module.exports = MultiSelect;
