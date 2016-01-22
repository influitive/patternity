const React = require('react');

const BuildTabsMixin = {
  _buildTabs: function(onClick) {
    const that = this;
    return React.Children.map(this.props.tabs, function(tab, index) {
      return <InternalTab title={tab.props.title} id={tab.props.id}
        onClick={onClick} key={index} index={index}
        tabIsOpen={that._isTabOpen(index)} />;
    });
  },
  _isTabOpen: function(index) {
    return (this.props.openTabIndex === index);
  }
};

class InternalTab extends React.Component {
  static propTypes = {
    title:     React.PropTypes.string,
    tabIsOpen: React.PropTypes.bool,
    index:     React.PropTypes.number,
    id:        React.PropTypes.string,
    onClick:   React.PropTypes.func
  }

  static defaultProps = {
    title:     '',
    tabIsOpen: false,
    index:     -1,
    id:        '',
    onClick:   function() {}
  }

  state = {
    tabIsOpen: this.props.tabIsOpen
  }

  componentWillReceiveProps(newProps) {
    this.setState({ tabIsOpen: newProps.tabIsOpen });
  }

  render() {
    return <li className={'pt-tab ' + this._isTabOpen()} id={this.props.id}>
      <a href="javascript:void(0);" onClick={this._handleClick}>
        <span>{this.props.title}</span>
      </a>
    </li>;
  }

  _isTabOpen() {
    return this.state.tabIsOpen ? 'tab-open' : '';
  }

  _handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.index);
  }
}

export default BuildTabsMixin;
