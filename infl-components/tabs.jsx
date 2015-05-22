var React = require('react');

var Tabs = React.createClass({
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
  componentDidMount : function(){
    this._adjustTabsForScreenSize();
    this._addWindowResizeEvent();
  },
  componentDidUpdate : function(){
    this._adjustTabsForScreenSize();
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
      <nav className="pt-tabs">
        <ul ref="tabs" className="pt-tabs-menu" key={"pt-tabs-menu-" + Math.random()}>
          {this._buildTabs()}
        </ul>

        <div className="pt-drop-down-tabs">
          <div ref="selectTabTitle" className="selected-tab-title" onClick={this._toggleTabDropdown}>
            {this._determineTabDropdownTitle()}
          </div>
          <ul ref="tabsDropdown">
            {this._buildTabs()}
          </ul>
        </div>

        <section className="pt-tabs-content-sections">
          {this._buildTabContentSections()}
        </section>
      </nav>
    );
  },

  _determineTabDropdownTitle : function(){
    var that = this;
    return React.Children.map(this.props.children, function(tab, index){
      if(index === that.state.openTabIndex){
        return tab.props.title;
      }
    });
  },
  _toggleTabDropdown : function(event){
    if(this.refs.selectTabTitle.getDOMNode().classList.contains("show-dropdown")) {
      this.refs.selectTabTitle.getDOMNode().classList.remove("show-dropdown");
    } else {
      this.refs.selectTabTitle.getDOMNode().classList.add("show-dropdown");
    }
  },

/* START - move to it's own class or mixin */
  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustTabsForScreenSize);
  },
  _adjustTabsForScreenSize : function(){
    var tabs = this.refs.tabs.getDOMNode();
    var visibleTabs = this._visibleTabs(tabs.children);
    var tabsMinWidthWidth = visibleTabs.length * tabs.firstChild.clientWidth;

    if(this.props.showAllTabs){
      this._toggleShowAllStyling(tabs, tabsMinWidthWidth);
    } else {
      this._toggleTabVisibility(tabs, tabsMinWidthWidth, visibleTabs);
    }
  },
  _visibleTabs : function(tabs){
    var visibleTabs = [];
    for(var i = 0; i < tabs.length; i++){
      if(!tabs[i].classList.contains("hide")){
        visibleTabs.push(tabs[i]);
      }
    }
    return visibleTabs;
  },
  _toggleShowAllStyling : function(tabs, tabsMinWidthWidth){
    if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
        tabs.parentNode.classList.add("show-all");
      } else {
        tabs.parentNode.classList.remove("show-all");
      }
  },
  _toggleTabVisibility : function(tabs, tabsMinWidthWidth, visibleTabs){
    if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
      this._hideTab(visibleTabs);
    } else if(tabs.parentNode.clientWidth > (tabsMinWidthWidth + tabs.firstChild.clientWidth)) {
      this._showTab(tabs.children, visibleTabs);
    }
  },
  _hideTab : function(visibleTabs){
    visibleTabs[this._tabToHideIndex(visibleTabs)].classList.add("hide");
    this._adjustTabsForScreenSize();
  },
  _showTab : function(tabs, visibleTabs){
    if(tabs[this._tabToShowIndex(visibleTabs)]){
      tabs[this._tabToShowIndex(visibleTabs)].classList.remove("hide");
      this._adjustTabsForScreenSize();
    }
  },
  _tabToHideIndex : function(visibleTabs){
    return visibleTabs.length - 1;
  },
  _tabToShowIndex : function(visibleTabs){
    return visibleTabs.length;
  },
/* END */

  _validTabIndex : function(openTabIndex){
    if(isNaN(parseInt(openTabIndex))){
      return false;
    }

    if(openTabIndex > this.props.children.length){
      return false;
    }

    return true;
  },
  _buildTabs : function(){
    var that = this;
    return React.Children.map(this.props.children, function(tab, index){
      return (
        <InternalTab title={tab.props.title} id={tab.id} onClick={that._onTabChange} key={index} index={index} tabIsOpen={that._isTabOpen(index)} />
      );
    });
  },
  _onTabChange : function(index){
    this.setState({
      openTabIndex : index
    });
    this.props.onChange(index);
    if(this.props.showAllTabs){
      this._toggleTabDropdown();
    }
  },
  _isTabOpen : function(index) {
    return (this.state.openTabIndex === index);
  },
  _buildTabContentSections : function(){
    var that = this;
    return React.Children.map(this.props.children, function(tab, index){
      return (
        <InternalTabContent key={index} tabContentIsVisible={that._isTabOpen(index)}>
          {tab.props.children}
        </InternalTabContent>
      );
    });
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

var InternalTab = React.createClass({
  getDefaultProps : function(){
    return {
      title : "",
      tabIsOpen : false,
      index : -1,
      id : "",
      onClick : function(){}
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    tabIsOpen : React.PropTypes.bool,
    index : React.PropTypes.number,
    id : React.PropTypes.string,
    onClick : React.PropTypes.func
  },
  getInitialState : function(){
    return {
      tabIsOpen : this.props.tabIsOpen
    };
  },
  componentWillReceiveProps: function(newProps){
    this.setState({
      tabIsOpen : newProps.tabIsOpen
    });
  },
  render: function() {
    return (
      <li className={"pt-tab " + this._isTabOpen()} id={this.props.id}>
        <a href="javascript:void(0);" onClick={this._handleClick}>
          <span>{this.props.title}</span>
        </a>
      </li>
    );
  },
  _isTabOpen : function(){
    return this.state.tabIsOpen ? "tab-open" : "";
  },
  _handleClick : function(event){
    event.preventDefault();
    this.props.onClick(this.props.index);
  }
});

var InternalTabContent = React.createClass({
  getDefaultProps : function(){
    return {
      tabContentIsVisible : false,
    };
  },
  propTypes : {
    tabContentIsVisible : React.PropTypes.bool
  },
  render: function() {
    return (
      <div className={"pt-tab-content " + this._showTabContent()}>
        {this.props.children}
      </div>
    );
  },
  _showTabContent : function(){
    return this.props.tabContentIsVisible ? "tab-content-visible" : "";
  }
});

module.exports = Tabs;
