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

CardDetails.MetaData = CardMetaData;
//<CardMetaData type={this.props.type} onClick={this.props.onFilterByType} participantCount={this.props.participantCount} points={this.props.points} />

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
    this._adjustHeadline();
    this._addWindowResizeEvent();
  },

  componentDidUpdate : function(){
    this._adjustHeadline();
  },

  render : function(){
    return (
      <h4 className="headline" ref="headline" onClick={this.props.onHeadlineClick}>{this.props.headline}</h4>
    );
  },

  _adjustHeadline : function(){
    var headline = React.findDOMNode(this.refs.headline);
    var headlineMaxHeight = parseInt($(headline).css("max-height"));

    if(headline.clientHeight === headlineMaxHeight){
      this._ellipsisHeadlineText(headline, headlineMaxHeight);
    }
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustHeadline);
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

CardDetails.Description = React.createClass({
    PropTypes : {
    description : React.PropTypes.string
  },

  getDefaultProps : function(){
    return {
      description : ""
    };
  },

  render: function(){
    return (
      <div ref="description" className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
    );
  }
});

module.exports = CardDetails;
