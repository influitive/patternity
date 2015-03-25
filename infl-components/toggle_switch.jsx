var React = require('react');

var ToggleSwitch = React.createClass({
  getDefaultProps: function() {
    return {
      enabled: true,
      isOn : false,
      onChange: function(){},
      inputName : ""
    };
  },
  getInitialState: function() {
    return {
      isOn: this.props.isOn
    };
  },
  propTypes : {
    enabled: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    inputName : React.PropTypes.string
  },
  render : function(){
    return (
      <span className={"toggle-switch " + this._switchState() + " " + this._isEnabled()}>
        <span className="toggle-text">{this._toggleText()}</span>
        <span className="switch" onClick={this._toggleCheck} onTouchStart={this._toggleCheck}>
          <span className="switch-line"></span>
          <span className="switch-line"></span>
          <span className="switch-line"></span>
        </span>
        <input type="checkbox" ref="checkbox" className="toggle-checkbox" checked={this._isChecked()} name={this.props.inputName} onChange={this._handleChange} />
      </span>
    );
  },
  _toggleText : function(){
    return this.state.isOn ? "On" : "Off";
  },
  _isChecked : function(){
    return this.state.isOn;
  },
  _switchState : function(){
    return this.state.isOn ? "on" : "off";
  },
  _isEnabled : function(){
    return this.props.enabled ? "" : "disabled";
  },
  _toggleCheck : function(){
    if(this.props.enabled){
      this.setState({isOn : !this.state.isOn});
    }
  },
  _handleChange : function(){
    this.props.onChange(this.state.isOn);
  }
});

module.exports = ToggleSwitch;
