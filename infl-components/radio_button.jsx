var React = require('react');
var classNames = require('classnames');

var RadioButton = React.createClass({
  getDefaultProps: function() {
    return {
      id: "",
      enabled: true,
      isChecked : false,
      onChange: function(){},
      radioName : "",
      radioLabel : "",
      value : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    isChecked: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    radioName : React.PropTypes.string,
    radioLabel : React.PropTypes.string,
    value : React.PropTypes.string
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({
      isChecked: newProps.isChecked
    });
  },
  render : function(){
    return (
      <span id={this.props.id} className={this._radioCSSClasses()} onClick={this._clickRadioButton}>
        <input disabled={!this.props.enabled} type="radio" ref="radio" defaultChecked={this.props.isChecked} value={this.props.value} className="pt-native-radio-button"  name={this.props.radioName} onChange={this._handleChange} id={this.props.id} />
        <span className="stylized-radio-button"></span>
        <label className="pt-radio-label" htmlFor={this.props.id}>{this.props.radioLabel}</label>
      </span>
    );
  },
  _radioCSSClasses : function(){
    return classNames({
      'pt-radio-button': true,
      'disabled': !this.props.enabled
    });
  },
  _clickRadioButton : function(){
    if(this.props.enabled){
      this.refs.radio.getDOMNode().click();
    }
  },
  _handleChange : function(event){
    this.props.onChange(event);
  }
});

RadioButton.Group = React.createClass({
    getDefaultProps: function() {
    return {
      id: "",
      enabled: true,
      radioName : "",
      layout : "inline"
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    radioName : React.PropTypes.string,
    layout : React.PropTypes.string
  },
  componentWillMount : function(){
    this._updateRadioButtonValues();
  },
  render : function(){
    return (
      <span className={"pt-radio-button-group " + this.props.layout} id={this.props.id}>
        {this.props.children}
      </span>
    );
  },
  _updateRadioButtonValues : function(){
    var that = this;
    React.Children.forEach(this.props.children, function(child){
      console.log(child);
      child.props.enabled = that.props.enabled;
      child.props.radioName = that.props.radioName;
    });
  }
});

module.exports = RadioButton;
