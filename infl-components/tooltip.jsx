var React = require('react');
var $ = require('jquery');

var Tooltip = React.createClass({
  propTypes : {
    title: React.PropTypes.string,
    element: React.PropTypes.node.isRequired,
    position : React.PropTypes.oneOf(['top', 'bottom']),
    isClickable : React.PropTypes.bool
  },

  getDefaultProps : function(){
    return {
      title : "",
      position : 'top',
      isClickable : true
    };
  },

  getInitialState: function() {
    return {
      showTooltip: false,
      showClose: false,
      wasClicked: false
    };
  },

  componentDidUpdate: function(){
    this._positionTooltipContent();
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
            position={this.props.position}
            ref="tip" />
        <TooltipArrow
            position={this.props.position}
            showArrow={this.state.showTooltip}
            ref="arrow" />
        <span className="tool-tip-element"
            onClick={this._clickTooltip}
            onMouseOver={this._hoverShowTooltip}
            onMouseOut={this._hoverHideTooltip}
            ref="element">
          {this.props.element}
        </span>
      </span>
    );
  },

  _positionTooltipContent: function(){
    this._positionArrow();
    this._positionContent();

    if(this._isContentOffScreen()){
      this._adjustContentPosition();
    }
  },

  _positionArrow : function (){
    var arrow = React.findDOMNode(this.refs.arrow);
    var element = React.findDOMNode(this.refs.element);

    arrow.style.left = ((element.offsetWidth / 2) - (arrow.offsetWidth /  2)) + "px";

    if(this.props.position === "top"){
      arrow.style.top = -1 * arrow.offsetHeight + "px";
    } else {
      arrow.style.bottom = -1 * arrow.offsetHeight + "px";
    }
  },

  _positionContent : function () {
    var tooltipContent = React.findDOMNode(this.refs.tip);
    var element = React.findDOMNode(this.refs.element);
    var arrow = React.findDOMNode(this.refs.arrow);

    tooltipContent.style.left = ((element.offsetWidth / 2) - (tooltipContent.offsetWidth /  2)) + "px";
    if(this.props.position === "top") {
      tooltipContent.style.top = -1 * (tooltipContent.offsetHeight + arrow.offsetHeight) +  "px";
    } else {
      tooltipContent.style.bottom = -1 * (tooltipContent.offsetHeight + arrow.offsetHeight) +  "px";
    }
  },

  _isContentOffScreen: function(){
    var tooltipContent = React.findDOMNode(this.refs.tip);
    if(this._whichDirection(tooltipContent) === "left"){
      return $(tooltipContent).offset().left < 0;
    } else {
      return ($(tooltipContent).offset().left + tooltipContent.offsetWidth) > window.innerWidth;
    }
  },

  _whichDirection: function(tooltipContent){
    return $(tooltipContent).offset().left > window.innerWidth / 2 ? "right" : "left";
  },

  _adjustContentPosition: function(){
    var tooltipContent = React.findDOMNode(this.refs.tip);
    var element = React.findDOMNode(this.refs.element);
    if(this._whichDirection(tooltipContent) === "left"){
      tooltipContent.style.left = ($(tooltipContent).offset().left + element.offsetWidth / 2) + "px";
    } else {
      tooltipContent.style.left = (($(tooltipContent).offset().left - window.innerWidth) + element.offsetWidth / 2) + "px";
    }
  },

  _tooltipContentIsOffScreen: function(tooltipContent){
    if($(tooltipContent).offset().left > window.innerWidth / 2){
      this._isContentOffScreen(true);
    } else {

    }
  },

  _hoverShowTooltip: function(event) {
    this._hoverToggleTooltip(true);
  },

  _hoverHideTooltip: function(event) {
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

  _clickTooltip : function(event) {
    if(this.props.isClickable) {
      this._handleClick(event);
    }
  },

  _handleClick : function(){
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

var TooltipArrow = React.createClass({
  propTypes : {
    showArrow : React.PropTypes.bool.isRequired,
    position : React.PropTypes.oneOf(['top', 'bottom'])
  },

  getDefaultProps : function(){
    return {
      position : "top"
    };
  },

  render : function(){
    return (
      <span className={"tooltip-arrow " + this._showArrow() + " " + this.props.position} ref="arrow"></span>
    );
  },

  _showArrow : function(){
    return this.props.showArrow ? "" : "hide";
  }
});

Tooltip.Content = React.createClass({
  propTypes : {
    title : React.PropTypes.string,
    content : React.PropTypes.any.isRequired,
    showTooltip : React.PropTypes.bool.isRequired,
    showClose : React.PropTypes.bool.isRequired,
    closeToolTip : React.PropTypes.func.isRequired,
    position : React.PropTypes.oneOf(['top', 'bottom']),
  },

  getDefaultProps : function(){
    return {
      title : "",
      position : "top"
    };
  },

  render : function(){
    return (
      <div className={"tooltip-content " + this._showTooltip() + " " + this.props.position} ref="tip">
        <span className={"close ic ic-times " + this._showClose()} onClick={this.props.closeToolTip} ref="close"></span>
        {this._showTitle()}
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

  _showTitle : function(){
    if(typeof this.props.title !== "string") {
      return null;
    }

    return this.props.title.length > 0 ? (<h3 ref="title">{this.props.title}</h3>) : null;
  }
});

module.exports = Tooltip;
