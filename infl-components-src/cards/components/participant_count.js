const React = require('react');
const Icon = require('../../icon');

class ParticipantCount extends React.Component {
  static defaultProps = {
    participantCount: 0,
  }

  static propTypes = {
    participantCount: React.PropTypes.number,
  }

  render() {
    return <span className="pt-challenge-participant-count">
      <Icon icon="user" />
      <span className="count">{this.props.participantCount}</span>
    </span>;
  }
}

export default ParticipantCount;
