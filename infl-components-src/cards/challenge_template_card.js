const React         = require('react');

const ChallengeCard = require('./challenge_card');

class ChallengeTemplateCard extends React.Component {
  static displayName = 'ChallengeTemplateCard'

  static propTypes = {
    id:              React.PropTypes.string,
    animateEntrance: React.PropTypes.bool
  }
  static defaultProps = {
    id:              '',
    animateEntrance: false
  }

  render() {
    return <div ref="challengeTempalteCard" className="pt-challenge-template-card">
      <ChallengeCard id={this.props.id} animateEntrance={this.props.animateEntrance}>
        {this.props.children}
      </ChallengeCard>
    </div>;
  }
}

export default ChallengeTemplateCard;
