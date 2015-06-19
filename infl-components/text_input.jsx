var React = require('react');
var classNames = require('classnames');

var TextInput = React.createClass({
  getDefaultProps: function() {
    return {
      type: "text",
      placeholder : "",
      name: "",
      id : "",
      pattern : "",
      message : "",
      value : "",
      required : false,
      error : false,
      valid : false,
      readOnly : false,
      disabled : false,
      onChange : function(){},
      clearable : false,
      onCleared : function(){},
      autofocus : false,
      key : ""
    };
  },
  propTypes : {
    type: React.PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
    placeholder : React.PropTypes.string,
    name: React.PropTypes.string,
    id : React.PropTypes.string,
    pattern : React.PropTypes.string,
    message : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    required : React.PropTypes.bool,
    error : React.PropTypes.bool,
    valid : React.PropTypes.bool,
    readOnly : React.PropTypes.bool,
    disabled : React.PropTypes.bool,
    onChange : React.PropTypes.func,
    clearInput : React.PropTypes.bool,
    onInputCleared : React.PropTypes.func,
    autofocus : React.PropTypes.bool,
    key : React.PropTypes.string
  },
  getInitialState: function() {
    return {value: this.props.value};
  },
  componentWillReceiveProps: function(newProps){
    this.setState({
      value : newProps.value
    });
    this._setInputFocus(newProps.autofocus);
  },
  componentDidMount: function(){
    this._setInputFocus(this.props.autofocus);
  },
  render : function(){
    return (
      <span className={this._determineInputStyling()}>
        {this._determineInputIcon()}
        <input readOnly={this.props.readOnly} required={this.props.required} type={this.props.type} value={this.state.value}
               placeholder={this.props.placeholder} name={this.props.name} id={this.props.id}
               pattern={this.props.pattern} disabled={this.props.disabled} onChange={this._handleChange} ref="input"/>
        {this._isClearable()}
        {this._buildMessage()}
      </span>
    );
  },
  _setInputFocus : function(autofocus){
    if(autofocus){
      React.findDOMNode(this.refs.input).focus();
    }
  },
  _determineInputStyling : function(){
    return classNames({
      'is-required': this.props.required,
      'is-error': this.props.error,
      'is-valid': this.props.valid,
      'search-input': this.props.type === 'search',
      'pt-input': true,
      'is-disabled' : this.props.disabled,
      'is-clearable' : this.props.clearable
    });
  },
  _determineInputIcon : function(){
    if(this.props.type === 'search'){
      return (<span className="search-input ic ic-search"></span>);
    } else if(this.props.required) {
      return (<span className="required-input ic ic-asterisk"></span>);
    }
  },
  _handleChange: function(event){
    this.setState({value : event.target.value});
    this.props.onChange(event);
  },
  _isClearable : function(){
    if(!this.props.clearable){
      return "";
    }

    return (
      <span className="clear-input ic ic-close" onClick={this._clearInputValue}></span>
    );
  },
  _clearInputValue : function(){
    this.setState({
      value : ""
    }, this.props.onCleared());
  },
  _buildMessage: function(){
    if (typeof this.props.message === "string") {
      return (<span className="input-message">{this.props.message}</span>);
    }
    else {
      return this.props.message.map(function(message, i){
        return (<span key={i} className="input-message">{message}</span>);
      });
    }
  }
});

module.exports = TextInput;
