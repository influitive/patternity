var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');

var _ = require("lodash");

var Tabs  = require("../../../../infl-components/tabs.jsx");
var ButtonGroup  = require("../../../../infl-components/button_group.jsx");
var ChallengeCard  = require("../../../../infl-components/cards/challenge_card.jsx");

var ChallengesPagePattern = React.createClass({
  getInitialState : function(){
    return {
      available : {
        tabIndex : 0,
        challenges :[
          {
            points : 5,
            featured : false,
            description : "Look to generate new referrals?  Try creating a new referral challenge and featuring it!",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "How to use LinkedIn suggestions in the referral challenge",
            id : 1,
            image : "http://manofdepravity.com/wp-content/uploads/2010/02/Shaking-Hands3.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Webinar",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "available",
            startedOn : "",
            unlocked : true
          },
          {
            points : 1000,
            featured : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "Your community manifesto.  Pass it on.",
            id : 2,
            image : "http://cdn2.business2community.com/wp-content/uploads/2013/08/Social-Selling-Manifesto.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Social",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "available",
            startedOn : "",
            unlocked : false
          }
        ]
      },
      started : {
        tabIndex : 1,
        challenges : [
          {
            points : 1000,
            featured : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "Heard something great from a customer",
            id : 3,
            image : "http://cdn2.business2community.com/wp-content/uploads/2013/08/Social-Selling-Manifesto.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Social",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "started",
            startedOn : "2015-03-10T14:46:34.913-05:00",
            unlocked : false
          }
        ]
      },
      later : {
        tabIndex : 2,
        challenges : []
      },
      completed : {
        tabIndex : 3,
        challenges :[
          {
            points : 1000,
            featured : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "Heard something great from a customer",
            id : 4,
            image : "http://cdn2.business2community.com/wp-content/uploads/2013/08/Social-Selling-Manifesto.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Social",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "2015-03-02T14:46:34.913-05:00",

            //Not part of the data we get back yet
            status : "completed",
            startedOn : "",
            unlocked : false
          }]
        }
    };
  },
  render : function(){
    return (
      <div className="challenges-page-pattern page-pattern">
        <Pattern title="challenges page demo">
          <Tabs>
            <Tabs.Tab title="Available">
              <div ref="available" className="challenge-cards">
                {this._buildCards(this.state.available.challenges)}
              </div>
            </Tabs.Tab>
            <Tabs.Tab title="Started">
              <div ref="started" className="challenge-cards">
                {this._buildCards(this.state.started.challenges)}
              </div>
            </Tabs.Tab>
            <Tabs.Tab title="Later">
              <div ref="later" className="challenge-cards">
                {this._buildCards(this.state.later.challenges)}
              </div>
            </Tabs.Tab>
            <Tabs.Tab title="Complete">
              <div ref="completed" className="challenge-cards">
                {this._buildCards(this.state.completed.challenges)}
              </div>
            </Tabs.Tab>
          </Tabs>
        </Pattern>
      </div>
    );
  },
  _buildCards : function(cards){
    var that = this;
    return cards.map(function(card){
      return (
        <ChallengeCard key={card.id}>
          <ChallengeCard.Notice
              points={card.points}
              status={card.status}
              createdAt={card.createdAt}
              completedOn={card.completedOn}
              startedOn={card.startedOn}
              unlocked={card.unlocked} />
          <ChallengeCard.Image image={card.image} />
          <ChallengeCard.Details type={card.type} headline={card.headline} description={card.description} />
          <ChallengeCard.Actions>
            {that._cardButtons(card.id, card.status)}
          </ChallengeCard.Actions>
        </ChallengeCard>
      );
    });
  },
  _cardButtons : function(cardId, status){
    if(status === "available"){
      return this._availableButtons(cardId);
    } else if(status === "started"){
      return this._startedButtons(cardId);
    } else if(status === "later"){
      return this._laterButtons(cardId);
    } else if(status === "completed"){
      return this._completedButtons(cardId);
    }

  },
  _completedButtons : function(cardId){
    return (
      <span>
        <button className="success" onClick={function(){}}>View</button>
      </span>
    );
  },
  _laterButtons : function(cardId){
    return (
      <span>
        <button className="secondary" onClick={this._availableChallenge} data-id={cardId}>Make Available</button>
        <button className="success" onClick={function(){}}>View</button>
      </span>
    );
  },
  _startedButtons : function(cardId){
    return (
      <span>
        <button className="secondary" onClick={function(){}} data-id={cardId}>Message</button>
        <button className="success" onClick={function(){}}>View</button>
      </span>
    );
  },
  _availableButtons : function(cardId){
    return (
      <span>
        <button className="secondary" onClick={this._laterChallenge} data-id={cardId}>Later</button>
        <button className="success" onClick={function(){}}>View</button>
      </span>
    );
  },
  _availableChallenge : function(event) {
    var challangeId = event.target.getAttribute("data-id");
    var availableChallenges = this.state.available;
    var laterChallenges = this.state.later;
    var selectedCard = {};
    for(var i = 0; i < laterChallenges.challenges.length; i++){
      if(laterChallenges.challenges[i].id === parseInt(challangeId)){
        laterChallenges.challenges[i].status = "available";
        availableChallenges.challenges.push(laterChallenges.challenges[i])
        laterChallenges.challenges.splice(i, 1);
      }
    }
    this.setState({
      available : availableChallenges,
      later : laterChallenges
    });
  },
  _laterChallenge : function(event){
    var challangeId = event.target.getAttribute("data-id");
    var availableChallenges = this.state.available;
    var laterChallenges = this.state.later;
    var selectedCard = {};
    for(var i = 0; i < availableChallenges.challenges.length; i++){
      if(availableChallenges.challenges[i].id === parseInt(challangeId)){
        availableChallenges.challenges[i].status = "later";
        laterChallenges.challenges.push(availableChallenges.challenges[i])
        availableChallenges.challenges.splice(i, 1);
      }
    }
    this.setState({
      available : availableChallenges,
      later : laterChallenges
    });
  }
});

module.exports = ChallengesPagePattern;

        // <div key={card.id} ref={"card-" + card.id} className="pt-challenge-card">
        //   <h2>{card.title}</h2>
        //   <p>{card.description}</p>
        //   <span className="participants">{card.participants}</span>
        //   <span className="points">{card.points}</span>
        //   <div className="actions">
        //     <ButtonGroup>
        //       <button className="secondary" onClick={that._laterChallenge} data-id={card.id}>Later</button>
        //       <button className="success">View</button>
        //     </ButtonGroup>
        //   </div>
        // </div>
