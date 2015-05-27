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
    targetElement: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      isVisible : false,
      hasBeenRendered : false
    };
  },

  isVisible: function() {
    return this.state.isVisible;
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
//        console.log('componentDidUpdate');
        me._resetPosition();
      }, 1);
    }
  },

  render: function() {
    window.pop = this;

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
      },50);
    });
  },

  _resetPosition: function() {
    var targetElement = this.state.targetElement;
    var popoverNode = React.findDOMNode(this.refs.popover);
    var popover = $(popoverNode);
    var tW = $(targetElement).width();
    var tH = $(targetElement).height();
    var tOT = targetElement.offsetTop;
    var tOL = targetElement.offsetLeft;
    var pW = popover.width();
    //var pH = popover.height();

    // position the popover centered below the target element
    var top = tOT + tH + 18;
    var left = tOL + (tW - pW)/2;
    popoverNode.style.top = top+'px';
    popoverNode.style.left = left+'px';
  },

  _windowClick : function(e) {
    var popoverNode = React.findDOMNode(this.refs.popover);
    var isChild = isChildOf(e.target, popoverNode);
    if (isChild && !this.props.autoclose) return;

    this.setState({
      isVisible : false
    }, function() {
      this._removeEvents();
    });

  },

  _addEvents : function() {
    $(document).on('click', this._windowClickEvent);
  },
  _removeEvents : function() {
    $(document).off('click', this._windowClickEvent);
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
  },

  componentDidMount: function() {
    this._onClickEvent = this._onClick.bind(this);
    var a = this.refs.link.getDOMNode();
    if (a && a.childNodes[0]) {
      a.childNodes[0].addEventListener('click', this._onClickEvent);
    }
  },

  componentWillUnmount: function() {
    var a = this.refs.link.getDOMNode();
    if (a && a.childNodes[0]) {
      a.childNodes[0].removeEventListener('click', this._onClickEvent);
    }
  },

  render : function() {
    var first = this.props.children[0];
    var second = this.props.children[1];
    return (<span className={ this.props.className }>
      <span ref="link">{ first }</span>
      <PopoverFloater ref="popover" autoclose={this.props.autoclose}>
        { second }
      </PopoverFloater>
    </span>);
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
