var React = require('react');
var classNames = require('classnames');

var Icon = React.createClass({
  displayName: 'Icon',
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  render: function() {
    return (
      <span ref="icon" className={this._getClassNames()} />
    );
  },
  _getClassNames: function() {
    var influitiveIconName = 'ic-' + this.props.icon;
    var classes = classNames('ic', influitiveIconName);
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return classes;
  }
});

module.exports = Icon;
