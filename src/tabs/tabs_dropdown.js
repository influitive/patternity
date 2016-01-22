const React = require('react');

const ReactDOM = require('react-dom');

const BuildTabsMixin = require('./build_tabs_mixin');

const TabsDropdown = React.createClass({
  mixins: [BuildTabsMixin],

  getDefaultProps: function() {
    return {
      tabs:         [],
      openTabIndex: null,
      onChange:     function() {}
    };
  },

  propTypes: {
    title:        React.PropTypes.array,
    openTabIndex: React.PropTypes.number,
    onChange:     React.PropTypes.func
  },

  render: function() {
    return <div className="pt-drop-down-tabs">
      <div ref="selectTabTitle" className="selected-tab-title" onClick={this._toggleTabDropdown}>
        {this._determineTabDropdownTitle()}
      </div>
      <ul ref="tabsDropdown">
        {this._buildTabs(this._handleOnClick)}
      </ul>
    </div>;
  },

  _determineTabDropdownTitle: function() {
    const that = this; //TODO (Shane Keulen): wtf?
    return React.Children.map(this.props.tabs, function(tab, index) {
      if (index === that.props.openTabIndex) {
        return tab.props.title;
      }
    });
  },

  _handleOnClick: function(event) {
    this.props.onChange(event);
    this._toggleTabDropdown();
  },

  _toggleTabDropdown: function() {
    if (ReactDOM.findDOMNode(this.refs.selectTabTitle).classList.contains('show-dropdown')) {
      ReactDOM.findDOMNode(this.refs.selectTabTitle).classList.remove('show-dropdown');
    } else {
      ReactDOM.findDOMNode(this.refs.selectTabTitle).classList.add('show-dropdown');
    }
  }
});

module.exports = TabsDropdown;
