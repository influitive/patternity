const React = require('react');

const Icon = require('../icon');
const Tooltip = require('../tooltip');

class HelpTooltip extends React.Component {
  static displayName = 'HelpTooltip'

  static propTypes = {
    title: React.PropTypes.string,
    position: React.PropTypes.string
  }

  static defaultProps = {
    title: '',
    position : 'top'
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
