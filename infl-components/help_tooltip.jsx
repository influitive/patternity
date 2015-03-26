var React = require('react');

var HelpTooltip = React.createClass({
  getInitialState: function() {
    return {
      showTooltip: false,
      showClose: false,
      wasClicked: false
    };
  },
  propTypes : {
    title: React.PropTypes.string,
    children: React.PropTypes.array
  },
  render : function(){
    return (
      <span className="help-tooltip">
        <div className={"tooltip-content " + this._showTooltip()}>
          <span className={"close ic ic-times " + this._showClose()} onClick={this._clickCloseTooltip}></span>
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
        <span className="help ic ic-question-circle-o"
          onClick={this._clickShowTooltip}
          onTouchStart={this._clickShowTooltip}
          onMouseEnter={this._hoverToggleTooltip}
          onMouseLeave={this._hoverToggleTooltip}>
        </span>
      </span>
    );
  },
  _showTooltip : function(){
    return this.state.showTooltip ? "" : "hide";
  },
  _showClose: function(){
    return this.state.showClose ? "" : "hide";
  },
  _hoverToggleTooltip : function(){
    if(!this.state.wasClicked){
      this._updateState({
        showTooltip: !this.state.showTooltip,
        showClose: false,
        wasClicked: false
      });
    }
  },
  _clickTooltip : function() {
    if (this.state.showTooltip && this.state.wasClicked) {
      _clickCloseTooltip();
    } else {
      _clickShowTooltip();
    }
  },
  _clickShowTooltip : function() {
    this._updateState({
      showTooltip: true,
      showClose: true,
      wasClicked: true
    });
  },
  _clickCloseTooltip : function(){
    this._updateState({
      showTooltip: false,
      showClose: true,
      wasClicked: false
    });
  },
  _updateState : function(newState){
    this.setState(newState);
  }
});

module.exports = HelpTooltip;
