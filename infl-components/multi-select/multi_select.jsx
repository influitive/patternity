var React = require('react');

var MultiSelect = React.createClass({
  propTypes: {
    options: React.PropTypes.array,
    name : React.PropTypes.string
  },

  getDefaultProps : function(){
    return {
      options : [],
      name : "multiSelect"
    };
  },

  getInitialState : function(){
    var options = this.props.options;
    return {
      typeAhead : "",
      options : options,
      selectedOptions : [],
      showOptions : false
    };
  },

  render: function() {
    return (
      <span className="pt-multi-select">
        <span className="multi-select" onClick={this._toggleOptions}>
          <input type="text" ref="typeAhead" className="type-ahead" name="typeAhead" value={this.state.typeAhead} onChange={this._handleChange} />
          <SelectedOptions options={this.state.selectedOptions} removeSelectedOption={this._handleSelectedOptionRemoved} />
          <NativeSelect selectedOptions={this.state.selectedOptions} name={this.props.name} />
        </span>
        <SimplePopover isOpen={this.state.showOptions}>
          {this._buildMultiSelectOptions()}
        </SimplePopover>
      </span>
    );
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
    var that = this;
    return this.state.options.map(function(option, index){
      return (
        <MultiSelectOption key={index} name={option.name} value={option.value} onClick={that._handleOptionSelect}/>
      );
    });
  },

  _handleOptionSelect : function(option){
    var currentSelectedOptions = this.state.selectedOptions;
    currentSelectedOptions.push(option);

    this.setState({
      selectedOptions : currentSelectedOptions
    });

    this._removeSelectedOptionFromOptions(option);
  },

  _removeSelectedOptionFromOptions : function(option){
    var currentOptions = this.state.options;

    for(var i = 0; i < this.state.options.length; i++){
      if(this.state.options[i].name === option.name && this.state.options[i].value === option.value){
        currentOptions.splice(i, 1);
        break;
      }
    }

    this.setState({
      options : currentOptions
    });
  },

  _handleSelectedOptionRemoved : function(option){
    var currentOptions = this.state.options;
    currentOptions.push(option);

    this.setState({
      options : currentOptions
    });

    this._removeOptionFromSelectedOptions(option);
  },

  _removeOptionFromSelectedOptions : function(option){
    var currentSelectedOptions = this.state.selectedOptions;

    for(var i = 0; i < this.state.selectedOptions.length; i++){
      if(this.state.selectedOptions[i].name === option.name && this.state.selectedOptions[i].value === option.value){
        currentSelectedOptions.splice(i, 1);
        break;
      }
    }

    this.setState({
      selectedOptions : currentSelectedOptions
    });
  }
});

var NativeSelect = React.createClass({
  PropTypes : {
    selectedOptions : React.PropTypes.array.isRequired,
    name : React.PropTypes.string.isRequired
  },

  render : function(){
    return (
      <select name={this.props.name} multiple="multiple" className="pt-multi-select-native" value={this._buildSelectedValues()}>
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

var SelectedOptions = React.createClass({
  PropTypes : {
    options : React.PropTypes.array.isRequired,
    removeSelectedOption : React.PropTypes.func.isRequired
  },

  render : function(){
    return (
      <div className="selected-options">
        {this._buildSelectedOptions()}
      </div>
    );
  },

  _buildSelectedOptions : function(){
    var that = this;
    return this.props.options.map(function(option, index){
      return (
        <SelectedOption key={index} name={option.name} value={option.value} onClick={that.props.removeSelectedOption} />
      );
    });
  }
});

var SelectedOption = React.createClass({
  PropTypes : {
    name : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps : function(){
    return {
      value : ""
    };
  },

  render : function(){
    return (
      <span className="selected-option" onClick={this._handleClick}>{this.props.name}</span>
    );
  },

  _handleClick : function(event){
    event.stopPropagation();
    this.props.onClick({
      name : this.props.name,
      value :this.props.value
    });
  }
});

var MultiSelectOption = React.createClass({
  PropTypes : {
    name : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps : function(){
    return {
      value : ""
    };
  },

  render : function(){
    return (
      <span className="pt-multi-select-option" onClick={this._handleClick}>{this.props.name}</span>
    );
  },

  _handleClick : function(event){
    this.props.onClick({
      name : this.props.name,
      value :this.props.value
    });
  }
});

var SimplePopover = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool
  },

  getDefaultProps : function(){
    return {
      isOpen : false
    };
  },

  render : function(){
    return (
      <span className={"pt-simple-popover " + this._isPopoverOpen()}>
        {this.props.children}
      </span>
    );
  },

  _isPopoverOpen : function(){
    return this.props.isOpen ? "open" : ""
  }
});

module.exports = MultiSelect;
