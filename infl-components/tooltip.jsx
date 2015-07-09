var React = require('react');

var Tooltip = React.createClass({
  propTypes : {
    title: React.PropTypes.string.isRequired,
    element: React.PropTypes.node.isRequired
  },

  getInitialState: function() {
    return {
      showTooltip: false,
      showClose: false,
      wasClicked: false
    };
  },

  render : function(){
    return (
      <span className="pt-tooltip" ref="tooltip">
        <Tooltip.Content
          title={this.props.title}
          content={this.props.children}
          showTooltip={this.state.showTooltip}
          showClose={this.state.showClose}
          closeToolTip={this._clickCloseTooltip}
          ref="tip" />
        <span className="tool-tip-element"
            onClick={this._clickTooltip}
            onTouchStart={this._clickShowTooltip}
            onMouseEnter={this._hoverShowTooltip}
            onMouseLeave={this._hoverHideTooltip}
            ref="element">
          {this.props.element}
        </span>
      </span>
    );
  },

  _hoverShowTooltip: function() {
    this._hoverToggleTooltip(true);
  },
  _hoverHideTooltip: function() {
    this._hoverToggleTooltip(false);
  },
  _hoverToggleTooltip : function(shouldShow){
    if(!this.state.wasClicked){
      this._updateState({
        showTooltip: shouldShow,
        showClose: false,
        wasClicked: false
      });
    }
  },
  _clickTooltip : function() {
    if (this.state.showTooltip && this.state.wasClicked) {
      this._clickCloseTooltip();
    } else {
      this._clickShowTooltip();
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

Tooltip.Content = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired,
    content : React.PropTypes.any.isRequired,
    showTooltip : React.PropTypes.bool.isRequired,
    showClose : React.PropTypes.bool.isRequired,
    closeToolTip : React.PropTypes.func.isRequired,
    position : React.PropTypes.oneOf(['top', 'bottom'])
  },

  getDefaultProps : function(){
    return {
      position : "top"
    };
  },

  render : function(){
    return (
      <div className={"tooltip-content " + this._showTooltip() + " " + this.props.position} ref="tip">
        <span className={"close ic ic-times " + this._showClose()} onClick={this.props.closeToolTip} ref="close"></span>
        <h3 ref="title">{this.props.title}</h3>
        <div className="tooltip-details" ref="details">
          {this.props.content}
        </div>
      </div>
    );
  },

  _showTooltip : function(){
    return this.props.showTooltip ? "" : "hide";
  },

  _showClose: function(){
    return this.props.showClose ? "" : "hide";
  },
});

module.exports = Tooltip;
