var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      options : [],
      onChange : function(){},
      name : ""
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    options: React.PropTypes.array,
    onChange : React.PropTypes.func
  },
  getInitialState: function() {
    return {title: this._determineTitle()};
  },
  render : function(){
    return (
      <span className="select-box">
        <span className="title">{this.state.title}</span>
        <select name={this.props.name} ref="select" onChange={this._handleChange} value={this._determineSelectedOption()}>
            {this._buildOptions()}
        </select>
      </span>
    );
  },
  _determineTitle : function(){
    var title = this.props.options[0].name;
    this.props.options.map(function(option){
      if(option.selected){
        title = option.name;
      }
    });
    return title;
  },
  _determineSelectedOption : function(){
    var selctedOptionValue = -1;
    this.props.options.map(function(option){
      if(option.selected){
        selctedOptionValue = option.value;
      }
    });
    return selctedOptionValue;
  },
  _buildOptions : function(){
    return this.props.options.map(function(option){
      return (<option value={option.value} key={option.value}>{option.name}</option>);
    });
  },
  _handleChange : function(event){
    this.props.onChange(event.target.value);
    this._updateTitle();
  },
  _updateTitle : function(){
    var select = this.refs.select.getDOMNode();
    this.setState({title : select.options[select.selectedIndex].text});
  }
});

module.exports = SelectDropdown;
