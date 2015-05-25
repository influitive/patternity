var $ = require('jquery');

var ResponsiveTabsMixin = {
  componentDidMount : function(){
    this._adjustTabsForScreenSize();
    this._addWindowResizeEvent();
  },
  componentDidUpdate : function(){
    this._adjustTabsForScreenSize();
  },
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
};

module.exports = ResponsiveTabsMixin;
