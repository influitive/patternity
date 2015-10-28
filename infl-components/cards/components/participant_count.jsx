var React = require('react');
var Icon = require('../../icon.jsx');

var ParticipantCount = React.createClass({
  getDefaultProps : function(){
    return {
      participantCount : 0,
    };
  },
  propTypes : {
    participantCount : React.PropTypes.number,
  },
  render : function(){
    return (
      <span className="pt-challenge-participant-count">
        <Icon icon="user" />
        <span className="count">{this.props.participantCount}</span>
      </span>
    );
  }
});

module.exports = ParticipantCount;
