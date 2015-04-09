var React = require('react');
var classNames = require('classnames');

var Icon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span ref="icon" className={this.getClassNames()} />
    );
  },

  getClassNames: function() {
    var influitiveIconName = 'ic-' + this.props.icon;
    var classes = classNames('ic', influitiveIconName);
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return classes;
  }
});

module.exports = Icon;
