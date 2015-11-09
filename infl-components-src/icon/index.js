const React = require('react');
const classNames = require('classnames');

class Icon extends React.Component {
  static displayName = 'Icon'

  static propTypes = {
    icon:      React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  render() {
    return (
      <span ref="icon" className={this._getClassNames()} />
    );
  }

  _getClassNames() {
    const influitiveIconName = 'ic-' + this.props.icon;
    let classes = classNames('ic', influitiveIconName);
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return classes;
  }
}

export default Icon;
