var React = require('react');

var BuildTabsMixin = require('./build_tabs_mixin.jsx');

var TabsDropdown = React.createClass({
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
      <div className="pt-drop-down-tabs">
        <div ref="selectTabTitle" className="selected-tab-title" onClick={this._toggleTabDropdown}>
          {this._determineTabDropdownTitle()}
        </div>
        <ul ref="tabsDropdown">
          {this._buildTabs(this._handleOnClick)}
        </ul>
      </div>
    );
  },
  _determineTabDropdownTitle : function(){
    var that = this;
    return React.Children.map(this.props.tabs, function(tab, index){
      if(index === that.props.openTabIndex){
        return tab.props.title;
      }
    });
  },
  _handleOnClick : function(event){
    this.props.onChange(event);
    this._toggleTabDropdown();
  },
  _toggleTabDropdown : function(event){
    if(React.findDOMNode(this.refs.selectTabTitle).classList.contains("show-dropdown")) {
      React.findDOMNode(this.refs.selectTabTitle).classList.remove("show-dropdown");
    } else {
      React.findDOMNode(this.refs.selectTabTitle).classList.add("show-dropdown");
    }
  }
});

module.exports = TabsDropdown;
