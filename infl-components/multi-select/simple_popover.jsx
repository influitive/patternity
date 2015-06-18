var React = require('react');

var SimplePopover = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool
  },

  getDefaultProps : function(){
    return {
      isOpen : false
    };
  },

  render : function(){
    return (
      <span className={"pt-simple-popover " + this._isPopoverOpen()}>
        {this.props.children}
      </span>
    );
  },

  _isPopoverOpen : function(){
    return this.props.isOpen ? "open" : ""
  }
});

module.exports = SimplePopover;
