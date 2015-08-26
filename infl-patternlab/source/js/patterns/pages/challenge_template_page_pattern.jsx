var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');

var Content           = require("../../../../infl-components/content.jsx");
var Card  = require("../../../../infl-components/cards/card.jsx");
var ChallengeTemplateCard  = require("../../../../infl-components/cards/challenge_template_card.jsx");
var CardImage = require('../../../../infl-components/cards/components/card_image.jsx');
var CardDetails = require('../../../../infl-components/cards/components/card_details.jsx');
var CardMetaData  = require("../../../../infl-components/cards/components/card_meta_data.jsx");
var ChallengeLabel  = require("../../../../infl-components/cards/components/challenge_label.jsx");

var PanelLeftSidebar  = require("../../../../infl-components/pages/panel_left_sidebar.jsx");
var Sidebar           = require("../../../../infl-components/sidebar.jsx");

var ChallengesPagePattern = React.createClass({
  getInitialState : function(){
    return {
      challenge_templates :[
        {
          points : 5,
          featured : false,
          description : "Loremd&#39;s ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          status : "available",
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
          status : "available",
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
    };
  },
  render : function(){
    return (
      <div className="challenges-page-pattern page-pattern">
        <Pattern title="challenges page demo">

              <Card.Container>
                {this._buildChallengeTemplateCards()}
              </Card.Container>

        </Pattern>
      </div>
    );
  },

  _listItems : function(){
    return [
      {
        name : "Challenge Template Cards",
        listItemComponent : "a",
        listItemComponentProps : {
          className : "active",
          href : "javascript:void(0);",
          onClick : function(){}
        },
        key : "challenge-template-cards"
      }
    ];
  },

  _buildChallengeTemplateCards : function(){
    var that = this;
    return this.state.challenge_templates.map(function(card){
      return (
        <ChallengeTemplateCard id={card.id}>
          <CardImage image={that._determineCardImage(card.image)} />
          <CardDetails>
            <CardMetaData>
              <ChallengeLabel label={card.type} />
            </CardMetaData>
            <CardDetails.Headline headline={card.headline} />
          </CardDetails >
        </ChallengeTemplateCard>
      );
    });
  },

  _determineCardImage: function(cardImage){
    var defaultImage = "https://s3.amazonaws.com/influitive-static/challenges/generic_challenge.jpg";
    return cardImage || defaultImage;
  }
});

module.exports = ChallengesPagePattern;
