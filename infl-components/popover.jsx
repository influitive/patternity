var React = require('react');
window.React = React;

var $ = require('jquery');

function isChildOf(child, parent) {
  do {
    if (child == parent) return true;
  }
  while (child = child.parentNode);
  return false;
}

function cancelEvent(e) {
  e.stopPropagation();
  e.preventDefault();
  e.cancelBubble = true;
  return false;
}

var PopoverFloater = React.createClass({

  propTypes : {
    children: React.PropTypes.object,
    targetElement: React.PropTypes.object,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      isVisible : false,
      hasBeenRendered : false
    };
  },

  componentWillMount: function() {
    var me = this;
    this._windowClickEvent = function(e) {
      me._windowClick(e);
    };
  },

  componentWillUnmount: function() {
    this._removeEvents();
    this._hide();
  },

  componentWillUpdate : function() {
    if (this.state.isVisible && !this.state.hasBeenRendered) {
      this.setState({
        hasBeenRendered : true
      });
    }
  },

  componentDidUpdate : function() {
    if (this.state.isVisible) {
      this._updatePosition();
    }
  },

  _updatePosition : function() {
    var me = this;
    setTimeout(function() {
      me.resetPosition();
    }, 1);
  },

  render: function() {
    // this line makes it so the contents of the popover are not rendered until they are needed, and not destroyed when hidden
    var children = (this.state.isVisible || this.state.hasBeenRendered) ? this.props.children : null;

    return (
      <div ref="popover" className={this._classes()}>
        <div className="arrow-top"/>
        <div className="arrow-top-inner"/>
        { children }
      </div>
      );
  },

  _classes: function() {
    return 'pt-popover' +
      (this.state.isVisible?' is-visible':'');
  },

  toggle: function(targetElement) {
    if (this.state.isVisible) {
      this._hide();
    }
    else {
      this._show(targetElement);
    }
  },

  _hide: function() {
    this.setState({
      isVisible: false
    }, function () {
      this._removeEvents();
      if (this.props.onClose) this.props.onClose();
    });
  },

  _show: function(targetElement) {
    this.setState({
      targetElement : targetElement,
      isVisible : true
    }, function() {
      var me = this;
      setTimeout(function() {
        me._addEvents();
      },20);
      if (this.props.onOpen) this.props.onOpen();
    });
  },

  resetPosition: function() {
    var targetElement = this.state.targetElement;
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

  _windowClick : function(e) {
    var popoverNode = React.findDOMNode(this.refs.popover);
    var isChild = isChildOf(e.target, popoverNode);
    var isObject = e.target.nodeName=='OBJECT' || e.target.nodeName=='EMBED';
    if (isObject) { // don't close the popover when clicking on the flash component of ZeroClipboard
      return false;
    }
    if (isChild && !this.props.autoclose) {
      return;
    }
    this._hide();
  },

  _addEvents : function() {
    if (typeof document.attachEvent=='function' || typeof document.attachEvent=='object') {
      document.attachEvent('click', this._windowClickEvent, true);
    }
    else {
      document.addEventListener('click', this._windowClickEvent, true);
    }
  },
  _removeEvents : function() {
    if (typeof document.detachEvent=='function' || typeof document.detachEvent=='object') {
      document.detachEvent('click', this._windowClickEvent, true);
    }
    else {
      document.removeEventListener('click', this._windowClickEvent, true);
    }
  }

});

// deprecated, this is no longer required for the popover menu / link combo element
//PopoverFloater.clickEvent = function(e) {
//  var elm = (window.event && window.event.srcEvent)? window.event.srcElement : e.target;
//  while (!elm.getAttribute('data-popover') && elm.parentNode) {
//    elm = elm.parentNode;
//  }
//  if (elm.getAttribute('data-popover')) {
//    var popoverName = elm.getAttribute('data-popover');
//    var popover = this.refs[popoverName];
//    popover.toggle(elm);
//    return cancelEvent(e);
//  }
//};

var Popover = React.createClass({
  propTypes: {
    autoclose: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  componentDidMount: function() {
    var me = this;
    this._onClickEvent = function(e) {
      me._onClick(e);
    };

    var a = this.refs.link.getDOMNode();
    if (a && a.childNodes[0]) {
      $(a.childNodes[0]).on('click', this._onClickEvent);
    }
  },

  componentWillUnmount: function() {
    if (!this.refs.link) return;
    var a = this.refs.link.getDOMNode();
    if (a && a.childNodes[0]) {
      $(a.childNodes[0]).off('click', this._onClickEvent);
    }
  },

  render : function() {
    var first = this.props.children[0];
    var second = this.props.children[1];
    var classes = 'pt-popoverwrapper '+this.props.className;
    return (<span ref="wrapper" className={ classes }>
      <span className="pt-popover-link" ref="link">{ first }</span>
      <PopoverFloater ref="popover" autoclose={this.props.autoclose} onOpen={this._onOpen} onClose={this._onClose}>
        { second }
      </PopoverFloater>
    </span>);
  },

  _onOpen: function() {
    if (this.props.onOpen) this.props.onOpen(this);
  },
  _onClose: function() {
    if (this.props.onClose) this.props.onClose(this);
  },

  resetPosition: function() {
    this.refs.popover.resetPosition();
  },

  _onClick : function(e) {
    var a = this.refs.link.getDOMNode();
    this.refs.popover.toggle(a);
    return cancelEvent(e);
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
