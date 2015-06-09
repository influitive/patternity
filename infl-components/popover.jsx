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
    this._windowClickEvent = this._windowClick.bind(this);
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
      var me = this;
      setTimeout(function() {
        me._resetPosition();
      }, 1);
    }
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

  recenter: function() {
    this._resetPosition();
  },

  _resetPosition: function() {
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
    var left = tOL + (tW - pW)/2;
    popoverNode.style.top = top+'px';
    popoverNode.style.left = left+'px';
  },

  _windowClick : function(e) {
    var popoverNode = React.findDOMNode(this.refs.popover);
    var isChild = isChildOf(e.target, popoverNode);
    if (isChild && !this.props.autoclose) {
      return;
    }
    this._hide();
  },

  _addEvents : function() {
    $(document).on('click', this._windowClickEvent, true);
  },
  _removeEvents : function() {
    $(document).off('click', this._windowClickEvent, true);
  }

});

PopoverFloater.clickEvent = function(e) {
  var elm = (window.event && window.event.srcEvent)? window.event.srcElement : e.target;
  while (!elm.getAttribute('data-popover') && elm.parentNode) {
    elm = elm.parentNode;
  }
  if (elm.getAttribute('data-popover')) {
    var popoverName = elm.getAttribute('data-popover');
    var popover = this.refs[popoverName];
    popover.toggle(elm);
    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
  }
};

var Popover = React.createClass({
  propTypes: {
    autoclose: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  componentDidMount: function() {
    this._onClickEvent = this._onClick.bind(this);
    var a = this.refs.link.getDOMNode();
    if (a && a.childNodes[0]) {
      $(a.childNodes[0]).on('click', this._onClickEvent);
    }
  },

  componentWillUnmount: function() {
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

  recenter: function() {
    this.refs.popover.recenter();
  },

  _onClick : function(e) {
    var popover = this.refs.popover.getDOMNode();
    var a = this.refs.link.getDOMNode();
    this.refs.popover.toggle(a);
    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
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
