var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      children : [],
      onChange : function(){},
      name : "",
      value : "",
      disabled : false,
      message : "",
      id : ""
    };
  },
  propTypes : {
    name: React.PropTypes.string,
    children: React.PropTypes.array,
    onChange : React.PropTypes.func,
    disabled :  React.PropTypes.bool,
    message: React.PropTypes.string,
    id: React.PropTypes.string
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
  render : function(){
    return (
      <span className={"pt-select "  + this._isDisabled()} id={this.props.id}>
        <span className="select-box" ref="select-wrapper">
          <span className="title" ref="title">{this.state.title}</span>
          <select className="default" name={this.props.name} disabled={this.props.disabled} ref="select" onChange={this._handleChange} value={this.state.value}>
              {this.props.children}
          </select>
        </span>
        {this._buildMessage()}
      </span>
    );
  },
  _updateTitleAfterDOMUpdate : function(){
    this.setState({
      title : this._determineSelectTitle()
    });
  },
  _isDisabled : function(){
    return this.props.disabled ? "is-disabled" : "";
  },
  _determineSelectTitle : function(){
    return this._selectedOption().text;
  },
  _handleChange : function(event){
    if(!this.props.disabled){
      this.props.onChange(event);
      this._updateSelectState();
    }
  },
  _updateSelectState : function(){
    this.setState({
      title : this._selectedOption().text,
      value : this._selectedOption().value
    });
  },
  _selectedOption : function(){
    var select = this.refs.select.getDOMNode();
    return select.options[select.selectedIndex];
  },
  _buildMessage: function(){
    if(typeof this.props.message === "string"){
      return (<span className="input-message">{this.props.message}</span>);
    } else {
      return this.props.message.map(function(message){
        return (<span className="input-message">{message}</span>);
      });
    }
  }
});

module.exports = SelectDropdown;
