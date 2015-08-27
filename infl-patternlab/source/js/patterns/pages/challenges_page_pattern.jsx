var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');

var _ = require("lodash");

var PanelLeftSidebar  = require("../../../../infl-components/pages/panel_left_sidebar.jsx");
var Sidebar           = require("../../../../infl-components/sidebar.jsx");
var Content           = require("../../../../infl-components/content.jsx");

var Tabs  = require("../../../../infl-components/tabs.jsx");
var ButtonGroup  = require("../../../../infl-components/button_group.jsx");
var ChallengeCard  = require("../../../../infl-components/cards/challenge_card.jsx");
var Card  = require("../../../../infl-components/cards/card.jsx");
var CardMetaData  = require("../../../../infl-components/cards/components/card_meta_data.jsx");
var CardDetails  = require("../../../../infl-components/cards/components/card_details.jsx");
var Points  = require("../../../../infl-components/cards/components/points.jsx");
var ChallengeTile  = require("../../../../infl-components/cards/components/challenge_tile.jsx");
var ParticipantCount  = require("../../../../infl-components/cards/components/participant_count.jsx");
var ChallengeLabel  = require("../../../../infl-components/cards/components/challenge_label.jsx");

var ChallengesPagePattern = React.createClass({
  getInitialState : function(){
    return {
      available : {
        tabIndex : 0,
        challenges :[
          {
            points : 5,
            featured : false,
            description : "",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "How to use LinkedIn suggestions in the referral challenge. How to use LinkedIn suggestions in the referral challenge.",
            id : 1,
            image : "http://manofdepravity.com/wp-content/uploads/2010/02/Shaking-Hands3.jpg",
            name : "LinkedIn referral help",
            stage_count : 5,
            stage_types : [],
            type : "Social Sharing",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "available",
            startedOn : "",
            unlocked : true,
            multiple_completion : true
          },
          {
            points : 1000,
            featured : false,
            description : "Loremd&#39;s ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "Your community manifesto.  Pass it on.",
            id : 2,
            image : "http://cdn2.business2community.com/wp-content/uploads/2013/08/Social-Selling-Manifesto.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Fun",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "started",
            startedOn : "",
            unlocked : false
          },
          {
            points : 200,
            featured : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "This is another awesome challenge for you.",
            id : 5,
            image : null,
            name : "Some Challenge",
            stage_count : 0,
            stage_types : [],
            type : "Educational",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "expiring",
            startedOn : "",
            unlocked : false
          },
          {
            points : 200,
            featured : false,
            description : "",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "This is another awesome challenge for you.",
            id : 6,
            image : null,
            name : "Some Challenge",
            stage_count : 0,
            stage_types : [],
            type : "Referral",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "",

            //Not part of the data we get back yet
            status : "available",
            startedOn : "",
            unlocked : false
          },
          {
            points : 1000,
            featured : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            createdAt : "2015-03-02T14:46:34.913-05:00",
            headline : "Your community manifesto.  Pass it on.",
            id : 7,
            image : "http://cdn2.business2community.com/wp-content/uploads/2013/08/Social-Selling-Manifesto.jpg",
            name : "LinkedIn referral help",
            stage_count : 0,
            stage_types : [],
            type : "Survey",
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
            type : "Review",
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
            type : "Case Study",
            participantCount : 5,
            timeoutMessage : "",
            completedOn : "2015-03-02T14:46:34.913-05:00",

            //Not part of the data we get back yet
            status : "completed",
            startedOn : "",
            unlocked : false
          }
        ]
      },
      tabStyling : "hide-tabs"
    };
  },
  render : function(){
    return (
      <div className="challenges-page-pattern page-pattern">
        <Pattern title="challenges page demo">
          <PanelLeftSidebar id="form-page">
            <Sidebar>
              <Sidebar.Heading title="Responsive Tabs Options" />
              <Sidebar.NavList
                  title="Select Responsive Styling"
                  key="responsive-styling"
                  listItems={this._responsiveSizingItems()} />
            </Sidebar>
            <Content>
              <Tabs showAllTabs={this._tabStyling()}>
                <Tabs.Tab title="Available" id="available-tab">
                  <Card.Container>
                    {this._buildCards(this.state.available.challenges)}
                  </Card.Container>
                </Tabs.Tab>
                <Tabs.Tab title="Started" id="started-tab">
                  <Card.Container>
                    {this._buildCards(this.state.started.challenges)}
                  </Card.Container>
                </Tabs.Tab>
                <Tabs.Tab title="Later" id="later-tab">
                  <Card.Container>
                    {this._buildCards(this.state.later.challenges)}
                  </Card.Container>
                </Tabs.Tab>
                <Tabs.Tab title="Complete" id="complete-tab">
                  <Card.Container>
                    {this._buildCards(this.state.completed.challenges)}
                  </Card.Container>
                </Tabs.Tab>
              </Tabs>
            </Content>
          </PanelLeftSidebar>
        </Pattern>
      </div>
    );
  },
  _responsiveSizingItems : function(){
    var that = this;
    return [
      {
        name : "Hide Tabs",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isActiveStyling("hide-tabs"),
          href : "javascript:void(0);",
          onClick : function(){
            that._switchActiveStyling("hide-tabs");
          }
        },
        key : "hide-tabs"
      },
      {
        name : "Show All Tabs",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isActiveStyling("show-all-tabs"),
          href : "javascript:void(0);",
          onClick : function(){
            that._switchActiveStyling("show-all-tabs");
          }
        },
        key : "two-column"
      }
    ];
  },
  _tabStyling : function(){
    return this.state.tabStyling === "show-all-tabs";
  },
  _isActiveStyling : function(styling){
    return styling === this.state.tabStyling ? "active" : "";
  },
  _switchActiveStyling : function(styling){
    this.setState({
      tabStyling : styling
    });
  },
  _buildCards : function(cards){
    var that = this;
    return cards.map(function(card){
      return (
        <ChallengeCard key={card.id} id={"card-" + card.id} animateEntrance={true}>
          <ChallengeTile.Container>
            {that._challengeTiles(card['multiple_completion'], card.status)}
          </ChallengeTile.Container>
          <ChallengeCard.Image image={card.image} />
          <CardDetails>
            <CardMetaData>
              <ChallengeLabel label={card.type} />
              <Points points={card.points} />
              <ParticipantCount participantCount={card.unique_participant_count} />
            </CardMetaData>
            <CardDetails.Headline headline={card.headline} />
            <CardDetails.Description description={card.description} />
          </CardDetails>
          <ChallengeCard.Actions>
            {that._cardButtons(card.id, card.status)}
          </ChallengeCard.Actions>
        </ChallengeCard>
      );
    });
  },

  _challengeTiles : function(multiComplete, status){
    if(multiComplete){
      return (<ChallengeTile key="multi" type="multi" />);
    } else if (status === 'limited_expiring') {
      return (
        <span>
          <ChallengeTile key="limited" type="limited" />
          <ChallengeTile key="expiring" type="expiring" />
        </span>
      );
    } else {
      return (<ChallengeTile key={status} type={status} />);
    }
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
    for(var i = 0; i < laterChallenges.challenges.length; i++){
      if(laterChallenges.challenges[i].id === parseInt(challangeId)){
        laterChallenges.challenges[i].status = "available";
        availableChallenges.challenges.push(laterChallenges.challenges[i])
        laterChallenges.challenges.splice(i, 1);
      }
    }
    var that = this;
    this._animateCardStatusChange(document.getElementById("card-" + challangeId), function(){
      that._animateChallengeTab("available", function(){
        that.setState({
          available : availableChallenges,
          later : laterChallenges
        });
      });
    });
  },
  _laterChallenge : function(event){
    var challangeId = event.target.getAttribute("data-id");
    var availableChallenges = this.state.available;
    var laterChallenges = this.state.later;
    for(var i = 0; i < availableChallenges.challenges.length; i++){
      if(availableChallenges.challenges[i].id === parseInt(challangeId)){
        availableChallenges.challenges[i].status = "later";
        laterChallenges.challenges.push(availableChallenges.challenges[i])
        availableChallenges.challenges.splice(i, 1);
      }
    }
    var that = this;
    this._animateCardStatusChange(document.getElementById("card-" + challangeId), function(){
      that._animateChallengeTab("later", function(){
        that.setState({
          available : availableChallenges,
          later : laterChallenges
        });
      });
    });
  },
  //move this to an animation mixin and rename
  _animateCardStatusChange : function(card, callback){
    var scale = 1;

    requestAnimationFrame(update);

    function update() {
      scale = scale - (scale * 0.12);
      card.style.transform = 'scale(' + scale + ', ' + scale + ')';

      if (scale.toFixed(2) > 0.00) {
        requestAnimationFrame(update);
      } else {
        callback();
      }
    }
  },
  //move this to an animation mixin and rename
  _animateChallengeTab : function(tabName, callback){
    var tab = document.getElementById(tabName + "-tab");
    var title = tab.querySelector("a span");

    var startPosition = 0;
    var endPosition = -10;
    var position = 0;

    requestAnimationFrame(moveUp);

    function moveUp(){
      position = position - 2;
      title.style.transform = 'translate(0px, ' + position + 'px)';

      if(position >= endPosition){
        requestAnimationFrame(moveUp);
      } else {
        requestAnimationFrame(moveDown);
      }
    }

    function moveDown(){
      position = position + 2;
      title.style.transform = 'translate(0px, ' + position + 'px)';

      if(position <= startPosition){
        requestAnimationFrame(moveDown);
      } else {
        callback();
      }
    }
  }
});

module.exports = ChallengesPagePattern;
