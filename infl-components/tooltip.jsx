var React = require('react');
var $ = require('jquery');

var Tooltip = React.createClass({
  propTypes : {
    title: React.PropTypes.string,
    element: React.PropTypes.node.isRequired,
    position : React.PropTypes.oneOf(['top', 'bottom']),
    isClickable : React.PropTypes.bool,
    container : React.PropTypes.string
  },

  getDefaultProps : function(){
    return {
      title : "",
      position : 'top',
      isClickable : true,
      containerSelector : 'body'
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
    if(this.state.showTooltip) {
      this._positionTooltipContent();
    }
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
    var DOMNodes = this._getDOMNodes();
    this._positionArrow(DOMNodes);
    this._positionContent(DOMNodes);

    if(this._isContentOutOfContainer(DOMNodes)){
      this._adjustContentPosition(DOMNodes);
    }
  },

  _getDOMNodes : function () {
    return {
      arrow : React.findDOMNode(this.refs.arrow),
      element : React.findDOMNode(this.refs.element),
      tooltip : React.findDOMNode(this.refs.tip),
      container : $(this.props.containerSelector).get( 0 )
    };
  },

  _positionArrow : function (DOMNodes){
    DOMNodes.arrow.style.left = ((DOMNodes.element.offsetWidth / 2) - (DOMNodes.arrow.offsetWidth /  2)) + "px";
    DOMNodes.arrow.style[this.props.position] = -1 * DOMNodes.arrow.offsetHeight + "px";
  },

  _positionContent : function (DOMNodes) {
    DOMNodes.tooltip.style.left = ((DOMNodes.element.offsetWidth / 2) - (DOMNodes.tooltip.offsetWidth /  2)) + "px";
    DOMNodes.tooltip.style[this.props.position] = -1 * (DOMNodes.tooltip.offsetHeight + DOMNodes.arrow.offsetHeight) +  "px";
  },

  _isContentOutOfContainer: function(DOMNodes){
    var tooltipPos = DOMNodes.tooltip.getBoundingClientRect();
    var containerPos = DOMNodes.container.getBoundingClientRect();

    return containerPos.left > tooltipPos.left || tooltipPos.right > containerPos.right;
  },

  _adjustContentPosition: function(DOMNodes){
    var tooltipPos = DOMNodes.tooltip.getBoundingClientRect();
    var containerPos = DOMNodes.container.getBoundingClientRect();

    if(containerPos.left > tooltipPos.left){
      DOMNodes.tooltip.style.left = (-1 * ($(DOMNodes.element).offset().left - $(DOMNodes.container).offset().left)) + "px";
    } else if(tooltipPos.right > containerPos.right) {
      DOMNodes.tooltip.style.left = ((DOMNodes.element.offsetWidth / 2) - (DOMNodes.tooltip.offsetWidth /  2) - (tooltipPos.right - containerPos.right)) + "px";
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
