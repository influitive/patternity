// TODO: This should use the icon component...
// TODO: This has in implicit dependancy on form
const React = require('react');
const HelpTooltip = require('../help_tooltip');


class InputAction extends React.Component {
  static defaultProps = {
    clearable: false,
    help:      null,
    onCleared: function() {},
    value:     ''
  }

  static propTypes = {
    clearable: React.PropTypes.bool,
    help:      React.PropTypes.any,
    onCleared: React.PropTypes.func,
    value:     React.PropTypes.string
  }

  render() {
    if (this.props.help !== null) return <HelpTooltip>{this.props.help}</HelpTooltip>
    if (this.props.clearable) return <span className="clear-input ic ic-close" onClick={this.props.onCleared}></span>;
    return null;
  }
}

module.exports = InputAction;
