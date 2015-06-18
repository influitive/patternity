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
    onChange : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      options : [],
      name : "multiSelect",
      onChange : function(){}
    };
  },

  getInitialState : function(){
    return {
      typeAhead : "",
      options : [],
      selectedOptions : [],
      showOptions : false
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
    this._handleChange();
  },

  render: function() {
    return (
      <span ref="multiSelectContainer" className={"pt-multi-select " + this._areOptionsVisible()}>
        <ClearAll hasSelectedOptions={this._hasSelectedOptions()} onClearAll={this._handleClearAll}/>

        <span className="multi-select" onClick={this._toggleOptions}>
          <input type="text" ref="typeAhead" className="type-ahead" name="typeAhead" value={this.state.typeAhead} onChange={this._handleChange} />
          <SelectedOptions options={this.state.selectedOptions} removeSelectedOption={this._handleSelectedOptionRemoved} />
          <NativeSelect selectedOptions={this.state.selectedOptions} name={this.props.name} />
        </span>

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

  _handleChange : function(){
    var newlyAddedOption = this.state.selectedOptions[this.state.selectedOptions.length - 1];
    this.props.onChange(newlyAddedOption, this.state.selectedOptions);
  },

  _hasSelectedOptions : function(){
    return this.state.selectedOptions.length > 0;
  },

  _handleClearAll : function(){
    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i ++){
      currentOptions[i].optionIsSelected =  false;
    }

    this.setState({
      options : currentOptions,
      selectedOptions : []
    });
  },

  _areOptionsVisible : function(){
    return this.state.showOptions ? "open" : "";
  },

  _toggleOptions : function(event){
    event.stopPropagation();
    this.setState({
      showOptions : !this.state.showOptions
    });
  },

  _handleChange : function(event){
    this.setState({
      typeAhead : event.target.value
    });
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
          onClick={that._handleOptionSelect}/>
      );
    });
  },

  _anyOptionsToShow : function(){
    var optionsToShow = false;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].optionIsSelected === false){
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
      selectedOptions : currentSelectedOptions
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

    this.setState({
      options : currentOptions
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
