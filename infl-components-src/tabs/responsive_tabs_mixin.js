const ReactDOM = require('react-dom');
const $ = require('jquery');

const ResponsiveTabsMixin = {
  componentDidMount: function() {
    this._adjustTabsForScreenSize();
    this._addWindowResizeEvent();
  },

  componentDidUpdate: function() {
    this._adjustTabsForScreenSize();
  },

  _addWindowResizeEvent: function() {
    $(window).on('resize', this._adjustTabsForScreenSize);
  },

  _adjustTabsForScreenSize: function() {
    const tabs = ReactDOM.findDOMNode(this.refs.tabs);
    const visibleTabs = this._visibleTabs(tabs.children);
    if (!tabs.firstChild) return;

    const tabsMinWidthWidth = visibleTabs.length * tabs.firstChild.clientWidth;

    if (this.props.showAllTabs) {
      this._toggleShowAllStyling(tabs, tabsMinWidthWidth);
    } else {
      this._toggleTabVisibility(tabs, tabsMinWidthWidth, visibleTabs);
    }

    this._adjustLastTabStyling();
  },

  _visibleTabs: function(tabs) {
    const visibleTabs = [];
    for (let i = 0; i < tabs.length; i++) {
      if (!$(tabs[i]).hasClass('hide')) {
        visibleTabs.push(tabs[i]);
      }
    }
    return visibleTabs;
  },

  _toggleShowAllStyling: function(tabs, tabsMinWidthWidth) {
    if (tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
      $(tabs.parentNode).addClass('show-all');
    } else {
      $(tabs.parentNode).removeClass('show-all');
    }
  },

  _toggleTabVisibility: function(tabs, tabsMinWidthWidth, visibleTabs) {
    if (tabs.parentNode.clientWidth <= tabsMinWidthWidth) {
      this._hideTab(visibleTabs);
    } else if (tabs.firstChild && tabs.parentNode.clientWidth > (tabsMinWidthWidth + tabs.firstChild.clientWidth)) {
      this._showTab(tabs.children, visibleTabs);
    }
  },

  _hideTab: function(visibleTabs) {
    $(visibleTabs[this._tabToHideIndex(visibleTabs)]).addClass('hide');
    this._openVisibleTab(visibleTabs);
    this._adjustTabsForScreenSize();
  },

  _openVisibleTab: function(visibleTabs) {
    if (this._tabToHideIndex(visibleTabs) === this.state.openTabIndex) {
      this.setState({ openTabIndex: 0 });
    }
  },

  _showTab: function(tabs, visibleTabs) {
    if (tabs[this._tabToShowIndex(visibleTabs)]) {
      $(tabs[this._tabToShowIndex(visibleTabs)]).removeClass('hide');
      this._adjustTabsForScreenSize();
    }
  },

  _tabToHideIndex: function(visibleTabs) {
    return visibleTabs.length - 1;
  },

  _tabToShowIndex: function(visibleTabs) {
    return visibleTabs.length;
  },

  _adjustLastTabStyling: function() {
    this._removeLastTabStyling();
    this._addLastTabStyling();
  },

  _removeLastTabStyling: function() {
    if (document.querySelector('.last-tab')) {
      $('.last-tab').removeClass('last-tab');
    }
  },

  _addLastTabStyling: function() {
    const tabMenu = ReactDOM.findDOMNode(this.refs.tabs);
    const tabs = tabMenu.querySelectorAll('.pt-tab');

    for (let i=0; i < tabs.length; i++) {
      if ($(tabs[i]).hasClass('hide')) {
        $(tabs[i - 1]).addClass('last-tab');
        break;
      }
    }
  }
};

module.exports = ResponsiveTabsMixin;
