const React = require('react');
const Icon = require('../../icon');

class Points extends React.Component {
  static defaultProps = {
    points: 0,
  }

  static propTypes = {
    points: React.PropTypes.number,
  }

  render() {
    return (
      <span className="pt-card-points">
        <Icon icon="coins-old" />
        {this.props.points}
      </span>
    );
  }
}

export default Points;
