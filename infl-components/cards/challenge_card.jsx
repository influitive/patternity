var React         = require('react');
var classNames    = require('classnames');
var $             = require('jquery');

var Icon          = require('../icon.jsx');
var Card          = require('./card.jsx');
var animate       = require("../utilities/animate.js");

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

  componentDidUpdate : function(){
    this._adjustDescriptionHeight();
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
    var cardHeight = card.offsetHeight;
    var imageHeight = $(card).find(".pt-challenge-image ").outerHeight(true);
    var actionsHeight = $(card).find(".pt-card-actions").outerHeight(true);
    var titleHeight = $(card).find(".headline").outerHeight(true);
    var typeHeight = $(card).find(".pt-challenge-type").outerHeight(true);
    var description = card.querySelector(".description");

    description.style.height = (cardHeight - actionsHeight - titleHeight - typeHeight - imageHeight) + "px";
  }
});

ChallengeCard.Details = React.createClass({
  PropTypes : {
    type : React.PropTypes.string,
    headline : React.PropTypes.string,
    description : React.PropTypes.string,
    onFilterByType : React.PropTypes.func,
    participantCount : React.PropTypes.number,
    points : React.PropTypes.number,
    onHeadlineClick : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      type : "",
      headline : "",
      description : "",
      onFilterByType : function(){},
      participantCount : 0,
      points : 0,
      onHeadlineClick : function(){}
    };
  },

  componentDidMount : function(){
    this._adjustHeadline();
  },

  componentDidUpdate : function(){
    this._adjustHeadline();
  },

  render : function(){
    return (
      <div className="pt-challenge-details">
        <ChallengeMetaData type={this.props.type} onClick={this.props.onFilterByType} participantCount={this.props.participantCount} points={this.props.points} />
        <h4 className="headline" ref="headline" onClick={this.props.onHeadlineClick}>{this.props.headline}</h4>
        <div ref="description" className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
      </div>
    );
  },

  _adjustHeadline : function(){
    var headline = React.findDOMNode(this.refs.headline);
    var headlineMaxHeight = parseInt($(headline).css("max-height"));

    if(headline.clientHeight === headlineMaxHeight){
      this._ellipsisHeadlineText(headline, headlineMaxHeight);
    }
  },

  _ellipsisHeadlineText : function(headline, headlineMaxHeight){
    this._convertWordsToElements(headline);
    var lastVisibleWordElement = this._findLastVisibleWord(headline, headlineMaxHeight);
    $(lastVisibleWordElement).addClass("last-visible-word");
  },

  _convertWordsToElements : function(headline) {
    if(this._wordsHaveNotAlreadyBeenConverted(headline)){
      $(headline).html('<span>' + $(headline).html().replace(/ /g,'</span> <span>') + '</span>');
    }
  },

  _wordsHaveNotAlreadyBeenConverted : function(headline){
    return headline.children.length === 0;
  },

  _findLastVisibleWord : function(headline, headlineMaxHeight){
    var words = $(headline).find("span");
    var lastVisibleWordElement = null;

    for(var i = 0; i < words.length; i++){
      if($(words[i]).position().top >= headlineMaxHeight){
        lastVisibleWordElement = words[i-1];
        break;
      }
    }

    return lastVisibleWordElement;
  }
});

var ChallengeMetaData = React.createClass({
  PropTypes : {
    type : React.PropTypes.string,
    onClick : React.PropTypes.func,
    participantCount : React.PropTypes.number,
    points : React.PropTypes.number
  },

  getDefaultProps : function(){
    return {
      type : "",
      onClick : function(){},
      participantCount : 0,
      points : 0
    };
  },

  render : function(){
    return (
      <div className="pt-challenge-metadata">
        <span className={"pt-challenge-type " + this._formatChallengeTypeClassName()} onClick={this.props.onClick}>
          {this.props.type.toLowerCase()}
        </span>
        {this.pointsHTML()}
        <span className="pt-challenge-participant-count">
          <Icon icon="user" />
          <span className="count">{this.props.participantCount}</span>
        </span>
      </div>
    );
  },

  _formatChallengeTypeClassName : function(){
    var typeArray = this.props.type.split(' ');
    var typeClassName = "";
    for( var i = 0; i < typeArray.length; i++){
      typeClassName += typeArray[i].toLowerCase() + "-";
    }
    return typeClassName.substring(0, typeClassName.length - 1);
  },

  pointsHTML: function () {
    return this.props.points === 0 ? null : <Points points={this.props.points} />;
  },
});

ChallengeCard.Actions = Card.Actions;

ChallengeCard.Image = React.createClass({
  getDefaultProps : function(){
    return {
      image : null,
      onImageClick : function(){}
    };
  },
  PropTypes : {
    image : React.PropTypes.string,
    onImageClick : React.PropTypes.func
  },
  render : function(){
    return (
      <div className={"pt-challenge-image " + this._doesChallengeHaveAnImage()}  >
        <img src={this.props.image} alt="Challenge Image" onClick={this.props.onImageClick} />
      </div>
    );
  },
  _doesChallengeHaveAnImage : function(){
    return this.props.image ? "" : "no-image";
  }
});

ChallengeCard.Notice = React.createClass({
    getDefaultProps : function(){
    return {
      createdAt : "",
      status : "",
      completedOn : "",
      startedOn : "",
      unlocked : false,
      multipleCompletion : false
    };
  },
  PropTypes : {
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : React.PropTypes.string,
    startedOn : React.PropTypes.string,
    unlocked : React.PropTypes.bool,
    multipleCompletion : React.PropTypes.bool
  },
  render : function(){
    return (
      <div className="pt-card-notice">
        {this._multipuleCompletion()}
        <ChallengeStatus
            createdAt={this.props.createdAt}
            status={this.props.status}
            completedOn={this.props.completedOn}
            startedOn={this.props.startedOn}
            unlocked={this.props.unlocked} />
      </div>
    );
  },

  _multipuleCompletion : function(){
    if(!this.props.multipleCompletion){
      return "";
    }

    return (
      <span className="pt-challenge-card-multiple-stage">
        <Icon icon="multi" />
      </span>
    );
  }
});

var Points = React.createClass({
  getDefaultProps : function(){
    return {
      points : 0,
    };
  },
  PropTypes : {
    points : React.PropTypes.number,
  },
  render : function(){
    return (
      <span className="pt-card-points">
        <Icon icon="coins-old" />
        {this.props.points}
      </span>
    );
  }
});

var ChallengeStatus = React.createClass({
  getDefaultProps : function(){
    return {
      createdAt : "",
      status : "",
      completedOn : "",
      startedOn : "",
      unlocked : false
    };
  },
  PropTypes : {
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : React.PropTypes.string,
    startedOn : React.PropTypes.string,
    unlocked : React.PropTypes.bool
  },
  render : function(){
    return (
      <span className="pt-challenge-status">
        {this._determineStatusDetails()}
      </span>
    );
  },
  _determineStatusDetails : function(){
    // TODO if date was always stored in the same place, this could be refactored

    if (this.props.status === "completed") {
      return this._showStatus("Completed", this.props.completedOn);
    } else if(this.props.status === "started") {
      return this._showStatus('Started', this.props.startedOn);
    } else if(this.props.status === "expiring") {
      return this._showStatus('Expiring Soon');
    } else if(this.props.status === "limited_expiring") {
      return this._showStatus('Expiring & Limited');
    } else if(this.props.status === "limited") {
      return this._showStatus('Limited');
    } else if(this.props.unlocked) {
      return this._showUnlockedStatus();
    }
  },

  _showStatus: function (title, date) {
    var formattedDate = this._dateString(date);

    return (
      <span className="completed">{title} {formattedDate}</span>
    );
  },

  _showUnlockedStatus : function(){
    return (
      <span className="unlocked status-icon">
        <Icon icon="unlock" />
        <span>Challenge unlocked!</span>
      </span>
    );
  },

  _monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  _dateString: function (date) {
    var formattedDateStr = "";

    if (date) {
      var parsedDate = new Date(date);
      formattedDateStr = this._monthNames[parsedDate.getUTCMonth()] + " " + parsedDate.getUTCDate();
    }

    return formattedDateStr
  }
});

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
