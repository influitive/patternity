var React = require('react');
window.React = React;

var $ = require('jquery');

var PopoverFloater = React.createClass({

  propTypes : {
    children: React.PropTypes.object,
    targetElement: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      top: 0,
      left: 0,
      recalculated: false
    };
  },

  componentDidUpdate : function() {
    if (!this.state.recalculated) {
      this._recalculatePosition();
    }
  },

  componentDidMount : function() {
    this._recalculatePosition();
  },

  render: function() {
    // this line makes it so the contents of the popover are not rendered until they are needed, and not destroyed when hidden
    var children = this.props.children;

    return (
      <div ref="popover" className={this._classes()} style={this._getStyle()} onClick={this._menuItemClicked}>
        <div className="arrow-top"/>
        <div className="arrow-top-inner"/>
        { children }
      </div>
    );
  },

  _menuItemClicked: function(e) {
    if (this.props.onClick) { this.props.onClick(e); }
  },

  _getStyle: function() {
    return {
      top: this.state.top + 'px',
      left: this.state.left + 'px'
    };
  },

  _classes: function() {
    return 'pt-popover is-visible';
  },

  resetPosition: function() {
    var targetElement = this.props.targetElement;
    var popoverNode = React.findDOMNode(this.refs.popover);

    var popover = $(popoverNode);
    var tW = $(targetElement).width();
    var tH = $(targetElement).height();
    var tOT = $(targetElement).position().top;
    var tOL = $(targetElement).position().left;
    var pW = popover.width();
    //var pH = popover.height();

    // position the popover centered below the target element
    var top = tOT + tH + 10;
    if (top<0) top = 0;
    var left = tOL + (tW - pW)/2;

    // restrict right edge to the width of the screen
    if (left + pW + 10 > window.innerWidth) {
      left = window.innerWidth - pW - 10;
      // todo: in this scenario the arrow pointing to the target element would need to be manually positioned instead of being in the middle
    }

    popoverNode.style.top = top+'px';
    popoverNode.style.left = left+'px';

    var offset = popover.offset();
    // if the parent element is absolutely positioned need to account for that
    var isAbsolute = popoverNode.parentNode.className.indexOf('is-absolute')>-1;
    if (isAbsolute && offset.left + pW + 10 > window.innerWidth) {
      var pO = $(popoverNode.parentNode).offset();
      var absLeft = window.innerWidth - pW - 10;
      var relLeft = absLeft - pO.left;
      popoverNode.style.left = relLeft+'px';
    }
  },

  _recalculatePosition: function() {
    var targetElement = React.findDOMNode(this.props.targetElement);
    var popoverNode = React.findDOMNode(this);

    var popover = $(popoverNode);
    var tW = $(targetElement).width();
    var tH = $(targetElement).height();
    var tOT = $(targetElement).position().top;
    var tOL = $(targetElement).position().left;
    var pW = popover.width();
    //var pH = popover.height();

    // position the popover centered below the target element
    var top = tOT + tH + 10;
    if (top<0) top = 0;
    var left = tOL + (tW - pW)/2;

    // restrict right edge to the width of the screen
    if (left + pW + 10 > window.innerWidth) {
      left = window.innerWidth - pW - 10;
      // todo: in this scenario the arrow pointing to the target element would need to be manually positioned instead of being in the middle
    }

    var offset = popover.offset();
    // if the parent element is absolutely positioned need to account for that
    var isAbsolute = popoverNode.parentNode.className.indexOf('is-absolute')>-1;
    if (isAbsolute && offset.left + pW + 10 > window.innerWidth) {
      var pO = $(popoverNode.parentNode).offset();
      var absLeft = window.innerWidth - pW - 10;
      var relLeft = absLeft - pO.left;
      left = relLeft;
    }

    this.setState({
      top: top,
      left: left,
      recalculated: true
    });
  }
});

var Popover = React.createClass({
  propTypes: {
    autoclose: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      isVisible: false
    };
  },

  render : function() {
    var link = this.props.children[0];
    var classes = 'pt-popoverwrapper '+this.props.className;
    return (
      <span ref="wrapper" className={ classes }>
        <span className="pt-popover-link" ref="link" onClick={this._onClick}>{ link }</span>
        {this._renderPopover()}
      </span>
    );
  },

  _renderPopover: function() {
    if (this.state.isVisible) {
      if (this.props.autoclose) { this._bindWindowEvents(); }

      var contents = this.props.children[1];
      return (
        <PopoverFloater ref="popover" targetElement={this.refs.link} onClick={this._popoverClicked}>
          { contents }
        </PopoverFloater>
      );
    } else {
      if (this.props.autoclose) { this._unbindWindowEvents(); }
    }
  },

  resetPosition: function() {
    this.refs.popover.resetPosition();
  },

  _bindWindowEvents: function() {
    $(document).on('click', this._hidePopover.bind(this));
    // $(document).on('touchstart', this._hidePopover.bind(this));
  },

  _unbindWindowEvents: function() {
    $(document).off('click', this._hidePopover.bind(this));
  },

  _popoverClicked: function(e) {
    if (this.props.autoclose) {
      this._hidePopover();
    }
  },

  _onOpen: function() {
    if (this.props.onOpen) { this.props.onOpen(this); }
  },

  _onClose: function() {
    if (this.props.onClose) { this.props.onClose(this); }
  },

  _onClick : function(e) {
    var isVisible = !this.state.isVisible;

    this.setState({
      isVisible: isVisible
    });

    if (isVisible) {
      this._onOpen();
    } else {
      this._onClose();
    }
  },

  _hidePopover: function() {
    this.setState({
      isVisible: false
    });

    this._onClose();
  }
});

Popover.Menu = React.createClass({
  propTypes : {
    className: React.PropTypes.string,
    children: React.PropTypes.object  // first child is the link, second child is PopOver.Menu
  },
  render : function() {
    return (<div className="pt-popovermenu">
      { this.props.children }
    </div>);
  }
});

module.exports = Popover;
