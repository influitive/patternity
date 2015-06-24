var React = require('react');
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
    var tabs = React.findDOMNode(this.refs.tabs);
    var visibleTabs = this._visibleTabs(tabs.children);
    if (!tabs.firstChild) return;
    var tabsMinWidthWidth = visibleTabs.length * tabs.firstChild.clientWidth;

    if(this.props.showAllTabs){
      this._toggleShowAllStyling(tabs, tabsMinWidthWidth);
    } else {
      this._toggleTabVisibility(tabs, tabsMinWidthWidth, visibleTabs);
    }

    this._adjustLastTabStyling();
  },
  _visibleTabs : function(tabs){
    var visibleTabs = [];
    for(var i = 0; i < tabs.length; i++){
      if(!$(tabs[i]).hasClass("hide")){
        visibleTabs.push(tabs[i]);
      }
    }
    return visibleTabs;
  },
  _toggleShowAllStyling : function(tabs, tabsMinWidthWidth){
    if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
        $(tabs.parentNode).addClass("show-all");
      } else {
        $(tabs.parentNode).removeClass("show-all");
      }
  },
  _toggleTabVisibility : function(tabs, tabsMinWidthWidth, visibleTabs){
    if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
      this._hideTab(visibleTabs);
    } else if(tabs.firstChild && tabs.parentNode.clientWidth > (tabsMinWidthWidth + tabs.firstChild.clientWidth)) {
      this._showTab(tabs.children, visibleTabs);
    }
  },
  _hideTab : function(visibleTabs){
    $(visibleTabs[this._tabToHideIndex(visibleTabs)]).addClass("hide");
    this._openVisibleTab(visibleTabs);
    this._adjustTabsForScreenSize();
  },
  _openVisibleTab : function(visibleTabs){
    if(this._tabToHideIndex(visibleTabs) === this.state.openTabIndex){
      this.setState({
        openTabIndex : 0
      });
    }
  },
  _showTab : function(tabs, visibleTabs){
    if(tabs[this._tabToShowIndex(visibleTabs)]){
      $(tabs[this._tabToShowIndex(visibleTabs)]).removeClass("hide");
      this._adjustTabsForScreenSize();
    }
  },
  _tabToHideIndex : function(visibleTabs){
    return visibleTabs.length - 1;
  },
  _tabToShowIndex : function(visibleTabs){
    return visibleTabs.length;
  },
  _adjustLastTabStyling : function(){
    this._removeLastTabStyling();
    this._addLastTabStyling();
  },
  _removeLastTabStyling : function(){
    if(document.querySelector(".last-tab")){
      $(".last-tab").removeClass("last-tab");
      // document.querySelector(".last-tab").classList.remove("last-tab");
    }
  },
  _addLastTabStyling : function(){
    var tabMenu = React.findDOMNode(this.refs.tabs);
    var tabs = tabMenu.querySelectorAll(".pt-tab");

    for(var i=0; i < tabs.length; i++){
      if($(tabs[i]).hasClass("hide")) {
        $(tabs[i - 1]).addClass("last-tab");
        break;
      }
    }
  }
};

module.exports = ResponsiveTabsMixin;



// var React = require('react');
// var $ = require('jquery');

// var ResponsiveTabsMixin = {
//   componentDidMount : function(){
//     this._adjustTabsForScreenSize();
//     this._addWindowResizeEvent();
//   },
//   componentDidUpdate : function(){
//     this._adjustTabsForScreenSize();
//   },
//   _addWindowResizeEvent : function(){
//     $(window).resize(this._adjustTabsForScreenSize);
//   },
//   _adjustTabsForScreenSize : function(){
//     var tabs = React.findDOMNode(this.refs.tabs);
//     var visibleTabs = this._visibleTabs(tabs.children);
//     var tabsMinWidthWidth = visibleTabs.length * tabs.firstChild.clientWidth;

//     if(this.props.showAllTabs){
//       this._toggleShowAllStyling(tabs, tabsMinWidthWidth);
//     } else {
//       this._toggleTabVisibility(tabs, tabsMinWidthWidth, visibleTabs);
//     }

//     this._adjustLastTabStyling();
//   },
//   _visibleTabs : function(tabs){
//     var visibleTabs = [];
//     for(var i = 0; i < tabs.length; i++){
//       if(!tabs[i].classList.contains("hide")){
//         visibleTabs.push(tabs[i]);
//       }
//     }
//     return visibleTabs;
//   },
//   _toggleShowAllStyling : function(tabs, tabsMinWidthWidth){
//     if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
//         tabs.parentNode.classList.add("show-all");
//       } else {
//         tabs.parentNode.classList.remove("show-all");
//       }
//   },
//   _toggleTabVisibility : function(tabs, tabsMinWidthWidth, visibleTabs){
//     if(tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
//       this._hideTab(visibleTabs);
//     } else if(tabs.parentNode.clientWidth > (tabsMinWidthWidth + tabs.firstChild.clientWidth)) {
//       this._showTab(tabs.children, visibleTabs);
//     }
//   },
//   _hideTab : function(visibleTabs){
//     visibleTabs[this._tabToHideIndex(visibleTabs)].classList.add("hide");
//     this._openVisibleTab(visibleTabs);
//     this._adjustTabsForScreenSize();
//   },
//   _openVisibleTab : function(visibleTabs){
//     if(this._tabToHideIndex(visibleTabs) === this.state.openTabIndex){
//       this.setState({
//         openTabIndex : 0
//       });
//     }
//   },
//   _showTab : function(tabs, visibleTabs){
//     if(tabs[this._tabToShowIndex(visibleTabs)]){
//       tabs[this._tabToShowIndex(visibleTabs)].classList.remove("hide");
//       this._adjustTabsForScreenSize();
//     }
//   },
//   _tabToHideIndex : function(visibleTabs){
//     return visibleTabs.length - 1;
//   },
//   _tabToShowIndex : function(visibleTabs){
//     return visibleTabs.length;
//   },
//   _adjustLastTabStyling : function(){
//     this._removeLastTabStyling();
//     this._addLastTabStyling();
//   },
//   _removeLastTabStyling : function(){
//     if(document.querySelector(".last-tab")){
//       document.querySelector(".last-tab").classList.remove("last-tab");
//     }
//   },
//   _addLastTabStyling : function(){
//     var tabMenu = React.findDOMNode(this.refs.tabs);
//     var tabs = tabMenu.querySelectorAll(".pt-tab");

//     for(var i=0; i < tabs.length; i++){
//       if(tabs[i].classList.contains("hide")) {
//         tabs[i - 1].classList.add("last-tab");
//         break;
//       }
//     }
//   }
// };

// module.exports = ResponsiveTabsMixin;
