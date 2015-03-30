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
      required : false,
      error : false,
      valid : false,
    };
  },
  propTypes : {
    type: React.PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
    placeholder : React.PropTypes.string,
    name: React.PropTypes.string,
    id : React.PropTypes.string,
    pattern : React.PropTypes.string,
    message : React.PropTypes.string,
    required : React.PropTypes.bool,
    error : React.PropTypes.bool,
    errorMessage : React.PropTypes.string,
    valid : React.PropTypes.bool
  },
  render : function(){
    return (
      <span className={this._determineInputStyling()}>
        {this._determineInputIcon()}
        <input type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} id={this.props.id} pattern={this.props.pattern} />
        <span className="input-message">{this.props.message}</span>
      </span>
    );
  },
  _determineInputStyling : function(){
    return classNames({
      'is-required': this.props.required,
      'is-error': this.props.error,
      'valid': this.props.valid,
      'search-input': this.props.type === 'search',
      'pt-input': true
    });
  },
  _determineInputIcon : function(){
    if(this.props.type === 'search'){
      return (<span className="ic ic-search"></span>);
    } else if(this.props.required) {
      return (<span className="ic ic-asterisk"></span>);
    }
  }
});

module.exports = TextInput;
