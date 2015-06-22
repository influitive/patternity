var React = require('react');

var SelectDropdown = React.createClass({
  getDefaultProps: function() {
    return {
      name : "",
      value : "",
      disabled : false,
      children : [],
      onChange : function(){},
      message : "",
      id : ""
    };
  },
  propTypes : {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled :  React.PropTypes.bool,
    children: React.PropTypes.array,
    onChange : React.PropTypes.func,
    message: React.PropTypes.string,
    id: React.PropTypes.string
  },
  getValue: function() {
    return this.state.value;
  },
  getInitialState: function() {
    return {
      value : this.props.value,
      title: this.props.title
    };
  },
  componentDidMount : function() {
    var s = this._selectedOption();
    if (s && this.state.title != s.text) {
      this.setState({
        title: s.text
      });
    }
  },
  componentWillReceiveProps : function(newProps) {
    this.setState({
      value : newProps.value,
      title : this._getSelectedOptionText()
    });
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
  _isDisabled : function(){
    return this.props.disabled ? "is-disabled" : "";
  },
  _handleChange : function(event){
    if (!this.props.disabled) {
      this.setState({
        title : this._selectedOption().text,
        value : this._selectedOption().value
      });

      this.props.onChange(event);
    }
  },
  _getSelectedOptionText : function() {
    var s = this._selectedOption();
    return (s && s.text)? s.text : '';
  },
  _selectedOption : function(){
    if (this.refs && this.refs.select) {
      var select = React.findDOMNode(this.refs.select);
      return select.options[select.selectedIndex];
    }
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
