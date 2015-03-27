var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      options : [],
      onChange : function(){},
      name : "",
      ref : "select"
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    ref: React.PropTypes.string,
    options: React.PropTypes.array,
    onChange : React.PropTypes.func
  },
  getInitialState: function() {
    var selectState = this._determineSelectState();
    return {
      title: selectState.title,
      selectedValue : selectState.value
    };
  },
  render : function(){
    return (
      <span className="select-box">
        <span className="title">{this.state.title}</span>
        <select name={this.props.name} ref={this.props.ref} onChange={this._handleChange} value={this.state.selectedValue}>
            {this._buildOptions()}
        </select>
      </span>
    );
  },
  _determineSelectState : function(){
    var selectState = {
      value : this.props.options[0].value,
      title : this.props.options[0].name,
    };
    this.props.options.map(function(option){
      if(option.selected){
        selectState.value = option.value;
        selectState.title = option.name;
      }
    });
    return selectState;
  },
  _buildOptions : function(){
    return this.props.options.map(function(option){
      return (<option value={option.value} key={option.value}>{option.name}</option>);
    });
  },
  _handleChange : function(event){
    this.props.onChange(event);
    this._updateSelectState();
  },
  _updateSelectState : function(){
    var select = this.refs[this.props.ref].getDOMNode();
    var selectedOption = select.options[select.selectedIndex];
    this.setState({
      title : selectedOption.text,
      selectedValue : selectedOption.value
    });
  }
});

module.exports = SelectDropdown;
