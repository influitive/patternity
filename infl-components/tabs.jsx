var React = require('react');

var Tabs = React.createClass({
  getDefaultProps : function(){
    return {
      id : "",
      key : "tabs-" + Math.random(),
      openTabIndex : null,
      onChange : function(){}
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    key : React.PropTypes.string,
    openTabIndex : React.PropTypes.number,
    onChange : React.PropTypes.func
  },
  getInitialState : function(){
    return {
      openTabIndex : this._validTabIndex(this.props.openTabIndex) ? this.props.openTabIndex : 0
    };
  },
  componentDidMount : function(){
    this._adjustTabsForSmallerScreens();
    this._addWindowResizeEvent();
  },
  componentDidUpdate : function(){
    this._adjustTabsForSmallerScreens();
    this.refs.tabsWrapper.getDOMNode().scrollLeft = this._tabsScrollLeft;
  },
  componentWillUpdate : function(){
    this._tabsScrollLeft = this.refs.tabsWrapper.getDOMNode().scrollLeft;
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
        <div ref="tabsWrapper" className="pt-tabs-menu-wrapper">
          <ul ref="tabs" className="pt-tabs-menu" key={"pt-tabs-menu-" + Math.random()}>
            {this._buildTabs()}
          </ul>
        </div>
        <section className="pt-tabs-content-sections">
          {this._buildTabContentSections()}
        </section>
      </nav>
    );
  },
  _tabsScrollLeft : 0,
  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustTabsForSmallerScreens);
  },
  _adjustTabsForSmallerScreens : function(){
    var tabs = this.refs.tabs.getDOMNode();
    var tabsMinWidthWidth = tabs.children.length * tabs.firstChild.clientWidth;

    if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
      tabs.style.width = tabsMinWidthWidth + "px";
    } else {
      tabs.style.width = "100%";
    }
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
