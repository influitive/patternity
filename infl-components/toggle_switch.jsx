var React = require('react');
var classNames = require('classnames');

var ToggleSwitch = React.createClass({
  getInitialState: function () {
    return {
      isOn: this.props.isOn
    };
  },
  getDefaultProps: function() {
    return {
      id: "",
      enabled: true,
      isOn : false,
      onChange: function(){},
      inputName : ""
    };
  },
  propTypes : {
    id: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    isOn: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    inputName : React.PropTypes.string
  },
  render : function(){
    return (
      <span id={this.props.id} className={this._switchCSSClasses()} onClick={this._clickCheckBox} onTouchStart={this._toggleCheck}>
        <span className="toggle-text">{this._toggleText()}</span>
        <span className="switch">
          <span className="switch-line"></span>
          <span className="switch-line"></span>
          <span className="switch-line"></span>
        </span>
        <input type="checkbox" ref="checkbox" className="toggle-checkbox" checked={this._isChecked()} name={this.props.inputName} onChange={this._handleChange} id={this.props.id} />
      </span>
    );
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({
      isOn: newProps.isOn
    });
  },
  _toggleText : function(){
    return this.state.isOn ? "On" : "Off";
  },
  _isChecked : function(){
    return this.state.isOn;
  },
  _switchCSSClasses : function(){
    return classNames({
      'toggle-switch': true,
      'on': this.state.isOn,
      'off': !this.state.isOn,
      'disabled': !this.props.enabled
    });
  },
  _clickCheckBox : function(){
    if(this.props.enabled){
      this.refs.checkbox.getDOMNode().click();
    }
  },
  _handleChange : function(event){
    this.setState({isOn: !this.state.isOn})
    this.props.onChange(event);
  }
});

module.exports = ToggleSwitch;
