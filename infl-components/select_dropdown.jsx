var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      title : "",
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
  render : function(){
    return (
      <span className="select-box">
        <span className="title">{this._determineTitle()}</span>
        <select name={this.props.name} ref="select" onChange={this._handleChange}>
            {this._buildOptions()}
        </select>
      </span>
    );
  },
  _buildOptions : function(){
    return this.props.options.map(function(option, index){
      return (<option value={option.value}>{option.name}</option>);
    });
  },
  _determineTitle :  function(){
    console.log(this.refs);
    // return React.findDOMNode(this.refs.select).value
  },
  _handleChange : function(event){
    this.props.onChange(event.target.value);
  }
});

module.exports = SelectDropdown;

