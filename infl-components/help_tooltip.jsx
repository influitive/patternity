var React = require('react');

var Icon = require('./icon.jsx');
var Tooltip = require('./tooltip.jsx');

class HelpTooltip extends React.Component {
  static displayName = 'HelpTooltip'

  static propTypes = {
    title: React.PropTypes.string,
    position: React.PropTypes.string
  }

  static defaultProps = {
    title: '',
    position : "top"
  }
  render() {
    return (
      <Tooltip title={this.props.title} element={<Icon icon="question-circle-o" />} position={this.props.position}>
        {this.props.children}
      </Tooltip>
    );
  }
}

export default HelpTooltip;
