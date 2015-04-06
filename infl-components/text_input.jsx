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
      onChange : function(){}
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
    value : React.PropTypes.string,
    required : React.PropTypes.bool,
    error : React.PropTypes.bool,
    valid : React.PropTypes.bool,
    readOnly : React.PropTypes.bool,
    disabled : React.PropTypes.bool,
    onChange : React.PropTypes.func
  },
  getInitialState: function() {
    return {value: this.props.value};
  },
  render : function(){
    return (
      <span className={this._determineInputStyling()}>
        {this._determineInputIcon()}
        <input readOnly={this.props.readOnly} type={this.props.type} value={this.state.value}
               placeholder={this.props.placeholder} name={this.props.name} id={this.props.id}
               pattern={this.props.pattern} disabled={this.props.disabled} onChange={this._handleChange}/>
        {this._buildMessage()}
      </span>
    );
  },
  _determineInputStyling : function(){
    return classNames({
      'is-required': this.props.required,
      'is-error': this.props.error,
      'is-valid': this.props.valid,
      'search-input': this.props.type === 'search',
      'pt-input': true,
      'is-disabled' : this.props.disabled
    });
  },
  _determineInputIcon : function(){
    if(this.props.type === 'search'){
      return (<span className="ic ic-search"></span>);
    } else if(this.props.required) {
      return (<span className="ic ic-asterisk"></span>);
    }
  },
  _handleChange: function(event){
    this.setState({value : event.target.value});
    this.props.onChange(event);
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

module.exports = TextInput;
