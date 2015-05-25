var React = require('react');

var BuildTabsMixin = require('./build_tabs_mixin.js');

var TabSections = React.createClass({
  mixins: [BuildTabsMixin],
  getDefaultProps : function(){
    return {
      tabs : [],
      openTabIndex: null
    };
  },
  propTypes : {
    title : React.PropTypes.array,
    openTabIndex : React.PropTypes.number
  },
  render: function() {
    return (
      <section className="pt-tabs-content-sections">
        {this._buildTabContentSections()}
      </section>
    );
  },
  _buildTabContentSections : function(){
    var that = this;
    return React.Children.map(this.props.tabs, function(tab, index){
      return (
        <InternalTabContent key={index} tabContentIsVisible={that._isTabOpen(index)}>
          {tab.props.children}
        </InternalTabContent>
      );
    });
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

module.exports = TabSections;
