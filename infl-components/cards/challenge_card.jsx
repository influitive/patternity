var React   = require('react');
var classNames = require('classnames');

var Icon = require('../icon.jsx');
var ButtonGroup = require('../button_group.jsx');

var Card = React.createClass({
  render : function(){
    return (
      <div className="pt-card">
        {this.props.children}
      </div>
    );
  }
});

var ChallengeCard = React.createClass({
  render: function () {
    return (
      <div className="pt-challenge-card">
        <Card>
          {this.props.children}
        </Card>
      </div>
    );
  }
});

ChallengeCard.Details = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      headline : "",
      description : "",
      onFilterByType : function(){}
    };
  },
  PropTypes : {
    type : React.PropTypes.string,
    headline : React.PropTypes.string,
    description : React.PropTypes.string,
    onFilterByType : React.PropTypes.func
  },
  render : function(){
    return (
      <div className="pt-challenge-details">
        <h4 className="headline">{this.props.headline}</h4>
        <ChallengeType type={this.props.type} onClick={this.props.onFilterByType} />
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
});

var ChallengeType = React.createClass({
  getDefaultProps : function(){
    return {
      type : "",
      onClick : function(){}
    };
  },
  PropTypes : {
    type : React.PropTypes.string,
    onClick : React.PropTypes.func
  },
  render : function(){
    return (
      <span className={"pt-challenge-type " + this.props.type.toLowerCase()} onClick={this.props.onClick}>
        {this.props.type.toLowerCase()}
      </span>
    );
  }
});

ChallengeCard.Actions = React.createClass({
  render : function(){
    return (
      <div className="pt-challenge-actions">
        <ButtonGroup>
          {this.props.children}
        </ButtonGroup>
      </div>
    );
  }
});

ChallengeCard.Image = React.createClass({
  getDefaultProps : function(){
    return {
      image : null,
    };
  },
  PropTypes : {
    image : React.PropTypes.string,
  },
  render : function(){
    return (
      <div className={"pt-challenge-image " + this._doesChallengeHaveAnImage()}>
        <img src={this.props.image} alt="Challenge Image" />
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
      points : 0,
      createdAt : "",
      status : "",
      completedOn : "",
      startedOn : ""
    };
  },
  PropTypes : {
    points : React.PropTypes.number,
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : React.PropTypes.string,
    startedOn : React.PropTypes.string
  },
  render : function(){
    return (
      <div className="pt-card-notice">
        <ChallengeStatus createdAt={this.props.createdAt} status={this.props.status} completedOn={this.props.completedOn} startedOn={this.props.startedOn} />
        <Points points={this.props.points} />
      </div>
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
        <Icon icon="coins" />
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
      startedOn : ""
    };
  },
  PropTypes : {
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : React.PropTypes.string,
    startedOn : React.PropTypes.string
  },
  render : function(){
    return (
      <span className="pt-challenge-status">
        {this._determineStatusDetails()}
      </span>
    );
  },
  _determineStatusDetails : function(){
    if(this.props.status === "completed") {
      return this._showCompletedStatus();
    } else if(this.props.status === "started") {
      return this._showStartedStatus();
    }
  },
  _showStartedStatus : function(){
    var startedOn = new Date(this.props.startedOn);
    return (
      <span className="completed">Started: {this._monthNames[startedOn.getUTCMonth()]} {startedOn.getUTCDate()}</span>
    );
  },
  _showCompletedStatus : function(){
    var completedOn = new Date(this.props.completedOn);
    return (
      <span className="completed">Completed: {this._monthNames[completedOn.getUTCMonth()]} {completedOn.getUTCDate()}</span>
    );
  },
  _monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
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
