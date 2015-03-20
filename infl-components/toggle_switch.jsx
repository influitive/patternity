var React = require('react');

var ToggleSwitch = React.createClass({
  getDefaultProps: function() {
    return {
      on: false,
      callback: function(){}
    };
  },
  getInitialState: function() {
    return {
      on: this.props.on
    };
  },
  propTypes : {
    on: React.PropTypes.bool,
    callback : React.PropTypes.func
  },
  render : function(){
    return (
      <span className={"toggle-swtich " + this._switchState()}>
        <span className="switch" onClick={this._updateSwitch}  onTouchStart={this._updateSwitch}></span>
      </span>
    );
  },
  _setInitialState : function(){
    this.setState({
      on : this.props.on
    });
  },
  _switchState : function(){
    return this.state.on ? "on" : "off";
  },
  _updateSwitch : function(){
    this.setState({
      on : !this.state.on
    });
    this.props.callback(!this.state.on);
  }
});

module.exports = ToggleSwitch;
