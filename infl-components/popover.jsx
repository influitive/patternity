var React = require('react');
window.React = React;

var $ = require('jquery');

function cancelEvent(e) {
  e.stopImmediatePropagation();
  e.stopPropagation();
  e.preventDefault();
  e.cancelBubble = true;
  return false;
}

var PopoverFloater = React.createClass({

  propTypes : {
    children: React.PropTypes.object,
    targetElement: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onHide: React.PropTypes.func,
    autoclose: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      edgeRestricted : false
    };
  },

  componentDidUpdate : function() {
    this.resetPosition();
  },

  componentDidMount : function() {
    this.resetPosition();
    this._bindWindowEvents();
  },

  componentWillUnmount : function() {
    this._unbindWindowEvents();
  },

  _bindWindowEvents: function() {
    if (this.props.onHide) {
      var me = this;
      this._hidePopoverEvent = function(e) {
        me.props.onHide(e); // communicates up to the parent Popover to hide
      };
      $(document).on('click', this._hidePopoverEvent);
    }
  },

  _unbindWindowEvents: function() {
    if (this.props.onHide) {
      $(document).off('click', this._hidePopoverEvent);
    }
  },

  render: function() {
    // this line makes it so the contents of the popover are not rendered until they are needed, and not destroyed when hidden
    var children = this.props.children;
    return (
      <div ref="popover" className={this._classes()} onClick={this._menuItemClicked}>
        <div className="arrow-top"/>
        <div className="arrow-top-inner"/>
        { children }
      </div>
    );
  },

  _menuItemClicked: function(e) {
    // if autoclose is turned off, clicking inside the popover cancels the event bubbling before reaching the document which stops the hidePopover event
    if (!this.props.autoclose) {
      var realEvent = e.nativeEvent? e.nativeEvent : e;
      return cancelEvent(realEvent);
    }
  },

  _classes: function() {
    var c = 'pt-popover is-visible';
    return c;
  },

  resetPosition: function() {
    var targetElementNode = React.findDOMNode(this.props.targetElement);
    var targetElement = $(targetElementNode);
    var popoverNode = React.findDOMNode(this.refs.popover);

    var popover = $(popoverNode);
    var tW = targetElement.width();
    var tH = targetElement.height();
    var tp = targetElement.position();
    var tOT = tp.top;
    var tOL = tp.left;
    var pW = popover.width();
    //var pH = popover.height();

    // position the popover centered below the target element
    var top = tOT + tH + 10;
    if (top<0) top = 0;
    var left = tOL + (tW - pW)/2;

    // restrict right edge to the width of the screen
    if (left + pW + 10 > window.innerWidth) {
      left = window.innerWidth - pW - 10;
      $(popoverNode).addClass('edge-restricted');
      // todo: in this scenario the arrow pointing to the target element would need to be manually positioned instead of being in the middle
    }

    // if the parent element is absolutely positioned need to account for that
    var isAbsolute = popoverNode.parentNode.className.indexOf('is-absolute')>-1;

    if (!isAbsolute && left < 0) {
      left = 5;
      $(popoverNode).addClass('edge-restricted');
    }

    popoverNode.style.top = top+'px';
    popoverNode.style.left = left+'px';

    var offset = popover.offset();

    if (isAbsolute && offset.left + pW + 10 > window.innerWidth) {
      var pO = $(popoverNode.parentNode).offset();
      var absLeft = window.innerWidth - pW - 10;
      var relLeft = absLeft - pO.left;
      popoverNode.style.left = relLeft+'px';
      $(popoverNode).addClass('edge-restricted');
    }

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
      var contents = this.props.children[1];
      return (
        <PopoverFloater ref="popover" autoclose={this.props.autoclose} targetElement={this.refs.link} onHide={this._hidePopover}>
          { contents }
        </PopoverFloater>
      );
    }
  },

  resetPosition: function() {
    this.refs.popover.resetPosition();
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
    this._onClose();

    this.setState({
      isVisible: false
    });
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
