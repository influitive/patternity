var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      children : [],
      onChange : function(){},
      name : "",
      ref : "select"
    };
  },
  propTypes : {
    name: React.PropTypes.string,
    ref: React.PropTypes.string,
    children: React.PropTypes.array,
    onChange : React.PropTypes.func
  },
  getInitialState: function() {
    return {
      title: "",
      selectedValue : this.props.selectedValue
    };
  },
  componentDidMount : function(){
    this.setState({
      title : this._determineSelectTitle()
    });
  },
  render : function(){
    return (
      <span className="select-box" ref="select-wrapper">
        <span className="title">{this.state.title}</span>
        <select name={this.props.name} ref={this.props.ref} onChange={this._handleChange} value={this.state.selectedValue}>
            {this.props.children}
        </select>
      </span>
    );
  },
  _determineSelectTitle : function(){
    return this._selectedOption().text;
  },
  _handleChange : function(event){
    this.props.onChange(event);
    this._updateSelectState();
  },
  _updateSelectState : function(){
    this.setState({
      title : this._selectedOption().text,
      selectedValue : this._selectedOption().value
    });
  },
  _selectedOption : function(){
    var select = this.refs[this.props.ref].getDOMNode();
    return select.options[select.selectedIndex];
  }
});

module.exports = SelectDropdown;
