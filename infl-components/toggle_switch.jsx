var React = require('react');

var ToggleSwitch = React.createClass({
  getDefaultProps: function() {
    return {
      enabled: false,
      onChange: function(){},
      inputName : ""
    };
  },
  getInitialState: function() {
    return {
      enabled: this.props.enabled
    };
  },
  propTypes : {
    enabled: React.PropTypes.bool,
    onChange : React.PropTypes.func,
    inputName : React.PropTypes.string
  },
  render : function(){
    return (
      <span className={"toggle-switch " + this._switchState()}>
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
    return this.state.enabled ? "On" : "Off";
  },
  _isChecked : function(){
    return this.state.enabled;
  },
  _switchState : function(){
    return this.state.enabled ? "on" : "off";
  },
  _toggleCheck : function(){
    this.setState({
      enabled : !this.state.enabled
    });
  },
  _handleChange : function(){
    this.props.onChange(this.state.enabled);
  }
});

module.exports = ToggleSwitch;
