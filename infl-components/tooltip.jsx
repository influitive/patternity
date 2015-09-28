var React = require('react');
var $ = require('jquery');

var Icon = require('icon.jsx');
var Popover = require('popover');

var Tooltip = React.createClass({
  propTypes: {
    title:             React.PropTypes.string,
    element:           React.PropTypes.node.isRequired,
    position:          React.PropTypes.oneOf(['top', 'bottom']),
    isClickable:       React.PropTypes.bool,
    containerSelector: React.PropTypes.string,
    onOpen:            React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      title:             '',
      position:          'top',
      isClickable:       true,
      containerSelector: 'body',
      onOpen:            function() {}
    };
  },

  getInitialState: function() {
    return {
      showTooltip: false,
      showClose:   false,
      wasClicked:  false
    };
  },

  componentDidMount: function() {
    $('body').click(this._closeTooltip);
  },

  componentWillUnmount: function() {
    $('body').off('click', this._closeTooltip);
  },

  render: function() {
    return (
      <span className="pt-tooltip" ref="tooltip">
        <Popover
            element={this._tooltipElement()}
            isOpen={this.state.showTooltip}
            position={this.props.position}
            container={this.props.containerSelector}
            onOpen={this.props.onOpen}
            style={this.styles.popover.popover2}>
          <div className="pt-toolttip-content" style={this.styles.popover.content}>
            <CloseTooltip
                onClick={this._closeTooltip}
                showClose={this.state.showClose} />
            {this.props.children}
          </div>
        </Popover>
      </span>
    );
  },

  _tooltipElement: function(){
    return (
      <span className="tool-tip-element"
          onClick={this._clickTooltip}
          onMouseOver={this._hoverToggleTooltip}
          onMouseOut={this._hoverToggleTooltip}
          ref="element"
          style={this.styles.element}>
        {this.props.element}
      </span>
    );
  },

  _hoverToggleTooltip: function(shouldShow) {
    if (!this.state.wasClicked) {
      this._updateState({
        showTooltip: !this.state.showTooltip,
        showClose:   false,
        wasClicked:  false
      });
    }
  },

  _clickTooltip: function(event) {
    if (this.props.isClickable) {
      this._showTooltip(event);
    }
  },

  _showTooltip: function(event) {
    event.preventDefault();
    event.stopPropagation();

    this._updateState({
      showTooltip: true,
      showClose:   true,
      wasClicked:  true
    });
  },

  _closeTooltip: function(event) {
    this._updateState({
      showTooltip: false,
      showClose:   false,
      wasClicked:  false
    });
  },

  _updateState: function(newState) {
    this.setState(newState);
  },

  styles : {
    popover : {
      popover2: {
        background: 'rgba(68, 68, 68, 0.9)',
        borderColor: null,
      },
      content : {
        color: '#fff',
        width: '100%',
        minWidth: '300px',
        fontSize: '13px',
        padding: '13px 13px 26px 13px',
        position: 'relative'
      },
      arrow : {
        borderTopWidth: '10px',
        borderTopColor: '#444444',
        opacity: '0.9'
      },
      element : {
        fontSize: '20px',
        color: '#444444', //$darker-grey
        verticalAlign: 'middle',
        cursor: 'pointer',
        display: 'inline-block'
      }
    }
  }
});

var CloseTooltip = React.createClass({
  PropTypes : {
    onClick : React.PropTypes.func.isRequired,
    showClose : React.PropTypes.bool
  },

  getDefaultProps: function(){
    return {
      showClose : false
    };
  },

  render: function(){
    return this._showClose();
  },

  _showClose: function(){
    if(!this.props.showClose){
      return null;
    }

    return this._closeButton();
  },

  _closeButton: function(){
    return (
      <span
          className='close'
          onClick={this.props.onClick}
          ref="close"
          style={this.styles.close}>
        <Icon icon='times' />
      </span>
    );
  },

  styles : {
    close : {
      // float: 'right',
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      color: '#fff',
      opacity: '1',
      cursor: 'pointer',
      display: 'block',
      textShadow: 'none',
      fontWeight: 'normal'
    }
  }
});

module.exports = Tooltip;
