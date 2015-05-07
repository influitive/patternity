var React = require('react');

var Popover = React.createClass({

  getInitialState: function() {
    return {
      isVisible : false
    };
  },

  componentWillUnmount: function() {
    this._removeEvents();
    this.hide();
  },

  render: function() {
    var classes = 'infl-popover';
    if (this.state.isVisible) classes += ' is-visible';
    return (
      <div ref="popover" className={classes}>
        <div className="arrow-top"/>
        <div className="arrow-top-inner"/>
        { this.props.children }
      </div>
      );
  },

  toggle: function(targetElement) {
    if (this.state.isVisible) this.hide();
    else this.show(targetElement);
  },

  hide: function() {
    this.setState({
        isVisible: false
      }, function () {
        this._removeEvents();
    });
  },

  show: function(targetElement) {
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
    popover.css({top:top, left:left});

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

module.exports = Popover;
