var React = require('react');

var Tabs = React.createClass({
  getDefaultProps : function(){
    return {
      id : "",
      key : "tabs-" + Math.random(),
      openTabIndex : 0
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    key : React.PropTypes.string,
    openTabIndex : React.PropTypes.number
  },
  getInitialState : function(){
    return {
      openTabIndex : this.props.openTabIndex
    };
  },
  render: function() {
    return (
      <nav className="pt-tabs">
        <ul className="pt-tabs-menu" key={"pt-tabs-menu-" + Math.random()}>
          {this._buildTabs()}
        </ul>
        <section className="pt-tabs-content-sections">
          {this._buildTabContentSections()}
        </section>
      </nav>
    );
  },
  _buildTabs : function(){
    var that = this;
    return React.Children.map(this.props.children, function(tab, index){
      return (
        <InternalTab title={tab.props.title} onClick={that._onTabChange} key={index} index={index} tabIsOpen={that._isTabOpen(index)} />
      );
    });
  },
  _onTabChange : function(index){
    this.setState({
      openTabIndex : index
    });
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
      title : ""
    };
  },
  propTypes : {
    title : React.PropTypes.string
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
      onClick : function(){}
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    tabIsOpen : React.PropTypes.bool,
    index : React.PropTypes.number,
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
      <li className={"pt-tab " + this._isTabOpen()}>
        <a href="#" onClick={this._handleClick}>
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
