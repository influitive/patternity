var React         = require('react');

var ChallengeCard = require("./challenge_card.jsx");

var ChallengeTemplateCard = React.createClass({
  displayName: 'ChallengeTemplateCard',
  propTypes : {
    id : React.PropTypes.string,
    animateEntrance : React.PropTypes.bool
  },

  getDefaultProps : function(){
    return {
      id : "",
      animateEntrance : false
    };
  },

  render: function () {
    return (
      <div ref="challengeTempalteCard" className="pt-challenge-template-card">
        <ChallengeCard id={this.props.id} animateEntrance={this.props.animateEntrance}>
          {this.props.children}
        </ChallengeCard>
      </div>
    );
  }
});

module.exports = ChallengeTemplateCard;
