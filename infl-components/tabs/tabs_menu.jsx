var React = require('react');

var BuildTabsMixin = require('./build_tabs_mixin.jsx');

var TabsMenu = React.createClass({
  mixins: [BuildTabsMixin],
  getDefaultProps : function(){
    return {
      tabs : [],
      openTabIndex: null,
      onChange : function(){}
    };
  },
  propTypes : {
    title : React.PropTypes.array,
    openTabIndex : React.PropTypes.number,
    onChange : React.PropTypes.func
  },
  render: function() {
    return (
      <ul className="pt-tabs-menu" key={"pt-tabs-menu-" + Math.random()}>
        {this._buildTabs(this._handleOnClick)}
      </ul>
    );
  },
  _handleOnClick : function(event){
    this.props.onChange(event);
  }
});

module.exports = TabsMenu;
