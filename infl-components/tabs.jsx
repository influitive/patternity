var React = require('react');

var ResponsiveTabsMixin = require('./tabs/responsive_tabs_mixin.jsx');
var TabsMenu = require('./tabs/tabs_menu.jsx');
var TabsDropdown = require('./tabs/tabs_dropdown.jsx');
var TabSections = require('./tabs/tab_sections.jsx');

var Tabs = React.createClass({
  mixins: [ResponsiveTabsMixin],
  getDefaultProps : function(){
    return {
      id : "",
      key : "tabs-" + Math.random(),
      openTabIndex : null,
      onChange : function(){},
      showAllTabs : false
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    key : React.PropTypes.string,
    openTabIndex : React.PropTypes.number,
    onChange : React.PropTypes.func,
    showAllTabs : React.PropTypes.bool
  },
  getInitialState : function(){
    return {
      openTabIndex : this._validTabIndex(this.props.openTabIndex) ? this.props.openTabIndex : 0
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if(this._validTabIndex(nextProps.openTabIndex)){
      this.setState({
        openTabIndex: nextProps.openTabIndex
      });
    }
  },
  render: function() {
    return (
      <nav className="pt-tabs" key={this.props.key}>
        <TabsMenu ref="tabs" tabs={this.props.children} openTabIndex={this.state.openTabIndex} onChange={this._onTabChange} />
        <TabsDropdown tabs={this.props.children} openTabIndex={this.state.openTabIndex} onChange={this._onTabChange} />
        <TabSections tabs={this.props.children} openTabIndex={this.state.openTabIndex} />
      </nav>
    );
  },
  _validTabIndex : function(openTabIndex){
    if(isNaN(parseInt(openTabIndex))){
      return false;
    }

    if(openTabIndex > this.props.children.length){
      return false;
    }

    return true;
  },
  _onTabChange : function(index){
    this.setState({
      openTabIndex : index
    });
    this.props.onChange(index);
  }
});

Tabs.Tab = React.createClass({
  getDefaultProps : function(){
    return {
      title : "",
      id : ""
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    id : React.PropTypes.string
  },
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

module.exports = Tabs;
