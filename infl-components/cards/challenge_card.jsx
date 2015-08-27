var React         = require('react');
var $             = require('jquery');

var Card          = require('./card.jsx');
var animate       = require("../utilities/animate.js");
var CardDetails   = require('./components/card_details.jsx');
var CardImage     = require('./components/card_image.jsx');

var ChallengeCard = React.createClass({
  PropTypes : {
    id : React.PropTypes.string,
    animateEntrance : React.PropTypes.bool
  },

  getDefaultProps : function(){
    return {
      id : "",
      animateEntrance : false
    };
  },

  componentDidMount : function(){
    this._animateCardEntrance();
  },

  render: function () {
    return (
      <div ref="challengeCard" className="pt-challenge-card hide" id={this.props.id}>
        <Card ref="card">
          {this.props.children}
        </Card>
      </div>
    );
  },

  _animateCardEntrance : function(){
    var challengeCard = React.findDOMNode(this.refs.challengeCard)

    if(this.props.animateEntrance){
      this._runAnimation(challengeCard);
    } else {
      $(challengeCard).removeClass("hide");
      // this._adjustDescriptionHeight();
    }
  },

  _runAnimation : function(challengeCard){
    $(challengeCard).removeClass("hide");
    // this._adjustDescriptionHeight();
    this._addAnimationDelay();
    animate.run(challengeCard, "fade-in-up", undefined, this._removeAnimationDelay);
  },

  _addAnimationDelay : function(){
    var challengeCard = React.findDOMNode(this.refs.challengeCard);
    challengeCard.style['-webkit-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['-moz-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['-o-animation-delay'] = this._determineEntranceTime() + 's';
    challengeCard.style['animation-delay'] = this._determineEntranceTime() + 's';
  },

  _determineEntranceTime : function(){
    return Math.random(0, 1.5).toFixed(2);
  },

  _removeAnimationDelay : function(){
    var challengeCard = React.findDOMNode(this.refs.challengeCard);
    challengeCard.style['-webkit-animation-delay'] = "";
    challengeCard.style['-moz-animation-delay'] = "";
    challengeCard.style['-o-animation-delay'] = "";
    challengeCard.style['animation-delay'] = "";
  }
});

ChallengeCard.Details = CardDetails;
ChallengeCard.Actions = Card.Actions;
ChallengeCard.Image = CardImage;

module.exports = ChallengeCard;

// created_at: "2015-03-02T14:46:34.913-05:00"
// description: ""
// description_text_only: ""
// featured: false
// headline: "Take this 2-minute challenge to learn how you can benefit from app AdvocateHub."
// id: 1
// image: null
// multiple_completion: false
// name: "Introductory Challenge for New Advocates"
// points: 5
// stage_count: 4
// stage_types:[
//   0: "intro_questions"
//   1: "intro_questions"
//   2: "intro_questions"
//   3: "intro_questions"
// ]
// timeout_message: null
// type: "Survey"
// unique_participant_count: 0
