var React = require("react");
var $ = require('jquery');

var CardMetaData = require('./card_meta_data.jsx');

var CardDetails = React.createClass({
  render : function(){
    return (
      <div className="pt-challenge-details">
        {this.props.children}
      </div>
    );
  }
});

var EllipsisText = function(){

  function run(element, maxHeight){
    if(element.scrollHeight >= maxHeight){
      ellipsisElementText(element, maxHeight);
    }
  }

  function ellipsisElementText(element, maxHeight){
    convertWordsToElements(element);
    removeLastVisibleWord(element);
    showHiddenWords(element);
    var lastVisibleWordElement = findLastVisibleWord(element, maxHeight);
    addEllipsis(lastVisibleWordElement)
  }

  function convertWordsToElements(element) {
    if(wordsHaveNotAlreadyBeenConverted(element)){
      $(element).html('<span>' + $(element).html().replace(/ /g,'</span> <span>') + '</span>');
    }
  }

  function wordsHaveNotAlreadyBeenConverted(element){
    return element.children.length === 0;
  }

  function removeLastVisibleWord(element){
    $(element).find(".last-visible-word").removeClass("last-visible-word");
  }

  function showHiddenWords(element){
    $(element).find(".hide-overflow-word").removeClass("hide-overflow-word");
  }

  function findLastVisibleWord(element, maxHeight){
    var words = $(element).find("span");
    var lastVisibleWordElement = null;

    for(var i = 0; i < words.length; i++){
      if(lastVisibleWordElement == null){
        if(($(words[i]).position().top + $(words[i]).height()) >= maxHeight){
          lastVisibleWordElement = words[i-1];
          hideOverflowWord(words[i]);
        }
      } else {
        hideOverflowWord(words[i]);
      }
    }

    return lastVisibleWordElement;
  }

  function hideOverflowWord(overflowWordElement){
    $(overflowWordElement).addClass("hide-overflow-word");
  }

  function addEllipsis(lastVisibleWordElement){
    $(lastVisibleWordElement).addClass("last-visible-word");
  }

  return {
    run : run
  }
};

var ellipsisText = new EllipsisText();

CardDetails.Headline = React.createClass({
    PropTypes : {
    headline : React.PropTypes.string,
    onHeadlineClick : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      headline : "",
      onHeadlineClick : function(){}
    };
  },

  componentDidMount : function(){
    this._ellipsisHeadline();
    this._addWindowResizeEvent();
  },

  componentDidUpdate : function(){
    this._ellipsisHeadline();
  },

  render : function(){
    return (
      <h4 className="headline" ref="headline" onClick={this.props.onHeadlineClick}>{this.props.headline}</h4>
    );
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._ellipsisHeadline);
  },

  _ellipsisHeadline : function(){
    var headline = React.findDOMNode(this.refs.headline);
    var headlineMaxHeight = parseInt($(headline).css("max-height"));
    ellipsisText.run(headline, headlineMaxHeight);
  }
});

CardDetails.Description = React.createClass({
    PropTypes : {
    description : React.PropTypes.string
  },

  getDefaultProps : function(){
    return {
      description : ""
    };
  },

  componentDidMount : function(){
    this._addWindowResizeEvent();
    this._adjustDescriptionHeight();
  },

  componentDidUpdate : function(){
    this._adjustDescriptionHeight();
  },

  render: function(){
    return (
      <div ref="description" className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
    );
  },

  _adjustDescriptionHeight : function(){
    var description = React.findDOMNode(this.refs.description);
    var card = $(description).parents(".pt-card");

    if(description) {
      var cardHeight = $(card).outerHeight(true);
      var imageHeight = $(card).find(".pt-challenge-image ").outerHeight(true);
      var actionsHeight = $(card).find(".pt-card-actions").outerHeight(true);
      var titleHeight = $(card).find(".headline").outerHeight(true);
      var typeHeight = $(card).find(".pt-challenge-metadata").outerHeight(true);

      description.style.height = (cardHeight - actionsHeight - titleHeight - typeHeight - imageHeight) + "px";

      this._ellipsisDescription();
    }
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustDescriptionHeight);
  },

  _ellipsisDescription : function(){
    var description = React.findDOMNode(this.refs.description);
    var descriptionMaxHeight = parseInt(description.style.height);
    ellipsisText.run(description, descriptionMaxHeight);
  }
});

module.exports = CardDetails;
