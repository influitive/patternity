var React = require('react');
var Points = require('./points.jsx');
var Icon = require('../../icon.jsx');

var CardMetaData = React.createClass({
  render : function(){
    return (
      <div className="pt-challenge-metadata">
        {this.props.children}
      </div>
    );
  }
});

module.exports = CardMetaData;
