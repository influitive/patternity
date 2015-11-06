var React = require('react');
var classNames = require('classnames');

class Icon extends React.Component {
  static displayName = 'Icon'

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  render() {
    return (
      <span ref="icon" className={this._getClassNames()} />
    );
  }

  _getClassNames() {
    var influitiveIconName = 'ic-' + this.props.icon;
    var classes = classNames('ic', influitiveIconName);
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return classes;
  }
}

export default Icon;
