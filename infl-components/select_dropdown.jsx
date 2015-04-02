var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      children : [],
      onChange : function(){},
      name : "",
      ref : "select",
      value : ""
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
      value : this.props.value
    };
  },
  componentDidMount : function(){
    this.setState({
      title : this._determineSelectTitle()
    });
  },
  componentWillReceiveProps : function(newProps){
    this.setState({
      value : newProps.value
    }, this._updateTitleAfterDOMUpdate);
  },
  _updateTitleAfterDOMUpdate : function(){
    this.setState({
      title : this._determineSelectTitle()
    });
  },
  render : function(){
    return (
      <span className="select-box" ref="select-wrapper">
        <span className="title" ref="title">{this.state.title}</span>
        <select className="default" name={this.props.name} ref={this.props.ref} onChange={this._handleChange} value={this.state.value}>
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
      value : this._selectedOption().value
    });
  },
  _selectedOption : function(){
    var select = this.refs[this.props.ref].getDOMNode();
    return select.options[select.selectedIndex];
  }
});

module.exports = SelectDropdown;
