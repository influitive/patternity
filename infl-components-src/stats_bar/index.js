const React = require('react');
const classNames = require('classnames');

class StatsBar extends React.Component {
  static defaultProps = {
    statType: 'points',
    children: []
  }

  static propTypes = {
    statType: React.PropTypes.oneOf(['points', 'activity']),
    children: React.PropTypes.array
  }

  render() {
    return (
      <div ref="statsBar" className={'pt-stats-bar ' + this.props.statType}>
        {this.props.children}
      </div>
    );
  }
}

StatsBar.Stat = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      value: ''
    }
  },
  PropTypes: {
    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired
  },
  render: function() {
    return <span ref="stat" className={'pt-stat ' + this._isValueNegative()}>
      <span ref="title" className="pt-stat-title">{this.props.title}:</span>
      <strong ref="value" className="pt-stat-value">{this.props.value}</strong>
    </span>;
  },
  _isValueNegative: function() {
    return parseInt(this.props.value) < 0 ? 'negative' : '';
  }
});

module.exports = StatsBar;
