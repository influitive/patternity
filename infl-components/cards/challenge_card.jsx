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
      completedOn : ""
    };
  },
  PropTypes : {
    points : React.PropTypes.number,
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : ""
  },
  render : function(){
    return (
      <div className="pt-card-notice">
        <ChallengeStatus createdAt={this.props.createdAt} status={this.props.status} completedOn={this.props.completedOn} />
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
      completedOn : ""
    };
  },
  PropTypes : {
    createdAt : React.PropTypes.string,
    status : React.PropTypes.string,
    completedOn : ""
  },
  render : function(){
    return (
      <span className="pt-challenge-status">

      </span>
    );
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
