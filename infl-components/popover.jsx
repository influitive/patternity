var React = require('react');

var PopoverFloater = React.createClass({

  propTypes : {
    children: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      isVisible : false
    };
  },

  componentWillUnmount: function() {
    this._removeEvents();
    this._hide();
  },

  render: function() {
    return (
      <div ref="popover" className={this._classes()}>
        <div className="arrow-top"/>
        <div className="arrow-top-inner"/>
        { this.props.children }
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

    this.setState({
      isVisible : true
    }, function() {
      var me = this;
      setTimeout(function() {
        me._addEvents();
      },50);
    });
  },

  _windowClick : function(e) {
    this.setState({
      isVisible : false
    }, function() {
      this._removeEvents();
    });

  },

  _addEvents : function() {
    $(window).on('click', this._windowClick);
  },
  _removeEvents : function() {
    $(window).off('click', this._windowClick);
  }

});

PopoverFloater.clickEvent = function(e) {
  var elm = e.target;
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
  render : function() {
    var first = this.props.children[0];
    first.props['data-popover'] = 'popover';
    first.props.onClick = PopoverFloater.clickEvent.bind(this);

    var second = this.props.children[1];

    return (<span className={ this.props.className }>
      { first }
      <PopoverFloater ref="popover">
        { second }
      </PopoverFloater>
    </span>);
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
