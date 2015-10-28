var React         = require('react');
var $             = require('jquery');

var Card          = require('./card.jsx');
var animate       = require("../utilities/animate.js");
var CardDetails   = require('./components/card_details.jsx');
var CardImage     = require('./components/card_image.jsx');
var ellipsisText  = require('./components/ellipsis_text.js');

var ChallengeCard = React.createClass({
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

  componentDidMount : function(){
    this._addWindowResizeEvent();
    this._animateCardEntrance();
  },

  componentDidUpdate : function(){
    this._adjustDescriptionHeight();
  },

  componentWillUnmount: function(){
    this._removeWindowResizeEvent();
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
      this._adjustDescriptionHeight();
    }
  },

  _runAnimation : function(challengeCard){
    $(challengeCard).removeClass("hide");
    this._adjustDescriptionHeight();
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
  },

  _adjustDescriptionHeight : function(){
    var card = React.findDOMNode(this.refs.card);
    var description = $(card).find(".description")[0];

    if(description) {
      var cardHeight = $(card).outerHeight(true);
      var imageHeight = $(card).find(".pt-challenge-image ").outerHeight(true);
      var actionsHeight = $(card).find(".pt-card-actions").outerHeight(true);
      var titleHeight = $(card).find(".headline").outerHeight(true);
      var typeHeight = $(card).find(".pt-challenge-metadata").outerHeight(true);

      description.style.height = (cardHeight - actionsHeight - titleHeight - typeHeight - imageHeight) + "px";

      this._ellipsisDescription(description);
    }
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustDescriptionHeight);
  },

  _ellipsisDescription : function(description){
    var descriptionMaxHeight = parseInt(description.style.height);
    ellipsisText.run(description, descriptionMaxHeight);
  },

  _removeWindowResizeEvent: function(){
    $(window).off("resize", this._adjustDescriptionHeight);
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
