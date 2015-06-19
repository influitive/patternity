var React = require('react');

var SimplePopover = require('./simple_popover.jsx');
var ClearAll = require('./clear_all.jsx');
var NativeSelect = require('./native_select.jsx');
var SelectedOptions = require('./selected_options.jsx');
var MultiSelectOption = require('./multi_select_option.jsx');

var MultiSelect = React.createClass({
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
      placeholder : true
    };
  },

  componentWillMount : function(){
    this._preProcessOptions();
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
      <span ref="multiSelectContainer" className={"pt-multi-select " + this._areOptionsVisible()}>
        <ClearAll hasSelectedOptions={this._hasSelectedOptions()} onClearAll={this._handleClearAll}/>

        <span className="multi-select" onClick={this._showOptions}>
          <SelectedOptions
            options={this.state.selectedOptions}
            removeSelectedOption={this._handleSelectedOptionRemoved}
            showPlaceholder={this.state.placeholder} />
          <input type="text" ref="typeAhead" className="type-ahead" name="typeAhead" value={this.state.typeAhead} onChange={this._handleTypeAheadChange} />
        </span>

        <NativeSelect selectedOptions={this.state.selectedOptions} name={this.props.name} />

        <SimplePopover ref="popover" isOpen={this.state.showOptions}>
          {this._buildMultiSelectOptions()}
        </SimplePopover>
      </span>
    );
  },

  _preProcessOptions : function(){
    var modifiedOptions = this.props.options;

    for(var i = 0; i < modifiedOptions.length; i++){
      modifiedOptions[i].optionIsSelected = false;
      modifiedOptions[i].filteredOption = false;
    }

    this.setState({
      options : modifiedOptions
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

  _handleClearAll : function(){
    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i ++){
      currentOptions[i].optionIsSelected =  false;
      currentOptions[i].filteredOption =  false;
    }

    this.setState({
      options : currentOptions,
      selectedOptions : [],
      placeholder : true,
      typeAhead : ""
    });
  },

  _areOptionsVisible : function(){
    return this.state.showOptions ? "open" : "";
  },

  _showOptions : function(event){
    event.stopPropagation();

    React.findDOMNode(this.refs.typeAhead).focus();

    this.setState({
      showOptions : true
    });
  },

  _handleTypeAheadChange : function(event){
    this.props.onTypeAheadChange(event.target.value);
    this._adjustInputWidth(event.target);

    var filteredOptions = this._filterOptions(event.target.value.toLowerCase());

    var showPlaceholder = false;
    if(event.target.value.length === 0){
      showPlaceholder = true;
    }

    this.setState({
      typeAhead : event.target.value,
      options : filteredOptions,
      placeholder : showPlaceholder
    });
  },

  _adjustInputWidth : function(input){
    input.style.width = (input.value.length + 1) * 8 + "px";
  },

  _resetInputWidth : function(){
    React.findDOMNode(this.refs.typeAhead).width = "5px";
  },

  _filterOptions : function(filterText){
    var filteredOptions = this.state.options;

    if(filterText.length === 0){
      for(var i = 0; i < this.state.options.length; i++){
        filteredOptions[i].filteredOption = false;
      }
      return filteredOptions;
    }

    var filteredOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].name.toLowerCase().indexOf(filterText) === 0){
        filteredOptions[i].filteredOption = false;
      } else {
        filteredOptions[i].filteredOption = true;
      }
    }

    return filteredOptions;
  },

  _buildMultiSelectOptions : function(){
    if(!this._anyOptionsToShow()){
      return (
        <span className="pt-multi-select-option no-hover">No Results Found</span>
      );
    }

    var that = this;
    return this.state.options.map(function(option, index){
      return (
        <MultiSelectOption
          key={index}
          name={option.name}
          value={option.value}
          optionIsSelected={option.optionIsSelected}
          filteredOption={option.filteredOption}
          onClick={that._handleOptionSelect}/>
      );
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

  _handleOptionSelect : function(option){
    var currentSelectedOptions = this.state.selectedOptions;
    currentSelectedOptions.push(option);

    this.setState({
      selectedOptions : currentSelectedOptions,
      typeAhead : "",
      placeholder : false
    }, function(){
      React.findDOMNode(this.refs.typeAhead).focus();
      this._resetInputWidth();
    });

    this._hideSelectedOptionFromOptions(option);
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
      options : currentOptions
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

    var showPlaceholder = false;
    if(currentOptions.length === 0){
      showPlaceholder = true;
    }

    this.setState({
      options : currentOptions,
      placeholder : showPlaceholder
    });

    this._removeOptionFromSelectedOptions(option);
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
      selectedOptions : currentSelectedOptions
    });
  }
});

module.exports = MultiSelect;
