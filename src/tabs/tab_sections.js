const React = require('react');

const BuildTabsMixin = require('./build_tabs_mixin');

const TabSections = React.createClass({
  mixins: [BuildTabsMixin],

  getDefaultProps: function() {
    return {
      tabs:         [],
      openTabIndex: null
    };
  },

  propTypes: {
    title:        React.PropTypes.array,
    openTabIndex: React.PropTypes.number
  },

  render: function() {
    return <section className="pt-tabs-content-sections">
      {this._buildTabContentSections()}
    </section>;
  },

  _buildTabContentSections: function() {
    const that = this; // TODO (Shane Keulen): investigate
    return React.Children.map(this.props.tabs, function(tab, index) {
      return <InternalTabContent key={index} tabContentIsVisible={that._isTabOpen(index)}>
        {tab.props.children}
      </InternalTabContent>;
    });
  }
});

class InternalTabContent extends React.Component {
  static propTypes = {
    tabContentIsVisible: React.PropTypes.bool
  }

  static defaultProps = {
    tabContentIsVisible: false
  }

  render() {
    return <div className={'pt-tab-content ' + this._showTabContent()}>
      {this.props.children}
    </div>;
  }

  _showTabContent() {
    return this.props.tabContentIsVisible
      ? 'tab-content-visible'
      : '';
  }
}

export default TabSections;
